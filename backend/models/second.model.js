 const mongoose = require('mongoose');
 const secondformSchema= new mongoose.Schema({
        
        name:String,
        fistName:String,
        age:String,
        phone:String,
        mail:String,
        adress:String,
        job:String,
        situation:String,
        region:String,
        town:String,
        message:String,
 });
 
module.exports= mongoose.model("member",secondformSchema);