var express = require('express');
var router = express.Router();


//DB controller
const { findAll, getContact, editContact,postContact, deleteContact} = require("../controller/database/biodata");
const { login, logout} = require("../controller/database/user");
const { auth } = require('../middleware/auth');

//routes untuk pengolahan data
router.get("/", auth, findAll);
router.get("/contact/:id", auth, getContact);
router.post("/contact", auth, postContact);
router.post("/editContact/:id", auth, editContact);
router.post("/delete", auth, deleteContact);
router.post("/login", login);
router.get("/login", login);
router.get("/logout", logout);

//untuk yang hanya fetch halaman
router.get('/', function(req, res) {
  res.render("dashboard.ejs")
});
router.get('/add-contact', auth, function(req, res) {
  res.render("add-contact.ejs")
});
// router.get('/login', function(req, res) {
//   res.render("login.ejs")
// });

module.exports = router;
