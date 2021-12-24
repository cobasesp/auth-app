const sequelize = require("../db");
const User = require('../models/UserModel');

const res = require("express/lib/response")

const test = async (req, res) => {
    await sequelize.sync();
    const user = await User.findAll({
        attributes: ["id", "name", "email"],
    });
    res.json({error: 0, data: user});
}

module.exports = {
    test
}