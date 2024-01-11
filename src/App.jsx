import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Otp from './Pages/Otp'
import DashboardXYZ from './Pages/DashboardXYZ'
import ObjectDetection from './Pages/ObjectDetection'
function App() {
  

  return (
   <Routes>

<Route exact path='/' element={<Dashboard/>}></Route>
<Route exact path='/xyz' element={<DashboardXYZ/>}></Route>
    <Route exact path='/login' element={<Login/>}></Route>
    <Route exact path='/otp' element={<Otp/>}></Route>
<Route exact path='/objectdetection' element={<ObjectDetection/>}></Route>

   
   </Routes>
  )
}

export default App
