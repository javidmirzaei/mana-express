import { IRouter, Router } from 'express';
import { ControllerType , RouteType } from "@ManaTypes"

export class BaseRoute implements RouteType {
  router: IRouter;
  controller: ControllerType;
  
  constructor(controller: ControllerType) {
    this.router = Router();
    this.controller = controller;

    this.initRoutes();
  }

  initRoutes() {
    this.router.get("/", this.controller.index.bind(this.controller));
    this.router.get("/:id", this.controller.show.bind(this.controller));
    this.router.post("/", this.controller.store.bind(this.controller));
    this.router.put("/:id", this.controller.update.bind(this.controller));
    this.router.patch("/:id", this.controller.update.bind(this.controller));
    this.router.delete("/:id", this.controller.delete.bind(this.controller));
  }

  getRouter() {
    return this.router;
  }
}
