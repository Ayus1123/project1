require("dotenv").config(); 
 const express=require("express"); 
 const expressLayout=require("express-ejs-layouts");  
 const path=require('path'); 
 //const ejs=require("ejs")

 const app =express(); 
 const PORT=3000 || process.env.PORT; 

 const staticpath=path.join(__dirname,"../public");  
 app.use(express.static(staticpath));
 //app.use(express.static(staticpath)); 

 //app.use(expressLayout); 
// app.set('layout','./layout/main');  
 const template_path=path.join(__dirname,"../templates/views") ; 
app.set("view engine", "ejs") ;
app.set("views",template_path); 
  
app.get("",(req,res)=> 
{ 
    const locals ={
        title:"Nodejs Blog" ,
        description:"Simple Blog created with Nodejs"
    }
    res.render("index2",{locals},)
})  
app.get("/about",(req,res)=> 
{
    res.render("about2")
})
app.listen(PORT,()=> 
{
    console.log("listening")
})