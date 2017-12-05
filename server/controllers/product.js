const Product = require('../models').Product;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  create(req, res) {
    return Product
      .create({
        description: req.body.description,
        code: req.body.code,
        price: req.body.price
      })
      .then(product => res.status(201).send(product))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Product
      .all()
      .then(products => res.status(200).send(products))
      .catch(error => res.status(400).send(error));
  },
  search(req, res) {
    // console.log(req.query);
    return Product
      .findAll({
        where: {
          code: {
            [Op.like]: '%' + req.query.q + '%',
          }
        },
      })
      .then(products => res.status(200).send(products))
      .catch(error => res.status(400).send(error));
  },
};