// const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  if (req.session.user)
    return next();
  else return res.render("login.ejs");
};
