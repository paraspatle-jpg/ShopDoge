const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
require("dotenv").config();

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true,'Please enter an email'],
        unique: [true,'User Already exists'],
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a valid password'],
        minlength: [6, 'Minimum password length must be 6 characters']
    },
    register_date: {
        type: Date,
        default: Date.now
    },
    tokens: [{
        token:{
            type: String,
        }
    }]
})

// gets called everytime the User model is stringified
UserSchema.methods.toJSON = function(){
    const user = this
    const userOBJ = user.toObject()

    delete userOBJ.password
    delete userOBJ.tokens
    delete userOBJ.register_date

    //console.log(userOBJ)
    return userOBJ
}

//a function to check login and return user
UserSchema.statics.getCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    if(!user){
        res.status(403).send({msg:'Login Failed'})
    }
    const isPassValid = await bcrypt.compare(password, user.password)
    if(!isPassValid){
        res.status(403).send({msg:'Login Failed'})
    }

    return user

}

//generating auth token 
UserSchema.methods.generateAuthToken = async function(){
    user = this

    const token = await jwt.sign({_id:user._id},process.env.JWT_SECRET_TOKEN);
    user.tokens = user.tokens.concat({token});
    await user.save();

    return token;
}

//hashing password if password is modified
UserSchema.pre('save',async function(next) {
    const rounds = 8;
    if(this.isModified('password')) {
        const hash = await bcrypt.hash(this.password, rounds);
        this.password = hash;
    }

    next()
})
module.exports = User = mongoose.model('user',UserSchema);