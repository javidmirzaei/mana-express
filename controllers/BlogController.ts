import { blogModel } from "../model/blog.model"
import { baseControllers } from "./baseControllers"

export class BlogController extends baseControllers {
  constructor() {
    super(blogModel);
  }


  async findByID(id:number){
    return await this.model.findById(id);
  }
}

