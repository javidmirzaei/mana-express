const BaseController = require("./baseControllers");
const { BlogModel } = require("../models/Blog.model");

class BlogController extends BaseController {
  constructor() {
    super(BlogModel);
  }
}

module.exports = new BlogController();