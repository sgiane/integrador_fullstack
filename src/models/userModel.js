const { DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

//Tabla Usuarios

const User = sequelize.define('user', {
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
        // unique:true
    },
    password: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    create_time: { 
        type: DataTypes.DATE,
        allowNull: false,
    },
}
);

(async () => {
    await sequelize.sync();
})();

module.exports = User;