var express = require('express');
var router = express.Router();


//DB controller
const { findAll, getContact, getContactPagination, editContact, postContact, deleteContact} = require("../controller/database/biodata");
const { login, logout, register} = require("../controller/database/user");

//middleware
const { auth } = require('../middleware/auth');
const {validation} = require('../middleware/validation'); 
const schemas = require('../middleware/schema'); 
//routes untuk pengolahan data
router.get("/", auth, findAll);
router.post("/contacts", getContactPagination);
router.get("/contact/:id", auth, getContact);
router.post("/contact", auth, validation(schemas.addContact), postContact);
router.post("/editContact", auth, validation(schemas.editContact), editContact);
router.post("/register",validation(schemas.register), register);
router.post("/delete", auth, deleteContact);
router.post("/login", validation(schemas.login), login);
router.get("/login", login);
router.get("/logout", logout); 

//untuk yang hanya fetch halaman
router.get('/', function(req, res) {
  res.render("dashboard.ejs")
});
router.get('/add-contact', auth, function(req, res) {
  res.render("add-contact.ejs")
});
router.get('/register', function(req, res) {
  res.render("register.ejs")
});

router.post('/dummy', validation(schemas.login), function(req, res) {
  res.status(200).send({message: "melewati validation"})
});


module.exports = router;
