import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material';

const Hire = () => {
  const [hireType, setHireType] = useState('');
  const [offCampusDetails,setOffCampusDetails]=useState({
    title:'',
    companyname:'',
    location:'',
    salary:'',
    jobtype:'',
    branch:''
  })

  const handleHireTypeChange = (event) => {
    setHireType(event.target.value);
  };

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

        {hireType === 'onCampus' && <OnCampusForm />}
        {hireType === 'offCampus' && <OffCampusForm />}
      </Box>
    </div>
  );
};

const OnCampusForm = () => {
  return (
    <form>
      <TextField
        label="On-Campus Position"
        variant="outlined"
        fullWidth
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
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
            backgroundColor: 'black',
           
           '&:hover': {
    backgroundColor: 'black',
  },
          }}
      >
        Apply
      </Button>
    </form>
  );
};

const OffCampusForm = () => {
  const [hireType, setHireType] = useState('');

  const handleHireTypeChange = (event) => {
    setHireType(event.target.value);
  };

  return (
    <form>
      <TextField
        label="Off-Campus Position"
        variant="outlined"
        fullWidth
       
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
            value={hireType}
            onChange={handleHireTypeChange}
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
          <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="job-type-label">Branch</InputLabel>
          <Select
            labelId="job-type-label"
            id="job-type"
            value={hireType}
            onChange={handleHireTypeChange}
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
            <MenuItem value="All-Branches">All Branches</MenuItem>
            <MenuItem value="technology">Technology</MenuItem>
            <MenuItem value="electrical">Electrical</MenuItem>
            <MenuItem value="business-marketing">Business & Marketing</MenuItem>
            <MenuItem value="mechanical">Mechanical</MenuItem>
            <MenuItem value="civil">Civil</MenuItem>
          </Select>
          </FormControl>
        
      <Button
        type="submit"
        variant="contained"
        fullWidth
       
        sx={{
            backgroundColor: 'black',
        
           '&:hover': {
    backgroundColor: 'black',
  },
          }}
      >
        Apply
      </Button>
    </form>
  );
};

export default Hire;
