const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const { body } = require('express-validator');
require('dotenv').config()

router.post('/',
    body('email').isEmail().withMessage("Formato de correo no válido."),
    body('pwd').isStrongPassword({
        minLength: 3,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minLowerCase: 1
      }).withMessage("Formato de contraseña no valido"),
     [registerController.handleNewUser]);

module.exports = router;