const User = require("../models/User");
const bcrypt = require("bcrypt");
require("dotenv").config();

module.exports.signup = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(401).json({ msg: "Please enter all required fields" });
  User.findOne({ email })
    .then(async (user) => {
      if (user) return res.status(400).json({ msg: "User already exists" });
      const newUser = new User({ name, email, password });
      newUser
        .generateAuthToken()
        .then((newuser) => {
          res.status(200).json(newuser);
        })
        .catch((error) => {
          res.status(400).send(error.message);
        });
    })
    .catch((error) => {
      res.status(400).send(error.message);
    });
};

module.exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(401).json({ msg: "Please enter all required fields" });
  User.findOne({ email }).then(async (user) => {
    if (!user) return res.status(400).json({ msg: "Login user failed" });
    //comparing hash passwords
    const token = await user.generateAuthToken();
    bcrypt.compare("parasup", user.password).then((isvalid) => {
      console.log(isvalid);
      if (isvalid) {
        return res.status(200).json({
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
          },
          token: token,
        });
      } else return res.status(400).json({ msg: "Login failed" });
    });
  });
};
