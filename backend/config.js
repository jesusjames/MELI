const baseURL = 'https://api.mercadolibre.com';

const getProductsEndpoint = () => `${ baseURL }/sites/MLA/search`;

const getProductEndpoint = (id) => `${ baseURL }/items/${ id }`;

const getProductDescriptionEndpoint = (id) => `${ baseURL }/items/${ id }/description`;

module.exports = {
  getProductsEndpoint,
  getProductEndpoint,
  getProductDescriptionEndpoint
}
