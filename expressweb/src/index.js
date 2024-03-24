const express=require("express"); 
const app=express();  
const hbs =require('hbs');
const path=require('path'); 
const morgan = require('morgan');
const port=process.env.PORT || 8000; 
 
const static_path=path.join(__dirname,"../public"); 
const template_path=path.join(__dirname,"../templates/views") ; 
const partials_path =path.join(__dirname,"../templates/partials");
app.set("views",template_path);
app.set("view engine","hbs"); 
//hbs.registerPartials(partials_path);

app.use(express.static(static_path));
app.get("/",(req,res)=>
{
  res.render('index');
})  ;
app.get("/about",(req,res)=>
{
  res.render('about');
})  ;
app.get("/weather",(req,res)=>
{
 res.render("weather");
})  ;
app.get("*",(req,res)=>
{
  res.render("404error", 
  {
    errorMsg: "Opps! Page Not Found"
  });
}) 
app.listen(port,()=>
{
    console.log("listening") 
    
})