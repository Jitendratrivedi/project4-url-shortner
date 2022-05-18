const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./router/router')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://functionUpUranium-2:JECVxS0v96bKoG0a@cluster0.j1yrl.mongodb.net/project4group51',{
    useNewUrlParser:true
})
.then (() => console.log('MongoDB is connected '))
.catch(err => console.log(err))
app.use("/",router)

app.listen(process.env.PORT || 3000,function(){
    console.log("Express app running on PORT "+(process.env.PORT || 3000))
})

