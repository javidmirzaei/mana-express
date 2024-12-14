const BaseRoute = require("./baseRoute");
const blogController = require("../controllers/blogControllers");

class blogRoute extends BaseRoute {
  constructor() {
    super(blogController);
  }
}

module.exports = new blogRoute().getRouter();
