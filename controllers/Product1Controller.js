const BaseController = require("./baseControllers");
const { Product1Model } = require("../models/product1.model");

class Product1Controller extends BaseController {
  constructor() {
    super(Product1Model);
  }
}

module.exports = new Product1Controller();