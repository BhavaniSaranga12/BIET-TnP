const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose= require('mongoose');
const cors = require('cors');
const authRoute=require('./routes/authRoute')
dotenv.config();
app.use(express.json());

const corsOption = {
  origin: ['http://localhost:5173'],
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


app.get('/', (req, res) => {
  console.log("hello world");
  res.json("Hello, world!");  
});

app.use('/api/auth', authRoute );

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
