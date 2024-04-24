const express= require('express');
const path=require('path');
const app=express();
const bodyparser=require('body-parser')
const port=1050;
const mongoose=require('mongoose');
const { Console } = require('console');
// mongoDB=('mongodb://localhost:27017/yoyo')
mongoDB=('mongodb+srv://at9120140:oLzWYWZxmkGTsgki@cluster0.79wsxpq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
app.use(express.urlencoded());
mongoose.connect(mongoDB)
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
  console.log("we are connected")
})
const contactschema=new mongoose.Schema({
  name:String,
  gmail:String,
  contact:String,
  more:String
})
const contactmodel=mongoose.model('contactmodel',contactschema)
// Express specific stuff
// app.use('/static',express.static('.static'));// for serving static files
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json());
// pug specific stuff
app.set('view engine','pug')
// set the views directory
app.set('views',path.join(__dirname,'views'))
app.get('/',(req,res)=>{
    res.status(200).render('index.pug');
});
 app.get('/contact',(req,res)=>{
     res.status(200).render('contact.pug')
 });
 app.get('/blogpost',(req,res)=>{
    res.status(200).render('blogpost.pug')
});
app.get('/blog',(req,res)=>{
    res.status(200).render('blog.pug')
});
app.get('/search',(req,res)=>{
    res.status(200).render('search.pug')
});
 app.post('/contact',(req,res)=>{
   var mydata=new contactmodel(req.body);
  console.log(req.body)
   mydata.save().then(()=>{
     res.send("item saved to db")
   }).catch(()=>{
     res.status(400).send("item not added to database")
   })
 })
app.listen(port,()=>{
    console.log(`the application started successfully on port ${port}`);
});