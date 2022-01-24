const User = require('../models/User');
const jwt = require('jsonwebtoken');
require("dotenv").config();

module.exports.signup = (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(401).json({ msg: 0 });
    }

    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: 1 })

            const newUser = new User({ name, email, password });
            newUser.save()
                .then(user => {
                    res.status(200).json({
                        user: {
                            id: user._id,
                            name: user.name,
                            email: user.email,
                            msg: 2
                        }
                    });
                })
        })
}

module.exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(401).json({ msg: "Please enter all required fields" });
    }
    User.findOne({ email, password})
        .then(user => {
            if (!user) return res.status(400).json({ msg: "user not found" });
            return res.status(200).json({
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    msg: "success",
                }
            })
        })

}