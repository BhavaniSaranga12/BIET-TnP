import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const Add = () => {


 


  const [addDetails,setAddDetails]=useState({
    name:'',
    email:'',
    password:''
  })

  async function handleAdd(e) {
    e.preventDefault();
    await axios({
      method:'post',
      url:'https://biet-tnp-server.vercel.app/api/admin/add',
      data:{...addDetails,role:'faculty'}
      

    }).then((response)=>{
      console.log(response.data);
    }).catch(error=>console.log(error));
  }

  return (
    <>
    <div className="flex justify-center items-center ">
      <div className="w-[60%] md:mt-[5%] mb-[25%] mt-[15%] md:mb-[10%] md:w-[25%] text-center">
        <div className="text-center mb-2 text-2xl font-semibold">Register</div>
        <form>
          <TextField
            label="Name"
            value={addDetails.name}
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={
              (e)=>{
                setAddDetails({...addDetails,name:e.target.value});
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
            value={addDetails.email}
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={
              (e)=>{
                setAddDetails({...addDetails,email:e.target.value});
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
            value={addDetails.password}
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={
              (e)=>{
                setAddDetails({...addDetails,password:e.target.value});
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
            onClick={handleAdd}
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
    
    </>
  )
}

export default Add