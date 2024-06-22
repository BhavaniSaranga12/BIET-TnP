


import React, { useState } from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io"; 
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role= useSelector((state)=> state.auth.role);
  const [isClicked, setIsClicked] = useState(false);

  const buttonClicked = () => {
    setIsClicked(!isClicked);
  };
  const Logout=()=>{
    localStorage.removeItem('token');
    dispatch(logout())
    navigate('/');
  }

  return (
    <nav className='flex z-100 justify-between items-center mt-5 mx-5 px-3 py-2'>
      <div className='md:text-3xl text-2xl p-1 font-bold basis-1/2 md:basis-1/4 shrink'>BIET-TnP</div> 
      <div className={`absolute z-100 md:relative md:w-fit bg-white top-[10.5vh] py-6 left-0 md:top-0 w-[100vw] md:m-0 md:my-1 md:p-1 md:min-h-fit min-h-[50vh] md:block ${isClicked ? 'block' : 'hidden'}`}>
        <ul className='flex flex-col z-100 md:flex-row gap-12 items-center'>
          <li onClick={() => { navigate('/'); setIsClicked(false); }} className='hover:text-gray-500 md:text-lg text-center cursor-pointer font-semibold hover:underline'>Home</li>
          <li onClick={() => { navigate('/oncampus'); setIsClicked(false); }} className='hover:text-gray-500 md:text-lg text-center cursor-pointer font-semibold hover:underline'>On-Campus</li>
          <li onClick={() => { navigate('/offcampus'); setIsClicked(false); }} className='hover:text-gray-500 md:text-lg text-center cursor-pointer font-semibold hover:underline'>Off-Campus</li>
          <li onClick={() => { navigate('/aboutus'); setIsClicked(false); }} className='hover:text-gray-500 md:text-lg text-center cursor-pointer font-semibold hover:underline z-50'>About us</li>
         {role=='admin'|| role=='faculty'?
         <li onClick={() => { navigate('/hire'); setIsClicked(false); }} className='hover:text-gray-500 md:text-lg text-center cursor-pointer font-semibold hover:underline'>Hire</li> : null
         }
         {role=='admin' &&  <li onClick={() => { navigate('/add'); setIsClicked(false); }} className='hover:text-gray-500 md:text-lg text-center cursor-pointer font-semibold hover:underline'>add</li>}
         
          
        </ul>
      </div>
      <div className='py-1 flex gap-2 '>
        {!isLoggedIn? (<><button onClick={() => { navigate('/register'); }} className='bg-black text-white px-2  py-1 md:text-xl text-md rounded hover:bg-slate-800'>Register</button>
        <button onClick={() => { navigate('/signin'); }} className='bg-black text-white px-2 py-1 md:text-xl text-md rounded hover:bg-slate-800'>Signin</button></>) 
        :(<button onClick={Logout} className='bg-black text-white px-2  py-1 md:text-xl text-md rounded hover:bg-slate-800'>Logout</button>)}
      

        {isClicked ? <IoMdClose onClick={buttonClicked} className='text-3xl block cursor-pointer md:hidden' /> : <IoMdMenu onClick={buttonClicked} className='text-3xl block cursor-pointer md:hidden' />}
      </div>
    </nav>
  );
};

export default Navbar;
