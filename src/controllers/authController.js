const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });

    const foundUser = await User.findOne({ username: user}).exec();
    if (!foundUser) return res.sendStatus(401); //Unauthorized 
    // evaluate password 
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
        const roles = Object.values(foundUser.roles);
        // create JWTs
        const accessToken = jwt.sign(
            {
                "UserInfo":{
                "username": foundUser.username,
                "roles": roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '3000s'}
        );
        const refreshToken = jwt.sign(
            {"username": foundUser.username},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
        );

        // SAVING REFRESHTOKEN WITH CURRENT USER
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
        console.log(result);
        
        // res.cookie('jwt', refreshToken, {httpOnly: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000}); // COMMENT OUT SECURE: true if use thunder client
        res.cookie('jwt', refreshToken, { httpOnly: false, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });
        res.json({ roles,accessToken,foundUser });
        console.log("ok")
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };