import React from 'react'
import  bietImage from '../assets/biet.png'
import sutherland from '../assets/sutherland.png'
import omnicloud from '../assets/omnicloud.png'
import excelr from '../assets/excelr.jpeg'
import sunglare from '../assets/sunglare.jpeg'
import rinex from '../assets/rinex.png'
import {useNavigate} from 'react-router-dom'

 const companyImages= [
  sutherland,
  omnicloud,
  excelr,
  sunglare,
  rinex
 ]

const Home = () => {
  const navigate=useNavigate();
  return ( <>
    <div className='relative m-[1%]'>
      <img src={bietImage} alt="" className='w-full lg:h-[800px] filter brightness-75' />
      <div className='absolute inset-0 flex items-end lg:bottom-[35%] bottom-[20%] justify-center  text-center'>
    <div>
      <h2 className='lg:text-3xl text-sm lg:font-bold lg:mb-4 mb-2.5 text-white'>Explore exciting job opportunities right here on campus!</h2>
      <button onClick={()=>{navigate('/oncampus')}} className='cursor-pointer lg:font-bold text-sm lg:py-2 lg:px-4 py-1 px-2 bg-black text-white  rounded'>
        Oncampus Jobs
      </button>
    </div>
  </div>
      
    </div>
   
    <div className='my-20 w-[100%] whitespace-nowrap overflow-hidden'>
      <h3 className='text-center font-bold text-2xl my-3'>Companies visited in 2024</h3>
      <div className='flex animate-scroll'>
      {companyImages.map((src,index)=> (
          <img className=" m-5 lg:w-[100%]  lg:h-[100px] md:w-[100%]  md:h-[100px] w-[100px] h-[50px]" src={src} key={index} alt={src} />
         ))}
          {companyImages.map((src,index)=> (
          <img className=" m-5 lg:w-[100%] lg:h-[100px] md:w-[100%]  md:h-[100px] w-[100px] h-[50px]" src={src} key={index} alt={src} />
         ))}
      </div>
    </div>
    <div className='mx-5 mt-[10%] mb-20'>
    <div className='md:text-2xl text-xl font-bold py-4'>Explore a wide range of job opportunities outside the campus.</div>
    <button onClick={()=>{navigate('/offcampus')}} type="button" className='bg-black text-white p-3 rounded cursor-pointer'>Take me to off-campus jobs</button>
    </div>
    </>
  )
}

export default Home