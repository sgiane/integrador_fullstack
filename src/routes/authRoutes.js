const express = require("express");
// const {modelUser} = require("sequelize");
const router = express.Router();
const modelUser = require("../models/userModel");
const {body} = require ("express-validator");

const registerValidations = [
    body("email")
      .isEmail()
      .withMessage("Ingrese una dirección de correo electrónico válida")
      .bail()
      .custom((value, { req }) => {
        return new Promise(async (resolve, reject) => {
          try {
            const user = await modelUser.findOne({
              where: {
                email: value,
              },
            });
  
            if (user) {
              console.log(user);
              return reject();
            } else {
              return resolve();
            }
          } catch (error) {
            console.log(error);
          }
        });
      })
      .withMessage("Dirección de correo electrónico duplicada"),
    body("password")
      .isStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      .withMessage("La contraseña debe tener ...")
      .bail()
      .custom((value, { req }) => value === req.body.password_confirmation)
      .withMessage("Las contraseñas no coinciden"),
  ];
  
//   const loginValidations = [
//     body("email")
//       .isEmail()
//       .withMessage("Ingrese una dirección de correo electrónico válida"),
//     body("password")
//       .isStrongPassword({
//         minLength: 6,
//         minLowercase: 1,
//         minUppercase: 1,
//         minNumbers: 1,
//         minSymbols: 1,
//       })
//       .withMessage("La contraseña debe tener ..."),
//   ];

const authController = require("../controllers/authController");


// router.get('/login', authController.login);
// router.post('/login', authController.postLogin);
router.get('/register', authController.register);
router.post('/register', registerValidations, authController.postRegister);
// router.get('/logout', authController.logout); 


// GET -> /auth/login
// - POST -> /auth/login
// - GET -> /auth/register
// - POST -> /auth/register
// - GET -> /auth/logout

module.exports = router;