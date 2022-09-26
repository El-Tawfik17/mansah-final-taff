const SecondForm =require('../models/second.model');
module.exports.submitSecondForm = async (req,res)=>{
    const {name,firstName,age,phone,mail,adress,job,situation,region,town,message} =req.body.user;
    try{
        const member= await SecondForm.create({ name,firstName,age,phone,mail,adress,job,situation,region,town,message});
        res.status(200).json({ member: member });
    }catch(err){
         
        res.status(201).send({ err });

    }

     
}