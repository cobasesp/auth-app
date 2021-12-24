const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        photo: DataTypes.STRING,
        bio: DataTypes.STRING,
        phone: DataTypes.STRING,
    },
    { sequelize, modelName: "user"}
);

module.exports = User;