import React from 'react'
import BackgroundLogo from '../assets/logo_bg.png'
import Avatar from '../assets/avatar.png'
function Navbar({title}) {
  return (
    <div className='flex items-center bg-indigo-600 px-5'>
        <img src={BackgroundLogo} alt="no_logo" width={50}/>
        <h1 className='ml-5 font-bold text-white text-2xl'>{title}</h1>
        <img src={Avatar} alt="no_avatar" className='ml-auto'/>
    </div>
  )
}

export default Navbar