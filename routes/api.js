var express = require("express");
var router = express.Router();
var PersonController = require("../controllers/PersonController");
var ProductController = require("../controllers/ProductController");
var AuthController = require("../controllers/AuthController");

// Vai ser necessário char um next para cair em uma das rotas
// e isso só vai acontecer se o token estiver ok.
// veja AuthController checkToken.
router.use(AuthController.check_token);

router.get('/people', PersonController.all);
router.get('/products', ProductController.all);

module.exports = router;