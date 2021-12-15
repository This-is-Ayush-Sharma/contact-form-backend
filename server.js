const mongoose = require('mongoose');
const express = require('express');
const routerUrl = require('./routes/router');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS,()=> console.log("connected"))

app.use(express.json());
app.use(cors());
app.use('/api',routerUrl);


app.get('/',(req,res)=>{
    res.send("hello world");
})

app.listen(5000,()=>console.log("listening at port 5000"));