const combosController = require('../controllers').combos;
const productsController = require('../controllers').products;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to API!',
  }));
  console.log('// Combos =========');
  app.post('/api/combos', combosController.create);
  
  console.log('// Products =======');
  app.get('/api/products', productsController.list);
  app.post('/api/product', productsController.create);
  app.delete('/api/product/:id', productsController.delete);
  app.get('/api/products/search', productsController.search);
  app.get('/api/products/:id', productsController.findone);

};
