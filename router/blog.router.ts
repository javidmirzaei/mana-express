// const BaseRoute = require("./baseRoute");
// const blogController = require("../controllers/blogControllers");
import { baseControllers } from "@controllers/baseControllers";
import { ControllerType } from "../types";
import { BaseRoute } from "./baseRoute";
import { BlogController } from "@controllers/BlogController";
import { Request, Response, NextFunction } from "express";
import { Model } from "mongoose";

export class blogRoute extends BaseRoute {
  constructor(blogController:ControllerType) {
    super(blogController);
  }
}


const newBlogController = new BlogController();
export const newBlogRouter = new blogRoute(newBlogController);
