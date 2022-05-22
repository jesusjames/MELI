class Product {

  constructor(product, productDesc) {
    return this.buildProduct(product, productDesc);
  }

  buildProduct(product, productDesc) {
    const item = {
      id: product.id,
      title: product.title,
      price: {
        currency: product.currency_id,
        amount: product.price,
        decimals: parseFloat((product.price % 1).toFixed(2)),
      },
      picture: product.thumbnail,
      condition: product.condition,
      free_shipping: product.shipping.free_shipping,
      sold_quantity: product.sold_quantity,
    };

    if (productDesc) {
      item.description = productDesc.plain_text;
    }

    return item;
  }

}

module.exports = Product;
