const BaseController = require("./baseControllers");
const User = require("../model/user.model");

class UserController extends BaseController {
  constructor() {
    super(User);
  }
}

module.exports = new UserController();
