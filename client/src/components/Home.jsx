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
    <div className='relative m-[1%]'>
      <img src={bietImage} alt="" className='w-[100%] filter brightness-75' />
      <div className='absolute inset-0 flex items-end lg:bottom-[35%] bottom-[20%] justify-center  text-center'>
    <div>
      <h2 className='lg:text-3xl font-bold lg:mb-4 mb-2.5 text-white'>Explore exciting job opportunities right here on campus!</h2>
      <button className=' lg:font-bold lg:py-2 lg:px-4 py-1 px-2 bg-black text-white  rounded'>
        Oncampus Jobs
      </button>
    </div>
  </div>
      
    </div>
    <div className=' text-2xl font-semibold m-[3%]'></div>
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