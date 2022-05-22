const  express = require('express');
const cors = require('cors');
const routerProducts = require('./routes/products');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.productsPath = '/api/items';

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.productsPath, routerProducts);

    this.app.use((req, res) => {
      res.status(404).json({
        message: "The route does not exist"
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on the port ${ this.port }`);
    });
  }
}


module.exports = Server;
