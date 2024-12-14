import { blogModel } from "@models/blog.model"
import { baseControllers } from "@controllers/baseControllers"

export class BlogController extends baseControllers {
  constructor() {
    super(blogModel);
  }
}

