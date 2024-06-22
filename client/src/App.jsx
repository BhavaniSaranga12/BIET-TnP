

import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import OffCampus from './components/OffCampus'
import OnCampus from './components/OnCampus'
import Footer from './components/Footer'
import Register from './components/Register'
import Signin from './components/Signin'
import Hire from './components/Hire'
import { useDispatch } from 'react-redux';
import { login, logout } from './slices/authSlice';
import axios from 'axios'
import NotFound from './components/NotFound';
import { useSelector } from 'react-redux';
import Add from './components/Add';


function App() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const role=useSelector((state)=>state.auth.role);
    const dispatch=useDispatch();
 useEffect(  ()=>{
    async function fetch(){
        await axios({
         method:'get',
        url: 'http://localhost:3000/validate',
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      }
      ).then((response)=>{
            console.log(response.data)
            if(response.status==201)
           dispatch(login({name:response.data.details.user, role: response.data.details.role} ));
         else
           dispatch(logout())
         }).catch(error=>{
            console.log(error)
            dispatch(logout())
         })
    }
 fetch()
 },[])


return <>
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path='/' Component={Home}/>
  <Route path='/aboutus' Component={AboutUs}/>
  <Route path='/offcampus' Component={OffCampus} />
  <Route path='/oncampus' Component={OnCampus} />
  {!isLoggedIn? (<>
    <Route path='/register' Component={Register} />
    <Route path='/signin' Component={Signin} />
  </>):<Route path='/notfound' Component={NotFound} />}
  {role=='admin'? <Route path='/add' Component={Add} />:<Route path='/notfound' Component={NotFound} />}

     {role=='admin'|| role=='faculty'?<Route path='/hire' Component={Hire} />:<Route path='/notfound' Component={NotFound} /> }
  
  <Route path='/*' Component={NotFound}/>
 </Routes>
 <Footer></Footer>
 </BrowserRouter>
 <Toaster />
</>
}

export default App
