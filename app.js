const express = require("express");
const favicon = require("serve-favicon");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const path = require("path");
const env = require("dotenv");
const privateKey = fs.readFileSync("privateKey.key");
env.config({
  path: path.join(__dirname, `.env`),
});
const app = express();
const secret =
  "4fb900905353d2f8016f5abba888736847776e29ab27166ef87e5f0b7924fb72";
const token = jwt.sign(
  { id: "some-hash-id", emal: "javid@gmail.com" },
  privateKey,
  {
    expiresIn: "1d",
    algorithm: "RS512",
  }
);

// console.log(token);

const { allRoutes } = require("./router");
const { getAllUsers, createUser } = require("./controllers/baseControllers");
app.use(express.json());
require("./config/mongo.config");
app.use(favicon(path.join(__dirname, "logo.png")));
app.use(allRoutes);
app.listen(process.env.PORT, () => {
  console.log(
    `server runned at port ${process.env.PORT} http://localhost:${process.env.PORT} `
  );
});
