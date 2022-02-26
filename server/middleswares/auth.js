const jwt = require('jsonwebtoken');
const User = require('../models/User')
require("dotenv").config();

const auth = async (req,res,next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ','');
        const decoded = await jwt.verify(token,process.env.JWT_SECRET_TOKEN);
        const user = await User.findOne({_id: decoded._id,'tokens.token': token})
      //  console.log(user);
        if(!user){
            res.status(403).send({msg:'Authorization failed'})
        }

        req.token = token;
        req.user = user;

        next();
    } catch(err) {
        res.send({msg:"Authorization Failed"})
    }
}

module.exports = auth