const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get('/login',authController.login);
router.post('/login',authController.login);
router.get('/register',authController.register);
router.post('/register',authController.register);
router.get('/logouth',authController.logouth);
// GET -> /auth/login
// - POST -> /auth/login
// - GET -> /auth/register
// - POST -> /auth/register
// - GET -> /auth/logout
module.exports = router;