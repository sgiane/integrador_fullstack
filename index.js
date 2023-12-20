require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const methosOverride = require("method-override");

// const session = require("express-session");

const session = require("cookie-session");

// app.use(
//     session({
//         secret: "S3cr3t01",
//         resave: false,
//         saveUninitialized: false,
//     })
// );

app.use(
    session({
        keys: ["S3cr3t01", "S3cr3t02"]
    })
);

const isLogin = (req, res, next) => {
    if (!req.session.userId) {
      return res.redirect("/login");
    }
  
    next();
  };
  

const sequelize = require("./src/config/connect");

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

app.use(expressLayouts);
app.set('layout', "layouts/layout");

app.use(express.urlencoded({extended:false}));
app.use(methosOverride("_method"));

app.use(require("./src/routes/authRoutes"));

const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
// const authRoutes = require('./src/routes/authRoutes');

app.use(mainRoutes);
app.use(shopRoutes);
app.use(isLogin, adminRoutes);
// app.use(authRoutes);


app.use((req, res, next) => {
    res.status(404).send("La pagina no existe");
});


const PORT = 3000;
app.listen(PORT, () => {
    try {
        sequelize.authenticate();
    } catch (error) {
        console.log(error);
    }
    
    console.log(`http://localhost:${PORT}`)
});
