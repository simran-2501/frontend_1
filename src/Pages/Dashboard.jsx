import React from 'react'
import Navbar from '../Components/Navbar'
import Map from '../Components/Map'
import {Search} from 'lucide-react'
function Dashboard() {
  return (
    <div>
        <Navbar title={"DASHBOARD"}/>
        <div className='bg-gray-300 absolute z-10 rounded-2xl flex items-center px-3'>
        <input type="text" placeholder='Search Map' className='p-2 rounded-2xl bg-gray-300 placeholder-black outline-none'/>
        <Search />
        </div>
        <Map/>
    </div>
  )
}

export default Dashboard