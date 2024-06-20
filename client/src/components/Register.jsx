import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
  const navigate= useNavigate();
  const [registerDetails,setRegisterDetails]=useState({
    name:'',
    email:'',
    password:''
  })

 function handleSubmit(e){
  e.preventDefault();
  console.log(registerDetails);
  axios({
    method:'post',
    url : 'http://localhost:3000/api/auth/register',
    data: {...registerDetails,role:'student'},
  }
  ).then((response)=>{
    console.log(response.data);
    if (response.status==201) {
      toast.success(response.data.message);
      navigate('/');
    }
    else
     toast.error(response.data.message);
  }).catch(error=>{
    toast.error('Try again later')
    console.log(error);
  })
 }


  return (
    <div className="flex justify-center items-center ">
      <div className="w-[60%] md:mt-[5%] mb-[25%] mt-[15%] md:mb-[10%] md:w-[25%] text-center">
        <div className="text-center mb-2 text-2xl font-semibold">Register</div>
        <form>
          <TextField
            label="Name"
            value={registerDetails.name}
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={
              (e)=>{
                setRegisterDetails({...registerDetails,name:e.target.value});
              }
            }
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
          <TextField
            label="Email"
            value={registerDetails.email}
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={
              (e)=>{
                setRegisterDetails({...registerDetails,email:e.target.value});
              }
            }
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
            value={registerDetails.password}
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={
              (e)=>{
                setRegisterDetails({...registerDetails,password:e.target.value});
              }
            }
            
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
            onClick={handleSubmit}
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
  );
};

export default Register;

