const axios = require('axios');
const e = require('express');
const { response, request } = require('express');
const { getProductsEndpoint, getProductEndpoint, getProductDescriptionEndpoint } = require('../config');
const Author = require('../models/author');
const Product = require('../models/product');

/**
 * Returns a list of products depending on your search parameters
 * @param {*} req request
 * @param {*} res response
 * @returns a list products
 */
const getProducts = async (req = request, res = response) => {
  const { q } = req.query;
  try {
    const instance = axios.create({
      baseURL: getProductsEndpoint(),
      params: {
        q,
        limit: 10
      }
    });

    const { data } = await instance.get();

    const categories = [];
    const categoryFilter = data.filters.find(filter => filter.id === 'category');
    if (categoryFilter) {
      categoryFilter.values.forEach(value => {
        value['path_from_root'].forEach(cat => categories.push(cat.name))
      });
    };

    const items = data.results.map(item => new Product(item));

    return res.json({
      author: new Author(),
      categories,
      items
    })
  } catch (error) {
    return res.status(e.code).json({message: e.message});
  }
}

/**
 * return one product by id
 * @param {*} req request
 * @param {*} res response
 * @returns one product
 */
const getProduct = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    const [ { data: item }, { data: description } ] = await Promise.all([
      axios.get(getProductEndpoint(id)),
      axios.get(getProductDescriptionEndpoint(id))
    ]);

    res.json({
      author: new Author(),
      item: new Product(item, description)
    })
  } catch (err) {
    res.status(err.response.status).json({error: err.response.statusText});
  }
}

module.exports = {
  getProducts,
  getProduct
}
