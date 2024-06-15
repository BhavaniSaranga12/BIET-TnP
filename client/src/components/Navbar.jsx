// import React from 'react'
// import { useState } from 'react';
// import { IoMdMenu, IoMdClose} from "react-icons/io"; 
// import { useNavigate } from 'react-router-dom';



// const Navbar = () => {
//   const navigate=useNavigate()
//  const [isClicked, setisClicked]= useState(false);
//  function buttonClicked(){
//   setisClicked(!isClicked);
//  }
//   return (
//     <div className='flex justify-between items-center mt-5 mx-6 px-3 py-2'>
//        <div className='  text-3xl p-1 font-bold basis-1/2 md:basis-1/4 shrink '>BIET-TnP</div> 
//        <div className={absolute  md:relative md:w-fit bg-white top-[15vh] py-6 left-0  md:top-0 w-[100vw]  md:m-0 md:my-1 md:p-1 md:min-h-fit min-h-[50vh] md:block ${isClicked? 'block':'hidden '}}>
//         <ul className='flex  flex-col  md:flex-row gap-12 items-center'>
//             <li onClick={()=>{navigate('/');
//               setisClicked(!isClicked);
//             }} className='hover:text-gray-500 md:text-lg text-center cursor-pointer font-semibold '>Home</li>
//             <li onClick={()=>{navigate('/oncampus'); setisClicked(!isClicked);}} className='hover:text-gray-500 md:text-lg text-center cursor-pointer font-semibold '>On-Campus</li>
//             <li onClick={()=>{navigate('/offcampus'); setisClicked(!isClicked);}} className='hover:text-gray-500 md:text-lg text-center cursor-pointer font-semibold'>Off-Campus</li>
//             <li onClick={()=>{navigate('/aboutus'); setisClicked(!isClicked);}} className='hover:text-gray-500 md:text-lg text-center cursor-pointer font-semibold'>About us</li>
//         </ul>
//        </div>
//        <div  className='p-1 flex gap-3 space-x-0 '>
//         <button onClick={()=>{navigate('/signin')}} className='bg-black  text-white  px-2 py-1 text-xl rounded hover:bg-slate-800'>Signin</button>
//         {isClicked? <IoMdClose onClick={buttonClicked} className='text-4xl block cursor-pointer md:hidden' />:<IoMdMenu onClick={buttonClicked} className='text-4xl block cursor-pointer  md:hidden'/>}
    
//        </div>
//     </div>
//   )
// }



// export default Navbar


import React, { useState } from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io"; 
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const buttonClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <nav className='flex z-50 justify-between items-center mt-5 mx-5 px-3 py-2'>
      <div className='md:text-3xl text-2xl p-1 font-bold basis-1/2 md:basis-1/4 shrink'>BIET-TnP</div> 
      <div className={`absolute md:relative md:w-fit bg-white top-[10.5vh] py-6 left-0 md:top-0 w-[100vw] md:m-0 md:my-1 md:p-1 md:min-h-fit min-h-[50vh] md:block ${isClicked ? 'block' : 'hidden'}`}>
        <ul className='flex flex-col md:flex-row gap-12 items-center'>
          <li onClick={() => { navigate('/'); setIsClicked(false); }} className='hover:text-gray-500 md:text-lg text-center cursor-pointer font-semibold hover:underline'>Home</li>
          <li onClick={() => { navigate('/oncampus'); setIsClicked(false); }} className='hover:text-gray-500 md:text-lg text-center cursor-pointer font-semibold hover:underline'>On-Campus</li>
          <li onClick={() => { navigate('/offcampus'); setIsClicked(false); }} className='hover:text-gray-500 md:text-lg text-center cursor-pointer font-semibold hover:underline'>Off-Campus</li>
          <li onClick={() => { navigate('/aboutus'); setIsClicked(false); }} className='hover:text-gray-500 md:text-lg text-center cursor-pointer font-semibold hover:underline z-50'>About us</li>
          <li onClick={() => { navigate('/aboutus'); setIsClicked(false); }} className='hover:text-gray-500 md:text-lg text-center cursor-pointer font-semibold hover:underline'>Hire</li>
        </ul>
      </div>
      <div className='py-1 flex gap-2 '>
      <button onClick={() => { navigate('/signin'); }} className='bg-black text-white px-2  py-1 md:text-xl text-md rounded hover:bg-slate-800'>Register</button>
        <button onClick={() => { navigate('/signin'); }} className='bg-black text-white px-2 py-1 md:text-xl text-md rounded hover:bg-slate-800'>Signin</button>
        {isClicked ? <IoMdClose onClick={buttonClicked} className='text-3xl block cursor-pointer md:hidden' /> : <IoMdMenu onClick={buttonClicked} className='text-3xl block cursor-pointer md:hidden' />}
      </div>
    </nav>
  );
};

export default Navbar;
