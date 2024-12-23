const mongoose= require("mongoose")
mongoose.connect("mongodb://localhost:27017/Medcheck")
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log("failed to connect");
})

//Signup teble construction
const LogInSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    dob:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    bloodType:{
        type:String,
        require:true
    },
    contact:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    cnfrm_password:{
        type:String,
        require:true
    },
    Medical_history:{
        type:String
    }
})

const collection= new mongoose.model("Signup",LogInSchema)
module.exports= collection