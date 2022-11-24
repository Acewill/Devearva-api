const express = require('express');
const router = express.Router();
const maquinariaCtrl = require('../controllers/maquinaria.controller');
const authJwt = require('../controllers/maquinaria.controller');
const { body, validationResult } = require('express-validator');







router.post('/',maquinariaCtrl.createMaquinaria)

router.get('/', maquinariaCtrl.getMaquinarias)

router.delete('/:maquinariaId', maquinariaCtrl.deleteMaquinariaById)

router.put('/:maquinariaId', maquinariaCtrl.updateMaquinariaById)

//router.post('/',[authJwt.verifyToken, authJwt.isModerator ], productsCtrl.createProduct)


// router.get('/:productId', productsCtrl.getProductById)

// router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin ] ,productsCtrl.updateProductById)


module.exports = router;