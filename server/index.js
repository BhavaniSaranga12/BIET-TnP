const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose= require('mongoose');
const cors = require('cors');
const authRoute=require('./routes/authRoute')

const jwt=require('jsonwebtoken')
const User= require('./models/userModel')
const adminRoute=require('./routes/adminRoute');
const Faculty = require('./models/facultyModel');
const hireRoute=require('./routes/hireRoute')
const userRoute=require('./routes/userRoute');
dotenv.config();
app.use(express.json());

const corsOption = {
  origin: ['https://biet-tnp-client.vercel.app'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOption));

const port = process.env.PORT || 3000;

const connection= async()=>{
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDb is Connected');
  } catch(error){
    console.error('Error connection to dB')
  }
};
connection();

const checkAuthentication= async(req,res,next)=>{
  const token = req.headers.authorization?.split(' ')[1]
               
    console.log(token)
    if (token==null) {
        return res.status(400).json({ status: false, message: "please Sign in/Sign up" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        let checkuser = await User.findOne({ _id: decoded.id});
        console.log(decoded);
        console.log(checkuser);
        if (checkuser) {
            req.user = {
                name : checkuser.name,
                role: checkuser.role,
            }; 
        
            return next();
        } else {
           
          checkuser = await Faculty.findOne({ _id: decoded.id});
          if (checkuser) {
            req.user = {
              id:checkuser._id,
                name : checkuser.name,
                role: checkuser.role,
            }; 
        
            return next();
        }
          else
            return res.status(401).json({ status: false, message: "token expired"});
        }
    } catch (error) {
        console.log(error);
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ status: false, message: "Token expired" });
        } 
        else if( error.name==='JsonWebTokenError') {
            return res.status(400).json({ status: false, message: "please Sign in/Sign up" });
        }  
            else {
           
            return res.status(500).json({ status: false, message: "Internal server error", error: error});
        }
    }
}



app.get('/', (req, res) => {
  console.log("hello world");
  res.json("Hello, world!");  
});

app.use('/api/auth', authRoute );

app.use('/validate',checkAuthentication, (req,res)=>{
  res.status(201).json({ status: true, details:req.user});
});
app.use('/api/admin',adminRoute);
app.use('/api/hire',checkAuthentication,hireRoute);
app.use('/api/user',checkAuthentication,userRoute);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
