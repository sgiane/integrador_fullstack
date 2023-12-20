const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

const modelUser = require('../models/userModel');

//CONTROLADORES DE AUTENTICACIÓN

//REGISTER--------------------------------------------------------------------------------------

const register = (req, res) => res.render('viewsAuth/register', { layout: "layouts/layoutAdmin" });
const postRegister = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.render('viewsAuth/register', { layout: "layouts/layoutAdmin", values: req.body,
            errors: errors.array(),

        });
    }

    try {
        const user = await modelUser.create(req.body);

        res.redirect("/login");
    } catch (error) {
        console.log(error);
        res.send(error);
    }


};

//LOGIN-----------------------------------------------------------------------------------------

const login = (req, res) => res.render('viewsAuth/login', { layout: "layouts/layoutAdmin" });
const postLogin = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.render('viewsAuth/login', {
            layout: "layouts/layoutAdmin", values: req.body,
            errors: errors.array(),

        });
    }

    try {
        const user = await modelUser.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!user) {
            res.render("viewsAuth/login", { layout: "layouts/layoutAdmin", 
                values: req.body,
                errors: [{ msg: "El correo y/o contraseña son incorrectos (email)" }],
            });
        } else if (!(await bcryptjs.compare(req.body.password, user.password))) {
            res.render("viewsAuth/login", { layout: "layouts/layoutAdmin", 
                values: req.body,
                errors: [
                    { msg: "El correo y/o contraseña son incorrectos (password)" },
                ],
            });
        } else {
            req.session.userId = user.id;

            res.redirect("/admin");

            // res.send("Login Correcto");
        }
    } catch (error) {
        console.log(error);
        res.send(error);
    };

};



const logout = (req, res) => {
    req.session = null
    res.redirect("/");
}



module.exports = {
    login,
    postLogin,
    register,
    postRegister,
    logout,
};