const mongoose = require('mongoose');
mongoose.connect("mongodb://" + process.env.MONGODB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log('connect to mongoDb'))
.catch((err)=>
    console.log('fail to connect to MongoDb ', err)
)