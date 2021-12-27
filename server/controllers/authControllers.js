const User = require('../models/User');
const jwt = require('jsonwebtoken');
require("dotenv").config()

module.exports.signup = (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400).json({ msg: 'Please enter all fields' });
    }

    User.findOne({ email })
        .then(user => {
            if(user) return res.status(400).json({ msg: 'User already exist, Please login.'})

            const newUser = new User({name, email, password});
            newUser.save()
            .then(user => {
                jwt.sign(
                    { id: user._id },
                    process.env.JWT_SECRET_KEY,
                    { expiresIn: 3600 },
                    (err, token) => {
                        if(err) throw err;
                        res.json({
                            token,
                            user: {
                                id: user._id,
                                name: user.name,
                                email: user.email
                            }
                        });
                    }
                )
            })
        })
}

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ msg: 'Please enter all fields' });
    }
    User.findOne({ email })
        .then(user => {
            jwt.sign
         })

}