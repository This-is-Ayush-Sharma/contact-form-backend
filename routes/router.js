const express = require('express');
const router = express.Router();
const ContactsSchema = require('../model/ContactsSchema');

router.post('/Contact',async (req,res)=>{
    const { name , email ,phone ,message} = req.body;
    console.log(`${name} ${email} ${phone} ${message}`);
    try{
        await ContactsSchema.create ({
            name,
            email,
            phone,
            message
        });
        return res.json({status : 'ok'});
    }
    catch(error){
        return res.json({status : 'error',error:'Can\'t Put data'});
    }
});

router.post('/fetchData',async(req,res)=>{

    try{
        const fetchData = await ContactsSchema.find();
    return res.json({status : 'ok', data: fetchData});
    }
    catch(error){
        return res.json({status : 'error',error:'Cant fetch data login first'});
    }
})

module.exports = router;