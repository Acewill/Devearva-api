const express = require('express');
const router = express.Router();
const marcaCtrl = require('../controllers/marca.controller');
const authJwt = require('../controllers/marca.controller');
const { body, validationResult } = require('express-validator');







router.post('/',marcaCtrl.createMarca)

router.get('/', marcaCtrl.getMarca)


router.put('/:marcaId', marcaCtrl.updateMarcaById)

//router.post('/',[authJwt.verifyToken, authJwt.isModerator ], productsCtrl.createProduct)


// router.get('/:productId', productsCtrl.getProductById)

// router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin ] ,productsCtrl.updateProductById)


module.exports = router;