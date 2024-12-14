const BaseController = require("./baseControllers");
const { ProductsModel } = require("../models/products.model");

class ProductsController extends BaseController {
  constructor() {
    super(ProductsModel);
  }
}

module.exports = new ProductsController();
