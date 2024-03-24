const mongoose=require("mongoose"); 
const schema=mongoose.Schema(
    {
        name: 
        {
            type:String, 
            required:true
        }, 
        email:{
            type:String, 
            required:true,
            unique:true
        }, 
        gender: 
        {type:String} , 
        status: 
        {
            type:String 
        }
        
    }
) 
const Userdb=mongoose.model("userdb",schema); 
module.exports=Userdb; 
// const mongoose =require("mongoose"); 
// const validator=require("validator");

// const studentSchema=new mongoose.Schema(
//     {
//         name:{
//             type:String, 
//             required:true, 
//             minlength:3
//         }, 
//         email: 
//         {
//             type:String, 
//             required:true, 
//             unique:[true,"Email is already present"], 
//             // validate(value) 
//             // {
//             //     if(!validator.isEmail(value)) 
//             //     {
//             //         throw new Error("Invalid Email");
//             //     }
//             // }
//         }, 
//         phone:
//         {
//             type:Number, 
//             min:10, 
//             unique:true
//         }, 
//         address:{
//             type:String, 
//             required:true 
//         }
//     }
// ) 
// const  Student=new mongoose.model('Stu',studentSchema);  
// module.exports=Student;
