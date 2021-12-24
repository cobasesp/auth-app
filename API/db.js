const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("authapp", "root", "root", {
    dialect: "mysql",
});

module.exports = sequelize;