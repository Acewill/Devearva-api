const express = require('express');
const router = express.Router();
const inventarioCtrl = require('../controllers/inventarioController');
const authJwt = require('../controllers/inventarioController');
const { body, validationResult } = require('express-validator');





router.post('/' ,inventarioCtrl.createInventario)

router.get('/', inventarioCtrl.getInventario)

router.delete('/:inventarioId', inventarioCtrl.deleteInventarioById)

router.put('/:inventarioId' ,inventarioCtrl.updateInventarioById)

//router.post('/',[authJwt.verifyToken, authJwt.isModerator ], productsCtrl.createProduct)


// router.get('/:productId', productsCtrl.getProductById)

// router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin ] ,productsCtrl.updateProductById)

module.exports = router;