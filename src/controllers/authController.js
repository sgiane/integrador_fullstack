const modelUser = require('../models/userModel');

//CONTROLADORES DE AUTENTICACIÓN

const login = (req, res) => res.render('viewsAuth/login', {layout: "layouts/layoutAdmin"});

// const postLogin = (req, res) => res.render ('viewsAuth/login',{layout:"layouts/layoutAdmin"});

const register = (req, res) => res.render('viewsAuth/register', {layout: "layouts/layoutAdmin"});

// const postRegister = (req, res) => res. render ('viewsAuth/register'{layout: "layouts/layoutAdmin"});

const logout = (req, res) => res.send("Se ha desconectado con éxito..");


module.exports = {
    login,
    // postLogin,
    register,
    // postRegister,
    logout,
};