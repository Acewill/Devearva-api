const express = require('express');
const router = express.Router();
const empleadoCtrl = require('../controllers/empleado.controller');
const authJwt = require('../controllers/empleado.controller');
const { body, validationResult } = require('express-validator');







router.post('/',
    body('cedula').isString().withMessage("Cedula no valida"),
   


    [empleadoCtrl.createEmpleado])

router.get('/', empleadoCtrl.getEmpleados)

router.delete('/:empleadoId', empleadoCtrl.deleteEmpleadoById)

router.put('/:empleadoId', empleadoCtrl.updateEmpleadoById)

//router.post('/',[authJwt.verifyToken, authJwt.isModerator ], productsCtrl.createProduct)


// router.get('/:productId', productsCtrl.getProductById)

// router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin ] ,productsCtrl.updateProductById)


module.exports = router;