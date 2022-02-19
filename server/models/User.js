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
        unique: true,
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

UserSchema.methods.generateAuthToken = async function(){
    user = this
    const token = await jwt.sign({_id:user._id},process.env.JWT_SECRET_TOKEN);
    user.tokens.push({token});
    user.save();
    return token;
}

UserSchema.pre('save',async function(next) {
    const rounds = 8;
    const hash = await bcrypt.hash(this.password, rounds);
    this.password = hash;
    next();
})
module.exports = User = mongoose.model('user',UserSchema);