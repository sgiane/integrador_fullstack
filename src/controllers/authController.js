const { validationResult } = require("express-validator");

const modelUser = require('../models/userModel');

//CONTROLADORES DE AUTENTICACIÓN

// const login = (req, res) => res.render('viewsAuth/login', {layout: "layouts/layoutAdmin"});
// const postLogin = (req, res) => res.render ('viewsAuth/login',{layout:"layouts/layoutAdmin"});

const register = (req, res) => res.render('viewsAuth/register', {layout: "layouts/layoutAdmin"});
const postRegister = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.render ('viewsAuth/register', {layout: "layouts/layoutAdmin", values: req.body,
            errors: errors.array(),

        });
    }

    try {
        const user = await modelUser.create(req.body);

        res.send({ body: req.body, user})
    } catch (error) {
        console.log(error);
        res.send(error);
    }
  
    
};


// const logout = (req, res) => res.send("Se ha desconectado con éxito..");


module.exports = {
    // login,
    // postLogin,
    register,
    postRegister,
    // logout,
};