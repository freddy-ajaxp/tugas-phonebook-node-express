// const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  if (req.session && req.session.user === "admin" && req.session.admin)
    return next();
  else return res.render("login.ejs");
};
