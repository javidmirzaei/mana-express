const { Router } = require("express");
const userRoute = require("./user.router");
const blogRouter = require("./blog.router");
const router = Router();

router.use("/users", userRoute);
router.use("/blog", blogRouter);

module.exports = {
  allRoutes: router,
};
