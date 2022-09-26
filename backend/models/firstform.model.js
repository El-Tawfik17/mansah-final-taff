const mongoose = require('mongoose');

 const firstformSchema = new mongoose.Schema({
    categorie:String,
        statut:String,
        lastName:String,
        fisrtName:String,
        identity:String,
        gender:String,
        domain:String,
        title: String,
        Situation:String,
        experience:String,
        country:String,
        town:String,
        code: String,
        number:String,
        email:String,
        reasons:String,
        agree:String
 });

  module.exports =mongoose.model("user",firstformSchema);