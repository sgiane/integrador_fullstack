const modelUser = require('../models/userModel');

//CONTROLADORES DE AUTENTICACIÓN

const login = (req, res) => res.render('viewsAdmin/login', {layout: "layouts/layoutAdmin"});
const register = (req, res) => res.render('viewsAdmin/register', {layout: "layouts/layoutAdmin"});
const logout = (req, res) => res.send("Se ha desconectado con éxito..");


module.exports = {
    login,
    register,
    logout,
};