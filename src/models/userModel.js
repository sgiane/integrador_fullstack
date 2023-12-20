const { DataTypes } = require("sequelize");
const sequelize = require("../config/connect");
const bcryptjs = require("bcryptjs");

//Tabla Usuarios

const userModel = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: { 
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    // create_time: { 
    //     type: DataTypes.DATE,
    //     allowNull: false,
    // },
}
);

userModel.beforeSave(async (user, options) =>{
    const { password } = user;
    const hash = await bcryptjs.hash(password, 8);

    user.password = hash;
});

(async () => {
    await sequelize.sync();
})();

module.exports = userModel;