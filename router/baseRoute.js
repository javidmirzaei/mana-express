class BaseRoute {
  constructor(controller) {
    this.router = require("express").Router();
    this.controller = controller;

    this.initRoutes();
  }

  initRoutes() {
    this.router.get("/", this.controller.index); //getAll
    this.router.get("/:id", this.controller.show); //getOne
    this.router.post("/", this.controller.store); //create
    this.router.put("/:id", this.controller.update); //update:put
    this.router.patch("/:id", this.controller.update); //update:patch
    this.router.delete("/:id", this.controller.delete); //delete
  }

  getRouter() {
    return this.router;
  }
}

module.exports = BaseRoute;
