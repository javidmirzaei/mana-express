import { Router } from "express";
import userRoute from "./user.router";
import blogRouter from "./blog.router";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

router.use("/users", userRoute);
router.use("/blog", blogRouter);

export const allRoutes = router;
