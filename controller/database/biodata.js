const { Biodata } = require("../../models");
const { Sequelize, Op } = require("sequelize");
session = require("express-session");
datatablesQuery = require("datatables-query");

const getPagination = (page, length) => {
  const limit = length ? +length : 0;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: datas } = data;
  // const currentPage = page > 0 ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  console.log("apakah totalItems integer?", Number.isInteger(totalItems));
  console.log("apakah totalPages integer?", Number.isInteger(totalPages));
  return {
    recordsTotal: totalItems,
    recordsFiltered: totalItems,
    data: datas,
    totalPages: totalPages,
  };
};

exports.getDataTable = async (req, res) => {
  try {
    const { page, start, length, search } = req.body; //bisa dari query atau body
    const title = search.value;
    var condition = title ? { fullname: { [Op.like]: `%${title}%` } } : null;
    const { limit, offset } = getPagination(page, length);

    console.log("length, start", length, start);
    const contactList = await Biodata.findAndCountAll({
      raw: true,
      where: condition,
      limit: parseInt(length),
      offset: parseInt(start),
      attributes: ["id", "fullname", "phone_num", "email"],
    });
    // console.log('contactList',contactList);
    let response = getPagingData(contactList, page, limit);
    // console.log('response', response)

    //ubah format data ke array (DIHAPUS SEMENTARA)

    res.send(response);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.getContactPagination = async (req, res) => {
  try {
    const { page, size, title } = req.query;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    const { limit, offset } = getPagination(page, size);

    const contactList = await Biodata.findAndCountAll({
      raw: true,
      where: condition,
      limit,
      offset,
      attributes: { exclude: ["createdAt", "updatedAt", "id"] },
    });
    let response = getPagingData(contactList, page, limit);

    //ubah format data ke array
    var output = contactList.rows.map(function (obj) {
      return Object.keys(obj)
        .sort()
        .map(function (key) {
          return obj[key];
        });
    });
    // response.page = 4;
    // response.start = 1;
    // response.end = 10;
    // response.iTotalDisplayRecords =10
    // response.iTotalRecords = 11
    // console.log("response", response);
    res.send(response);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

const countNavPage = (draw, totalPage) => {
  return [draw];
};
exports.findAll = async (req, res) => {
  try {
    const { page, size, title } = req.query;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    const { limit, offset } = getPagination(page, size);

    const contactList = await Biodata.findAndCountAll({
      raw: true,
      where: condition,
      limit,
      offset,
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    let response = getPagingData(contactList, page, limit);
    let navigationPage = countNavPage(response.draw, response.totalPages);
    res.render("dashboard-copy.ejs", {
      response: { contactList, navigationPage, response },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
  // try {
  //   const contactList = await  Biodata.findAll({
  //     attributes: { exclude: ["createdAt", "updatedAt"] },
  //   });
  //   res.render("dashboard.ejs", { response: { contactList } });
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).send({
  //     error: {
  //       message: "Server ERROR",
  //     },
  //   });
  // }
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
    const { fullname, email, phone_num } = req.body;
    if ((fullname, email, phone_num)) {
      const result = await Biodata.update(req.body, {
        where: {
          id: req.body.id,
        },
      });
      console.log("status update", result);
      // res.redirect("/");
      res.status(200).send({ message: "berhasil ubah data" });
    } else {
      res.status(400).send({ message: "data yang dikirim tidak lengkap" });
    }
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
    this.findAll(req, res);
    // res.render("dashboard.ejs", { response: { contactList } });
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
  console.log("isi req", req.body);
  try {
    const queryResponse = await Biodata.create({
      ...req.body,
    });
    // res.render("add-contact.ejs", { queryResponse });
    this.findAll(req, res);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};
