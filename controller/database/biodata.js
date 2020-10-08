const { Biodata } = require("../../models");
const { Sequelize } = require("sequelize");
session = require("express-session");

exports.findAll =  async  (req, res) => {
  try {
    const contactList = await  Biodata.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    console.log(contactList)
    res.render("dashboard.ejs", { response: { contactList } });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.getContact = async (req, res) => {
  try {
    const { id } = req.params;
    const dataContact = await Biodata.findOne({
      where: {
        id: id,
      },
    });
    if (!dataContact)
      return res.status(400).send({
        message: `Contact with id: ${id} is not existed`,
      });
    res.render("edit-contact.ejs", { dataContact });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      error: {
        message: "Something Happenned, contact Admin",
      },
    });
  }
};

exports.editContact = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const result = await Biodata.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    const dataContact = await Biodata.findOne({
      where: {
        id: req.params.id,
      },
    });
    // res.render("edit-contact.ejs", { dataContact });
    res.redirect("/");
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      error: {
        message: "Something Happenned, contact Admin",
      },
    });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.body;
    const contactFound = await Biodata.findOne({
      where: {
        id: id,
      },
    });

    if (!contactFound)
      return res.status(400).send({
        message: `contact is not existed`,
      });
    else {
      await Biodata.destroy({
        where: {
          id: id,
        },
      });
    }
    const contactList = await Biodata.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.render("dashboard.ejs", { response: { contactList } });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.postContact = async (req, res) => {
  console.log("isi req.body :");
  console.log(req.body);
  try {
    const queryResponse = await Biodata.create({
      ...req.body,
    });
    res.render("add-contact.ejs", { queryResponse });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};
