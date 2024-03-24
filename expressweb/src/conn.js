const mongoose=require("mongoose"); 
// const connectDB=async()=> 
// {
//     try{
// const con=await mongoose.connect(process.env.MONGO.URL,{
// useNewUriParser:true, 
// useUnifiedTopology:true,
// UseFindAndModify:false, 
// useCreateIndex:true
//     } ) 
// console.log("connected")}
//     catch(err) 
//     {
// console.log(err); 
// process.exit(1);
//     }
// } 
// module.exports=connectDB 
// mongoose.connect( "mongodb+srv://cluster0.iqpqhin.mongodb.net/") 
mongoose.connect("mongodb://127.0.0.1:27017/user4")
.then(()=> 
{
  console.log("connected");
})
.catch((e)=> 
{
    console.log("no")
})