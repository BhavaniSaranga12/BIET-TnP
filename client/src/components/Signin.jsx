import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'


const Signin = () => {
  const navigate=useNavigate();
  const [signinDetails, setSigninDetails]= useState({
    email:'',
    password:'',
  })

const handlesubmit=(e)=>{
  e.preventDefault();
  console.log(signinDetails);
  axios({
    method:'post',
    url:'http://localhost:3000/api/auth/signin',
    data:signinDetails
  }).then((response)=>{
    console.log(response.data);
    if(response.status){
      navigate('/')
    }
  }).catch(error=>{
    console.log(error);
  }

  )
}

  return (
    <div className="flex justify-center items-center ">
    <div className="w-[60%] md:mt-[5%] mb-[25%] mt-[15%] md:mb-[10%] md:w-[25%] text-center">
      <div className="text-center mb-2 text-2xl font-semibold">Sign in</div>
      <form>
        
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={signinDetails.email}
          margin="normal"
          onChange={(e)=>{
            setSigninDetails({...signinDetails,email:e.target.value})
          }}
          sx={{
           
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'gray',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black', 
              },
            },
            '& .MuiInputLabel-root': {
              color: 'gray', 
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'black',
            },
            '& .MuiOutlinedInput-input': {
              color: 'black', 
            },
            margin:1,
            
          }}
        />
         <TextField
          label="Password"
          variant="outlined"
          value={signinDetails.password}
          fullWidth
          margin="normal"
          onChange={(e)=>{
            setSigninDetails({...signinDetails,password:e.target.value})
          }}
          sx={{
           
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'gray',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black', 
              },
            },
            '& .MuiInputLabel-root': {
              color: 'gray', 
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'black',
            },
            '& .MuiOutlinedInput-input': {
              color: 'black', 
            },
            margin:1
          }}
        />
   
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handlesubmit}
          sx={{
            backgroundColor: 'black',
            margin: 1,
           '&:hover': {
    backgroundColor: 'black',
  },
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  </div>
  )
}

export default Signin