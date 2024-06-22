import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material';
import axios from 'axios'
import toast from "react-hot-toast"
import OutlinedInput from '@mui/material/OutlinedInput';



import ListItemText from '@mui/material/ListItemText';

import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const batches = [
 
  '2024',
  '2025',
  '2026',
  '2027',
  '2028'
];
const Hire = () => {
  const [hireType, setHireType] = useState('');
  const [batch, setBatch] = useState([]);
  const [offCampusDetails,setOffCampusDetails]=useState({
    title:'',
    companyname:'',
    location:'',
    salary:'',
    jobtype:'',
    branch:'',
    src:''
  })
  const [onbatch, setOnBatch] = useState([]);
  const [onCampusDetails,setOnCampusDetails]=useState({
    title:'',
    companyname:'',
    description:'',
    location:'',
    salary:'',
    jobtype:'',
    branch:'',
    src:'',
  })
  const handleHireTypeChange = (event) => {
    setHireType(event.target.value);
  };
  const handleOffCampusPost=(e)=>{
   e.preventDefault();
   console.log({...offCampusDetails,hireType})
    axios({
    method:'post',
    url : 'http://localhost:3000/api/hire/offcampus',
    data: {...offCampusDetails,hireType,batch},
    withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
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
    if(error.response.status==400)
      toast.error(error.response.data.message);
    else
    toast.error('Try again later')
    console.log(error);
  })
  }

  const handleOnCampus=(e)=>{
    e.preventDefault();
   console.log({...onCampusDetails,hireType})
    axios({
    method:'post',
    url : 'http://localhost:3000/api/hire/oncampus',
    data: {...onCampusDetails,hireType,onbatch},
    withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
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
    if(error.response.status==400)
      toast.error(error.response.data.message);
    else
    toast.error('Try again later')
    console.log(error);
  })
  }

  return (
    <div className="flex justify-center items-center ">
      <Box sx={{ textAlign: 'center', margin: 15 , minWidth: '70%', }}>
        <div className="text-center mb-6 text-2xl font-semibold">Hire</div>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="hire-type-label">Hire Type</InputLabel>
          <Select
            labelId="hire-type-label"
            id="hire-type"
            value={hireType}
            onChange={handleHireTypeChange}
            label="Hire Type"
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
                '& .MuiSelect-icon': {
                  color: 'black',
                },
              
              }}
            
          >
            <MenuItem value="onCampus">On-Campus</MenuItem>
            <MenuItem value="offCampus">Off-Campus</MenuItem>
          </Select>
        </FormControl>

        {hireType === 'onCampus' && <form>
      <TextField
        label="On-Campus Position"
        variant="outlined"
        fullWidth
        value={onCampusDetails.title}
        onChange={(e)=>{
          setOnCampusDetails({...onCampusDetails,title:e.target.value})
        }}
        margin= 'normal'
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
        
          }}
      />
      <TextField
        label="Company Name"
        variant="outlined"
        fullWidth
        value={onCampusDetails.companyname}
        onChange={(e)=>{
          setOnCampusDetails({...onCampusDetails,companyname:e.target.value})
        }}
        margin="normal"
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
        
          }}
      />
       <TextField
        label="Salary"
        variant="outlined"
        fullWidth
        value={onCampusDetails.salary}
        onChange={(e)=>{
          setOnCampusDetails({...onCampusDetails,salary:e.target.value})
        }}
        margin="normal"
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
        
          }}
      />
      <FormControl fullWidth  variant="outlined" margin='normal' >
      <InputLabel id="job-type-label">Job Type</InputLabel>
          <Select
            labelId="job-type-label"
            id="job-type"
            value={onCampusDetails.jobtype}
        onChange={(e)=>{
          setOnCampusDetails({...onCampusDetails,jobtype:e.target.value})
        }}
            label="Job Type"
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
                '& .MuiSelect-icon': {
                  color: 'black',
                },
              
              }}
            
          >
            <MenuItem value="full-time">Full-time</MenuItem>
            <MenuItem value="part-time">Part-time</MenuItem>
            <MenuItem value="internship">Internship</MenuItem>
          </Select>
          </FormControl>
          
          <TextField
            id="outlined-multiline-flexible"
            label="Description"
            fullWidth
            multiline
            maxRows={5}
             margin="normal"
             value={onCampusDetails.description}
             onChange={(e)=>{
               setOnCampusDetails({...onCampusDetails,description:e.target.value})
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
          
            }}
        />
        <TextField
        label="Location"
        variant="outlined"
        fullWidth
        value={onCampusDetails.location}
        onChange={(e)=>{
          setOnCampusDetails({...onCampusDetails,location:e.target.value})
        }}
        margin="normal"
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
        
          }}
      />
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Batch</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          fullWidth
          value={onbatch}
          onChange={(event) => {
            const {
              target: { value },
            } = event;
            setOnBatch(
              // On autofill we get a stringified value.
              typeof value === 'string' ? value.split(',') : value,
            );
          }}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {batches.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={onbatch.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      

          <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="branch-label">Branch</InputLabel>
          <Select
            labelId="branch-label"
            id="branch"
            value={onCampusDetails.branch}
            onChange={(e)=>{
              setOnCampusDetails({...onCampusDetails,branch:e.target.value})
            }}
            label="Branch"
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
                '& .MuiSelect-icon': {
                  color: 'black',
                },
              
              }}
            
          >
            <MenuItem value="All-Branches">All Branches</MenuItem>
            <MenuItem value="Technology">Technology</MenuItem>
            <MenuItem value="Electrical">Electrical</MenuItem>
            <MenuItem value="Business-marketing">Business & Marketing</MenuItem>
            <MenuItem value="Mechanical">Mechanical</MenuItem>
            <MenuItem value="civil">Civil</MenuItem>
          </Select>
          </FormControl>
          <TextField
        label="Apply Link"
        variant="outlined"
        fullWidth
        value={onCampusDetails.src}
        onChange={(e)=>{
          setOnCampusDetails({...onCampusDetails,src:e.target.value})
        }}
        margin="normal"
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
        
          }}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        onClick={handleOnCampus}
        sx={{
            backgroundColor: 'black',
            
           '&:hover': {
    backgroundColor: 'black',
  },
          }}
      >
        Post
      </Button>
    </form>}
        {hireType === 'offCampus' && <form>
      <TextField
        label="Off-Campus Position"
        variant="outlined"
        fullWidth
        value={offCampusDetails.title}
        onChange={(e)=>{
          setOffCampusDetails({...offCampusDetails,title:e.target.value})
        }}
        margin="normal"
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
        
          }}
      />
      <TextField
        label="Company Name"
        variant="outlined"
        fullWidth
        value={offCampusDetails.companyname}
        onChange={(e)=>{
          setOffCampusDetails({...offCampusDetails,companyname:e.target.value})
        }}
        margin="normal"
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
        
          }}
      />
      <TextField
        label="Location"
        variant="outlined"
        fullWidth
        value={offCampusDetails.location}
        onChange={(e)=>{
          setOffCampusDetails({...offCampusDetails,location:e.target.value})
        }}
        margin="normal"
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
        
          }}
      />
       <TextField
        label="Salary"
        variant="outlined"
        fullWidth
        value={offCampusDetails.salary}
        onChange={(e)=>{
          setOffCampusDetails({...offCampusDetails,salary:e.target.value})
        }}
        margin="normal"
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
        
          }}
      />
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Batch</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          fullWidth
          value={batch}
          onChange={(event) => {
            const {
              target: { value },
            } = event;
            setBatch(
              // On autofill we get a stringified value.
              typeof value === 'string' ? value.split(',') : value,
            );
          }}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {batches.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={batch.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth  variant="outlined" margin='normal' >
      <InputLabel id="job-type-label">Job Type</InputLabel>
          <Select
            labelId="job-type-label"
            id="job-type"
            value={offCampusDetails.jobtype}
            onChange={(e)=>{
              setOffCampusDetails({...offCampusDetails,jobtype:e.target.value})
            }}
            label="Job Type"
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
                '& .MuiSelect-icon': {
                  color: 'black',
                },
              
              }}
            
          >
            <MenuItem value="Full-time" >Full-time</MenuItem>
            <MenuItem value="Part-time">Part-time</MenuItem>
            <MenuItem value="Internship">Internship</MenuItem>
          </Select>
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="branch-label">Branch</InputLabel>
          <Select
            labelId="branch-label"
            id="branch"
            value={offCampusDetails.branch}
            onChange={(e)=>{
              setOffCampusDetails({...offCampusDetails,branch:e.target.value})
            }}
            label="Branch"
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
                '& .MuiSelect-icon': {
                  color: 'black',
                },
              
              }}
            
          >
            <MenuItem value="All-Branches">All Branches</MenuItem>
            <MenuItem value="Technology">Technology</MenuItem>
            <MenuItem value="Electrical">Electrical</MenuItem>
            <MenuItem value="Business-marketing">Business & Marketing</MenuItem>
            <MenuItem value="Mechanical">Mechanical</MenuItem>
            <MenuItem value="civil">Civil</MenuItem>
          </Select>
          </FormControl>
          <TextField
        label="Apply Link"
        variant="outlined"
        fullWidth
        value={offCampusDetails.src}
        onChange={(e)=>{
          setOffCampusDetails({...offCampusDetails,src:e.target.value})
        }}
        margin="normal"
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
        
          }}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        onClick={handleOffCampusPost}
        sx={{
            backgroundColor: 'black',
        
           '&:hover': {
    backgroundColor: 'black',
  },
          }}
      >
        Post
      </Button>
    </form>
  }
      </Box>
    </div>
  );
};




export default Hire;
