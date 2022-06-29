import db from "../models/index";
import { createNewUser } from "../services/CRUDservice";
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();

    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};

let getCRUD = async (req, res) => {
  try {
    return res.render("crudpage.ejs");
  } catch (error) {
    console.log(error);
  }
};
let postCRUD = async (req, res) => {
  await createNewUser(req.body);
  return res.render("crudpage.ejs");
};
module.exports = {
  getHomePage,
  getCRUD,
  postCRUD,
};
