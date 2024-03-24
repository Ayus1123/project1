 const express = require('express');
 const dotenv = require('dotenv');
 const morgan = require('morgan');
  const bodyparser = require("body-parser");
 const path = require('path'); 
const hbs = require("hbs");  
const axios=require("axios")
// //const controller=require("../controller/controller"); 
const userdb=require("../models/model.js"); 

 require("./conn"); 
 

const app = express();

  dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8000

app.use(morgan('tiny'));

 app.use(bodyparser.urlencoded({ extended : true}))


const template_path=path.join(__dirname,"../templates/views") ; 
app.set("view engine", "hbs") ;
app.set("views",template_path);
//app.set("views", path.resolve(__dirname, "views/ejs"))

// // load assets
// // app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
// // app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
// app.use('/js', express.static(path.resolve(__dirname, "public/css")))

// // load routers
// // app.use('/', require('./server/routes/router')) 
const staticpath=path.join(__dirname,"../public");  
app.use(express.static(staticpath)); 
const staticpath1=path.join(__dirname,"../public/css/crud.js");  
app.use(express.static(staticpath1))
app.get("/",(req,res)=> 
{ 
  axios.get("http://localhost:3000/stu") 
  .then(function(response) 
  {
    res.render("index1",{users:response.data});
  }) 
  .catch((e)=>
  {
    res.send(e);
  }) 
  

}); 
app.get("/add-user",(req,res)=> 
{
 res.render("add_user");
}); 
let uid;
let u;
app.get("/update-user",async(req,res)=> 
{ 
   axios.get("http://localhost:3000/stu",{params:{id:req.query.id}}) 
   .then(function(userdata) 
  {  
     console.log("agya");
     u=1;
     uid=req.query.id;
      res.render("update_user");  
  })
    .catch((err)=>
    {
      res.send(err)
    })
     
}); 

app.use(express.json());
// app.post("/stu",async(req,res)=>
// {
//   try 
//   {
//     const user =new userdb(req.body); 
//      const createUser=await user.save(); 
//      res.send(createUser);
//   }catch(e) 
//   {
//     res.send(e);
//   }
// })
app.post("/stu",async(req,res)=> 
{  
    if(!req.body) 
    {
        res.status(400).send({message:"Content can not be empty"}); 
        return;
    } 
    try{
    const user=new userdb({
        name:req.body.name, 
        email:req.body.email,
        gender:req.body.gender, 
        status:req.body.status  
    })
       
      const cuser=await user.save(); 
      //res.send(cuser); 
      res.redirect('/');
    } 
    catch(e)
    {
    //   res.status(500).send({message:e.message || "Some error occured"}); 
    res.send(e);
    }
  })
    // user.save().then(()=> 
    // {
    //     res.send(user);
    // })
    // .catch((e)=>
    // {
    // //   res.status(500).send({message:e.message || "Some error occured"}); 
    // res.send(e);
    // })

app.get("/stu",async(req,res)=> 
{
  
  try{
  
       const sdata=await userdb.find(); 
       res.send(sdata);
  }
    catch(e)
    { 
      res.send(e);

    }  
  
});  
//  app.get("/stu/:id",async(req,res)=> 

// {
//   try{const id=req.params.id; 
//   const d=await userdb.findById(id); 
//   res.send(d);
// }
// catch(e) 
// {
//   res.send(e);
// } 
// })
 app.put("/stui",async(req,res)=> 
 {
    
 if(!req.body) 
 { 
   res.status(400).send({message:"Cannot update"}); 
    return;
  } 
try{ 
      
     const d=await userdb.findByIdAndUpdate(uid,req.body); 
     console.log("jifr")
     console.log(d);

     res.send(d);
     
    } 
    catch(e)
    {
     res.send(e);
    }
});  

 app.delete("/stus/:id",async(req,res)=> 
{ 
  console.log("frfrfr");
    try{ 
      console.log("frfrfr"); 
      console.log(req.params.id)
 const d=await userdb.findByIdAndDelete(req.params.id); 
 res.send(d);
    } 
    catch(e)
    {
    res.send(e);
    }
}); 

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)}); 
// app.listen(3000,()=> 
// {
//   console.log("djd")
// }); 
