import { baseControllers } from "./baseControllers";
import { userModel } from "../model/user.model";

export class UserController extends baseControllers {
  constructor() {
    super(userModel);
  }
}