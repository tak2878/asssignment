const users = [];

const User = require('../models/User');

exports.fetchAllUsers = async (req, res) => {
    const fetchedUsers = await User.find();
    users.push(fetchedUsers);
    res.send(users);
}


exports.addNewUser = async (req, res) => {
    const errors = {};
    const { user_name, mobile_no } = req.body;
    if (!user_name)  errors.user_name = 'Username is required';
    if (!mobile_no)  errors.mobile_no = 'Mobile Number is required';
    if (Object.keys(errors).length) return res.status(401).json({ errors });
    
    try {
        const userExists = await User.findOne({ mobile_no });
        if (userExists) {
            errors.msg = 'User already exists';
            return res.json({ msg: errors });
        }
        const newuser = new User(req.body);
        const user = await newuser.save();
        users.push(user);
        res.send(users);
    } catch (err) {
        res.status(401).json({ err });
    }
}