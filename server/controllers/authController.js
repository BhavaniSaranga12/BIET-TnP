const User= require('../models/userModel');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const Faculty = require('../models/facultyModel');

 async function register(req, res) {
   const {name,email,password,role}=req.body;
   try {
    let user= await User.findOne({email})
    if(user){
        return res.status(400).json({message:"User already exists", status: true})
    }
    else if(!user){
        user= await Faculty.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists", status: true})
        }
    }
    const hashedPassword= await bcrypt.hash(password,10);
    const newUser= new User({name,email,password:hashedPassword,role});
    newUser.save();
    const payload={
       
        id: newUser._id,
        name:newUser.name
    }
    const token=jwt.sign(payload,process.env.JWT_SECRET, { expiresIn:'15d' })
    res.status(201).json({ message: 'User registered successfully', status: true, token:token});

   } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).json({ message: 'Server error',status:false});
   }
}





async function signIn(req, res) {
    const {email,password}=req.body;
 try {
    let user=await User.findOne({email});
    if(!user){
        user=await Faculty.findOne({email});
        if(!user)
        return res.status(400).json({message:"User doesnot exists", status: true})
    }
    const checkPassword= await bcrypt.compare(password,user.password);
if(checkPassword){
   const payload={
    
    name :user.name,
    id:user._id
   } 
   const token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'15d'});
    return res.status(201).json({ message: 'Signin successful', status: true,token:token, details:{name:user.name,role:user.role} });
      
}  
else
return res.status(400).json({message:"Invalid Password", status: true})  

 } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ message: 'Server error',status:false });
 }

    
}

module.exports = {
    register,
    signIn
};
