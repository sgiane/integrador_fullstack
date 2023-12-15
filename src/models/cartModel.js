const { DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

const itemCart = sequelize.define("itemCart", {
    cart_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNullValues: false,
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },

    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

});

module.exports = itemCart;