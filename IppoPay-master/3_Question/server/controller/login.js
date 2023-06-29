const User = require("../modal/Name");
const bcrypt = require("bcryptjs");
const router = require("../routes/register");

//login
const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong Credentials");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong Credentials");

    res.status(200).send({
      message: "User login Successfully",
      statusCode: 200,
    });
  } catch (error) {
    console.log(error);
    res.send({
      message: "Something Went Wrong",
      statusCode: 404,
    });
  }
};

module.exports = login;
