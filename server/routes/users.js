const express = require('express');

const router = express.Router();
const controllers = require('../controllers/exampleController');
const responseHandler = require('../middleware/errorHandler');

router.get('/', (req, res, _next) => {
  res.send('respond with a resource');
});

router.get('/test-route', controllers.healthCheck, responseHandler);

module.exports = router;
