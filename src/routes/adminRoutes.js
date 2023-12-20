const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({storage:multer.memoryStorage() });



const { body } = require("express-validator");

const validations = [
    body("product_name")
      .not()
      .isEmpty()
      .withMessage("El nombre es obligatorio")
      .bail()
      .isLength({ min: 3 })
      .withMessage("Tiene que tener 3 caracteres"),
    body("category_id").not().isEmpty().withMessage("La categoría es obligatoria"),
    body("license_id").not().isEmpty().withMessage("La licencia es obligatoria"),
  ];


const adminController = require("../controllers/adminController");

//RUTAS DE ADMIN


router.get('/admin', adminController.admin);

router.get('/admin/create', adminController.create);
router.post("/admin/create", upload.single('imagen'), validations, adminController.createProduct);

router.get("/admin/edit/:id", adminController.edit);
router.put("/admin/:id", upload.single('imagen'), adminController.update);

router.delete('/admin/:id', adminController.destroy);
// - GET -> /admin
// - GET -> /admin/create
// - POST -> /admin/create
// - GET -> /admin/edit/:id
// - PUT -> /admin/edit/:id
// - DELETE -> /admin/delete/:id
module.exports = router;