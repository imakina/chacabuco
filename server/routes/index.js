const combosController = require('../controllers').combos;
const productsController = require('../controllers').products;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to API!',
  }));
  console.log('inserted combos');
  app.post('/api/combos', combosController.create);
  
  console.log('inserted products');
  app.get('/api/products', productsController.list);
  app.get('/api/products/search', productsController.search);

};
