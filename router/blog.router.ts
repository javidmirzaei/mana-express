import { BaseRoute } from "./baseRoute";
import { BlogController } from "../controllers/BlogController";

const blogController = new BlogController();
const blogRoute = new BaseRoute(blogController);

export default blogRoute.getRouter();
