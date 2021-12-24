const sequelize = require("../db");
const User = require('../models/UserModel');

const login = async (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;

    await sequelize.sync();
    const user = await User.findOne({
        attributes: ["id", "name", "email", "bio", "phone", "photo"],
        where: {
            email: email,
            password: password
        }
    });

    if(user === null){
        res.json({error: true, msg: "User or password incorrect", data: []})
    }else{
        res.json({error: false, msg: "OK", data: user});
    }
    
}

module.exports = {
    login
}