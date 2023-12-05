const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/",(req, res) => {
    res. redirect("/home");
});
router.get('/home',mainController.home);
router.get('/contacto',mainController.contact);
router.get('/about',mainController.abaut);
router.get('/faqs',mainController.faqs);
// - GET -> /home
// - GET -> /contact
// - GET -> /about
// - GET -> /faqs
module.exports = router;