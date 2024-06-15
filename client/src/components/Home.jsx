import React from 'react'
import  bietImage from '../assets/biet.jpg'
import sutherland from '../assets/sutherland.png'
import omnicloud from '../assets/omnicloud.jpeg'
import excelr from '../assets/excelr.jpeg'


 const companyImages= [
  sutherland,
  omnicloud,
  excelr
 ]

const Home = () => {
  return ( <>
    <div className=' m-[5%]'>
      <img src={bietImage} alt="" className='w-[100%]' />
    </div>
 
      <div className=' text-2xl font-semibold m-[3%]'>Explore exciting job opportunities right here on campus!</div>
      <button type="button" className='bg-black text-white p-3 rounded'>Oncampus Jobs</button>
    <div className=' w-[100%] whitespace-nowrap overflow-hidden'>
      <div className='flex animate-scroll'>
      {companyImages.map((src,index)=> (
          <img className="lg:w-[100%] w-[30%] lg:h-[100%] h-[30%] " src={src} key={index} alt={src} />
         ))}
          {companyImages.map((src,index)=> (
          <img className="lg:w-[100%] w-[30%] lg:h-[100%] h-[30%] " src={src} key={index} alt={src} />
         ))}
      </div>
    </div>
    </>
  )
}

export default Home