const { Biodata } = require("../../models");
const { User } = require("../../models");
const bcrypt = require("bcrypt");
session = require("express-session");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //!loggedin && form submit benar
    if (email && password) {
      const userFound = await User.findOne({
        raw: true,
        where: {
          email: email,
        },
      });
      // !emailExist && redirect | masih belum disertai pesan error
      if (!userFound) {
        res.status(401).send({message:"invalid password or email"})
      } else {
        const validPass = await bcrypt.compare(password, userFound.password);
        if (!validPass) {
          // res.redirect("/");
          res.status(401).send({message:"invalid password or email"})
        } else {
          req.session.user = userFound.username;
          req.session.admin = userFound.admin;
          res.redirect("/");
          // res.status(401).send({message:"invalid password or email"})
        }
      }
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

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const emailExist = await User.findOne({
      where: {
        email,
      },
    });
    if (emailExist) {
      return res.status(400).send({
        error: {
          message: "email has been registered",
        },
      });
    }

    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const createResponse = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    res.status(200).send({
      message: "user baru berhasil didaftarkan",
    });
  } catch (err) {
    console.log(err);
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
