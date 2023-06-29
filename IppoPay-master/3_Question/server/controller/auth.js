const User = require("../modal/Name");
const bcrypt = require("bcryptjs");
const router = require("../routes/register");

//register
const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      password: hash,
    });

    await newUser.save();

    res.status(200).send({
        message: "User created Successfully",
        statusCode : 200
    });
  } catch (error) {
    console.log(error);
    res.send({
        message: "Something Went Wrong",
        statusCode : 404
    });
  }
};

module.exports = register;