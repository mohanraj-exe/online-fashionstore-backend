const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '1d'})
}

// sign up 
const signupUser = async (req, res) =>{

    const {name, email, password} = req.body; 
    try{
        const user = await User.signup(name, email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

// login
const loginUser = async (req,res) =>{

    const {email, password} = req.body;
    try{
        const user = await User.login(email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }catch(err){
        res.status(400).json({error: err.message})
    }

}


module.exports = {signupUser, loginUser}