import React,{useState,useEffect} from 'react'
import axios from 'axios'

import profilelogo from '../assets/profile-logo.png'
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
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

const OnCampus = () => {


  const [batch, setBatch] = useState([]);
  

  // const jobs= [
  //   {
  //     "title": "Software Engineer Intern",
  //     "company": "XYZ Tech",
  //     "location": "Remote",
  //     "type": "Internship",
  //     "salary": "Paid",
  //     "posted_date": "2024-06-10",
  //     "apply_link": "https://example.com/apply/software-engineer-intern"
  //   },
  //   {
  //     "title": "Marketing Assistant",
  //     "company": "ABC Marketing Agency",
  //     "location": "Remote",
  //     "type": "Full-time",
  //     "salary": "$40,000 - $50,000 per year",
  //     "posted_date": "2024-06-09",
  //     "apply_link": "https://example.com/apply/marketing-assistant"
  //   },
  //   {
  //     "title": "Data Analyst",
  //     "company": "Data Insights Inc.",
  //     "location": "Remote",
  //     "type": "Full-time",
  //     "salary": "$60,000 - $80,000 per year",
  //     "posted_date": "2024-06-08",
  //     "apply_link": "https://example.com/apply/data-analyst"
  //   },
  //   {
  //     "title": "Software Engineer Intern",
  //     "company": "XYZ Tech",
  //     "location": "Remote",
  //     "type": "Internship",
  //     "salary": "Paid",
  //     "posted_date": "2024-06-10",
  //     "apply_link": "https://example.com/apply/software-engineer-intern"
  //   },
  //   {
  //     "title": "Marketing Assistant",
  //     "company": "ABC Marketing Agency",
  //     "location": "Remote",
  //     "type": "Full-time",
  //     "salary": "$40,000 - $50,000 per year",
  //     "posted_date": "2024-06-09",
  //     "apply_link": "https://example.com/apply/marketing-assistant"
  //   },
  //   {
  //     "title": "Data Analyst",
  //     "company": "Data Insights Inc.",
  //     "location": "Remote",
  //     "type": "Full-time",
  //     "salary": "$60,000 - $80,000 per year",
  //     "posted_date": "2024-06-08",
  //     "apply_link": "https://example.com/apply/data-analyst"
  //   }
  //]

  const [jobs, setJobs] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    setStatus('loading');
    try {
      const response = await axios({
        method: 'get',
        url: 'https://biet-tnp-server.vercel.app/api/user/oncampus',
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      });

      setJobs(response.data); 
       // Set jobs here
      setStatus('succeeded');  // Set status to succeeded here
    } catch (err) {
      console.error(err);
     // Log the error
      setError(err.response.data.message);  // Set the error message
      setStatus('failed');  // Set status to failed
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
    <div className='bg-black z-49 text-white my-[3%]  flex flex-col text-center'>
      <div className='p-[3%]'> <h1 className='font-semibold text-2xl'>On-Campus Jobs</h1>
      <p>Explore a wide range of job opportunities within the campus.</p>
      {/* <input type="text" placeholder='Job title' className='w-2/3 mt-[2%] mb-2 md:w-1/4 px-3 py-1.5 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black-200' /> <br />
      <select className='w-2/3 md:w-1/4 px-3  mb-1.5 py-1.5 mt-[1%] text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black-500'>
      <option value="">All locations</option>
      
      </select>
     <br />
      <select className='w-4/3 mb-1.5 lg:w-[9%] md-w-[12%] mr-[1%] mt-[0.5%] px-3 py-1.5 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black-500'>
      <option value="">Job Type</option>
      <option value="full-time">Full-Time</option>
      <option value="part-time">Part-Time</option>
      <option value="internship">Internship</option>
      </select>
      <select className='w-4/3 md:w-[15%] mb-1.5 mt-[0.5%] px-3 py-1.5 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black-500'>
      <option value="">Branch</option>
      <option value="all-branches" selected>All Branches</option>
     
      <option value="technology">Technology</option>
      <option value="electrical">Electrical</option>
      <option value="business-marketing">Business & Marketing</option>
      <option value="mechanical">Mechanical</option>
      <option value="civil">Civil</option>
      </select>
      <br />
     
        <FormControl sx={{ m: 1, width: 200  }}>
       <InputLabel id="demo-multiple-checkbox-label">Batch</InputLabel> 
        <Select
          
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          fullWidth
          sx={{
            backgroundColor: 'white',
            padding:0,
            margin:0,
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
      <br />
       <button type="button" className='bg-black text-white rounded-md font-lg px-7 py-2 border border-white mt-[2%]'>Search</button> */}
     
      </div>
    </div>
     
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mb-[10%] mb-[50%] mx-[3%] gap-[5%] '>
      
   {/* {
     jobs.map((details,index)=>( <div className='border border-black p-5 flex  '>
      <div className='w-[30%] lg:w-[40%] lg:h-[50%]  md:mt-[6%]' ><img src={profilelogo} alt="" srcset="" /> </div>
      <div className='ml-[2%] flex flex-col'>
       <h3 className='text-xl lg:text-2xl font-semibold'>{details.title}</h3>
       <h5 className='text-md font-medium'>{details.company}</h5>
       <p className='font-medium'>{details.location}</p>
       <p className='font-medium'>{details.type}</p>
       <p className='font-medium'>{details.salary}</p>
       <p className='font-medium'>{details.posted_date}</p>
       <a className='font-medium bg-black text-white px-3 py-2 w-fit mt-3 rounded-md' href={details.apply_link}>Apply</a>
       </div>
       </div>
     ))
   } */}

{status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Error: {error}</div>}
      {status === 'succeeded' && (
         jobs.map((details,index)=>( <div id={index} className='border border-black p-5 flex  '>
          <div className='w-[30%] lg:w-[40%] lg:h-[50%]  md:mt-[6%]' ><img id={index} src={profilelogo} alt=""  /> </div>
          <div className='ml-[2%] flex flex-col'>
           <h3 className='text-xl lg:text-2xl font-semibold'>{details.position}</h3>
           <h5 className='text-md font-medium'>{details.companyname}</h5>
           <p className='font-medium'>{details.location}</p>
           <p className='font-medium'>{details.jobtype}</p>
           <p className='font-medium'>{details.batch[0]}</p>
           <p className='font-medium'>{details.salary}</p>
           <p className='font-medium'>{details.posted_date}</p>
           <a className='font-medium bg-black text-white px-3 py-2 w-fit mt-3 rounded-md' target="_blank" href={details.src} >Apply</a>
           </div>
           </div>
         ))
      )}
 




    </div>


   </>
  
  
    
  )
}

export default OnCampus