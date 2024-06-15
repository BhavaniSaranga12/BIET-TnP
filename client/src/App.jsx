

import React from 'react'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import OffCampus from './components/OffCampus'
import OnCampus from './components/OnCampus'
import Footer from './components/Footer'
function App() {
return <>
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path='/' Component={Home}/>
  <Route path='/aboutus' Component={AboutUs}/>
  <Route path='/offcampus' Component={OffCampus} />
  <Route path='/oncampus' Component={OnCampus} />
 </Routes>
 <Footer></Footer>
 </BrowserRouter>
</>
}

export default App
