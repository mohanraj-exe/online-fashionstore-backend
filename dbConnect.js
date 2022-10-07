const mongoose = require("mongoose");

module.exports = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log(`db connection success`)
    }catch(err){
        console.log(err)
    }
}