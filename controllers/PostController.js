const BaseController = require("./baseControllers");
const { PostModel } = require("../models/Post.model");

class PostController extends BaseController {
  constructor() {
    super(PostModel);
  }
}

module.exports = new PostController();