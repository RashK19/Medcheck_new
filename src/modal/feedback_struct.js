const mongoose= require("mongoose")
mongoose.connect("mongodb://localhost:27017/Medcheck")
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log("failed to connect");
})


// feedback table construction
const Feedback= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    }
})

const collection2= new mongoose.model("Feedback",Feedback)

module.exports= collection2