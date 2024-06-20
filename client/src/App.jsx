

import React from 'react'
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



function App() {
return <>
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path='/' Component={Home}/>
  <Route path='/aboutus' Component={AboutUs}/>
  <Route path='/offcampus' Component={OffCampus} />
  <Route path='/oncampus' Component={OnCampus} />
  <Route path='/register' Component={Register} />
  <Route path='/signin' Component={Signin} />
  <Route path='/hire' Component={Hire} />
 </Routes>
 <Footer></Footer>
 </BrowserRouter>
 <Toaster />
</>
}

export default App
