const express= require("express")
const app= express()
const router = express.Router();
const path= require("path")
const hbs= require("hbs")
const collection = require("./modal/signup_struct");
const collection2 = require("./modal/feedback_struct")

const templatePath= path.join(__dirname,'../templates')
const publicPath = path.join(__dirname, "../public")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(publicPath))
app.set("view engine","hbs")
app.set("views",templatePath)


app.get("/",(req,res)=>{
    res.render("landing")
})
app.get("/login/home",(req,res)=>{
    res.render("home")
})

app.get("/login",(req,res)=>{
    res.render("login")
})

// app.get("/login/#about",(req,res)=>{
//     res.render("i")
// })

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.get("/login/Badges",(req,res)=>{
    res.render("Badges")
})

app.get("/login/index",(req,res)=>{
    res.render("index")
})

app.get("/login/Badges/stepcount",(req,res)=>{
    res.render("stepcount")
})

app.get("/login/tests",(req,res)=>{
    res.render("tests")
})

app.get("/login/tests/sugar",(req,res)=>{
    res.render("sugar")
})
app.get("/login/tests/CBC",(req,res)=>{
    res.render("CBC")
})
app.get("/login/tests/BP",(req,res)=>{
    res.render("BP")
})
app.get("/login/tests/BMI",(req,res)=>{
    res.render("BMI")
})
app.get("/login/tests/TFT",(req,res)=>{
    res.render("TFT")
})
app.get("/login/tests/LFT",(req,res)=>{
    res.render("LFT")
})
app.get("/login/tests/KFT",(req,res)=>{
    res.render("KFT")
})

app.get("/login/tests/sugar/sugardiet",(req,res)=>{
    res.render("sugardiet")
})

app.get("/login/profile",(req,res)=>{
    res.render("profile")
})

app.get("/login/feedback",(req,res)=>{
    res.render("feedback")
})


app.post("/signup", async(req,res)=>{
    const data={
        name:req.body.name,
        email:req.body.email,
        dob:req.body.dob,
        gender:req.body.gender,
        bloodType:req.body.bloodType,
        contact:req.body.contact,
        password:req.body.password,
        cnfrm_password:req.body.cnfrm_password,
        Medical_history:req.body.medical_history

    }
    await collection.insertMany([data])
    res.render("index")
})

app.post("/login/feedback", async(req,res)=>{
    const data1={
        name:req.body.name,
        email:req.body.email,
        feedback:req.body.feedback,
        rating:req.body.rating

    }
    await collection2.insertMany([data1])
    res.render("index")
})

app.post("/login",async(req,res)=>{
    try{
        const check= await collection.findOne({email:req.body.log_email})
        if(check.password=== req.body.log_password)
        {
            res.render("index")
        }
        else
        {
            res.send("wrong password")
        }
    }
    catch{
        res.send("wrong details")
    }
})

router.get('/api/profile', async (req, res) => {
    try {
        const email = req.query.email; // Assuming email is sent as a query parameter
        const user = await collection.findOne({ email }); // Fetch user data from MongoDB

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user); // Send user data as JSON
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;

app.use(router);


app.listen(3000, ()=>{
    console.log("port connected")
})