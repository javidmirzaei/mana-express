import { BaseRoute } from "./baseRoute";
import { UserController } from "../controllers/UserController";

const userController = new UserController();
const userRoute = new BaseRoute(userController);

export default userRoute.getRouter(); 