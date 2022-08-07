const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const auth = async (req, res, next) => {
  try {
    console.log(req);
    const token = req.body.header.Authorization.replace("Bearer ", "");
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    console.log(JSON.stringify(decoded));
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!user) {
      res.status(403).send({ msg: "Authorization failed" });
    }

    console.log(user);

    req.token = token;
    req.user = user;

    next();
  } catch (err) {
    res.status(403).send({ msg: "Authorization Failed" });
  }
};

module.exports = auth;
