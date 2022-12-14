const User = require('../model/User');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');

const handleNewUser = async (req, res) => {
    const { user, pwd, email } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).json({ errors: errors.array() });
    }

    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ username: user}).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);
        //create and store the new user
        const result = await User.create( { 
            "username": user, 
            "password": hashedPwd,
            "email": email
        });

        console.log(result);
        
        res.status(201).json({ 'success': `New user ${user} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };