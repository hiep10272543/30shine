import express from "express";
import {
  getHomePage,
  getCRUD,
  postCRUD,
  getDisplayCRUD,
} from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", getHomePage);
  router.get("/crud", getCRUD);
  router.post("/crud", postCRUD);
  router.get("/get-crud", getDisplayCRUD);

  return app.use("/", router);
};

module.exports = initWebRoutes;
