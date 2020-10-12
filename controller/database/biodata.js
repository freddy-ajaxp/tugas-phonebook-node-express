const { Biodata } = require("../../models");
const { Sequelize } = require("sequelize");
session = require("express-session");

const getPagination = (page, size) => {
  const limit = size ? +size : 5;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: tutorials } = data;
  const currentPage = page>0 ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { recordsTotal:totalItems, data: tutorials, totalPages, draw:currentPage };
};
const countNavPage = (draw, totalPage) => {
//  if (draw===1 & totalPage>=3) return [1,2,null]
//  else if (draw===totalPage && totalPage===1) return [1]
//  else if (draw===totalPage & totalPage>=3) return [draw-2,draw-1,draw]
//  else if ((totalPage-draw)>=3) return [draw-1, draw, draw+1]
return [draw]
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
    response.page = 4;
    response.start = 1;
    response.end = 10;
    response.iTotalDisplayRecords =10
    response.iTotalRecords = 11
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
    let navigationPage = countNavPage(response.draw, response.totalPages)
    res.render("dashboard.ejs", { response: { contactList, navigationPage, response } });
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
    console.log('req.body',req.body)
    const {fullname, email, phone_num} = req.body;
    if(fullname, email, phone_num){
      const result = await Biodata.update(req.body, {
        where: {
          id: req.body.id,
        },
      });
      console.log('status update',result)
      // res.redirect("/");
      res.status(200).send({message:"berhasil ubah data"})
    }
    else{
      res.status(400).send({message:"data yang dikirim tidak lengkap"})
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
    this.findAll(req,res)
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
  console.log('isi req',req.body)
  try {
    const queryResponse = await Biodata.create({
      ...req.body,
    });
    // res.render("add-contact.ejs", { queryResponse });
    this.findAll(req,res)
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};
