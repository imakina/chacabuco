const Product = require('../models').Product;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const messages = {
  ok : { message : 'Correct !'},
  failed : { message : 'Some trouble with it !'} 
}

module.exports = {
  create(req, res) {
    console.log("Create body", req.body)
    return Product
      .create({
        description: req.body.description,
        code: req.body.code,
        price: req.body.price
      })
      .then(product => res.status(201).send(messages.ok))
      .catch(error => res.status(400).send(error));
  },
  delete(req, res) {
    console.log("Delete body", req.params.id)
    return Product
      .destroy({
        where: { id: req.params.id } 
      })
      .then(product => res.status(201).send(messages.ok))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Product
      .all()
      .then(products => res.status(200).send(products))
      // .then(function(products) {
      //   var result = products.map((r) => (r.toJSON()));
      //   console.log(result);
      //   res.status(200).send(result); 
      // })
      // products => res.status(200).send(JSON.parse(JSON.stringify(products))))
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
  findone(req, res) {
    console.log("FindOne body", req.params.id)
    return Product
      .findOne({
        where: { id: req.params.id },
      })
      .then(product => res.status(201).send(product))
      .catch(error => res.status(400).send(error));
  },
};