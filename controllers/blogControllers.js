const BaseController = require("./baseControllers");
const blog = require("../model/blog.model");

class BlogController extends BaseController {
  constructor() {
    super(blog);
  }
}

module.exports = new BlogController();
