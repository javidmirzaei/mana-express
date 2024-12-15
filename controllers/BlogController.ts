import { blogModel } from "@models/blog.model"
import { baseControllers } from "@controllers/baseControllers"

export class BlogController extends baseControllers {
  constructor() {
    super(blogModel);
  }


  async findByID(id:number){
    return await this.model.findById(id);
  }
}

