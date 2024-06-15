import React from 'react'
import Select from 'react-select';
import profilelogo from '../assets/profile-logo.png'

const OffCampus = () => {
  const batches = [
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' },
    { value: '2025', label: '2025' },
   
  ];

  
    const jobs= [
      {
        "title": "Software Engineer Intern",
        "company": "XYZ Tech",
        "location": "Remote",
        "type": "Internship",
        "salary": "Paid",
        "posted_date": "2024-06-10",
        "apply_link": "https://example.com/apply/software-engineer-intern"
      },
      {
        "title": "Marketing Assistant",
        "company": "ABC Marketing Agency",
        "location": "Remote",
        "type": "Full-time",
        "salary": "$40,000 - $50,000 per year",
        "posted_date": "2024-06-09",
        "apply_link": "https://example.com/apply/marketing-assistant"
      },
      {
        "title": "Data Analyst",
        "company": "Data Insights Inc.",
        "location": "Remote",
        "type": "Full-time",
        "salary": "$60,000 - $80,000 per year",
        "posted_date": "2024-06-08",
        "apply_link": "https://example.com/apply/data-analyst"
      },
      {
        "title": "Software Engineer Intern",
        "company": "XYZ Tech",
        "location": "Remote",
        "type": "Internship",
        "salary": "Paid",
        "posted_date": "2024-06-10",
        "apply_link": "https://example.com/apply/software-engineer-intern"
      },
      {
        "title": "Marketing Assistant",
        "company": "ABC Marketing Agency",
        "location": "Remote",
        "type": "Full-time",
        "salary": "$40,000 - $50,000 per year",
        "posted_date": "2024-06-09",
        "apply_link": "https://example.com/apply/marketing-assistant"
      },
      {
        "title": "Data Analyst",
        "company": "Data Insights Inc.",
        "location": "Remote",
        "type": "Full-time",
        "salary": "$60,000 - $80,000 per year",
        "posted_date": "2024-06-08",
        "apply_link": "https://example.com/apply/data-analyst"
      }
    ]
  
  


  return (
   <>
    <div className='bg-black z-49 text-white my-[3%]  flex flex-col text-center'>
      <div className='p-[3%]'> <h1 className='font-semibold text-2xl'>Off-Campus Jobs</h1>
      <p>Explore a wide range of job opportunities outside the campus.</p>
      <input type="text" placeholder='Job title' className='w-2/3 mt-[2%] md:w-1/4 px-3 py-1.5 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black-200' /> <br />
      <select className='w-2/3 md:w-1/4 px-3 py-1.5 mt-[1%] text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black-500'>
      <option value="">All locations</option>
      
      </select>
     <br />
      <select className='w-4/3 md:w-[15%] mr-[1%] mt-[0.5%] px-3 py-1.5 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black-500'>
      <option value="">Job Type</option>
      <option value="full-time">Full-Time</option>
      <option value="part-time">Part-Time</option>
      <option value="internship">Internship</option>
      </select>
      <select className='w-4/3 md:w-[15%] mt-[0.5%] px-3 py-1.5 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black-500'>
      <option value="">Branch</option>
      <option value="all-branches" selected>All Branches</option>
     
      <option value="technology">Technology</option>
      <option value="electrical">Electrical</option>
      <option value="business-marketing">Business & Marketing</option>
      <option value="mechanical">Mechanical</option>
      <option value="civil">Civil</option>
      </select>
      <Select
          isMulti
          name="batches"
          options={batches}
          className="w-full   md:w-[25%]  md:mx-[38%] mt-[1%] text-black rounded-md focus:outline-none"
          classNamePrefix="select"
          placeholder="Select Batch"
        />
       <button type="button" className='bg-black text-white rounded-md font-lg px-7 py-2 border border-white mt-[2%]'>Search</button>
     
      </div>
    </div>
     
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mb-[10%] mb-[50%] mx-[3%] gap-[5%] '>
      
   {
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
   }



    </div>


   </>
  )
}

export default OffCampus