const express = require('express');
const router = express.Router();
const gastoCtrl = require('../controllers/gastoController');
const authJwt = require('../controllers/gastoController');
const { body, validationResult } = require('express-validator');




router.post('/' ,gastoCtrl.createGasto)

router.get('/', gastoCtrl.getGastos)

router.delete('/:gastoId', gastoCtrl.deleteGastoById)

router.put('/:gastoId' , gastoCtrl.updateGastoById)

//router.post('/',[authJwt.verifyToken, authJwt.isModerator ], productsCtrl.createProduct)


// router.get('/:productId', productsCtrl.getProductById)

// router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin ] ,productsCtrl.updateProductById)

module.exports = router;