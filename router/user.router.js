const BaseRoute = require("./baseRoute");
const userController = require("../controllers/userController");

class userRoute extends BaseRoute {
  constructor() {
    super(userController);
  }
}

module.exports = new userRoute().getRouter();
