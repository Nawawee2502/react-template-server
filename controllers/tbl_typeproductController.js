const tbl_typeproductModel = require("../models/mainModel").Tbl_typeproduct;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Op } = require('sequelize');

exports.addtypeproduct = async (req, res) => {
  try {
    tbl_typeproductModel.create({
      typeproduct_code: req.body.typeproduct_code,
      typeproduct_name: req.body.typeproduct_name,

    })
    res.status(200).send({ result: true })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: error })
  }

};

exports.updatetypeproduct = async (req, res) => {
  try {
    tbl_typeproductModel.update(
      { typeproduct_name: req.body.typeproduct_name },
      { where: { typeproduct_code: req.body.typeproduct_code } }
    );
    res.status(200).send({ result: true })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: error })
  }

};


exports.deletetypeproduct = async (req, res) => {
  try {
    tbl_typeproductModel.destroy(
      { where: { typeproduct_code: req.body.typeproduct_code } }
    );
    res.status(200).send({ result: true })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: error })
  }

};

exports.typeproductAll = async (req, res) => {
  try {
    const { offset, limit } = req.body;
    const typeproductShow = await tbl_typeproductModel.findAll({ offset: offset, limit: limit });
    // const typeproductShow = await tbl_typeproductModel.findAll({ offset: 0, limit: 5 });
    res.status(200).send({ result: true, data: typeproductShow })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: error })
  }
};

exports.countProduct = async (req, res) => {
  try {
    const amount = await tbl_typeproductModel.count({
      where: {
        typeproduct_id: {
          [Op.gt]: 0,
        },
      },
    });
    res.status(200).send({ result: true, data: amount })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: error })
  }
};