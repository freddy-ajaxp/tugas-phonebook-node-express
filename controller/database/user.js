const { Biodata } = require("../../models");
const { User } = require("../../models");
// const BiodataController = require("./biodata.js");

const bycript = require("bcrypt");
session = require("express-session");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //loggedin already? redirect to dashboard
    if (req.session.user === "admin" && req.session.admin === true) {
      res.redirect("/");
    }
    //!loggedin && form submit benar
    else if (email && password) {
      const userFound = await User.findOne({
        raw: true,
        where: {
          email: email,
        },
      });
      // !emailExist && redirect | masih belum disertai pesan error
      if (!userFound) {
        res.redirect("/");
      }
      const validPass = await bycript.compare(password, userFound.password);
      if (!validPass) {
        res.redirect("/login");
      }
      req.session.user = userFound.username;
      req.session.admin = userFound.admin;
      res.redirect("/");
    }
    //redirect to login page
    else {
      res.render("login.ejs");
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.logout = async (req, res) => {
  req.session.destroy();
  res.redirect("/login");
};
