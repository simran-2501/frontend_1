import React from 'react'

function LoginForm() {
  return (
    <div className='bg-white p-10 text-center w-fit rounded-lg m-auto shadow-md'>
<h1 className='font-bold text-xl'>LOGIN AS AN ADMIN</h1>
<div className='mt-16'>
<input type="email" placeholder='Enter Email Address' className='bg-gray-300 w-96 placeholder-black px-5 py-5 outline-none rounded-3xl'/>
</div>
<div className='my-16'>
<input type="password" placeholder='Enter Password' className='bg-gray-300 w-96 placeholder-black px-5 py-5 outline-none rounded-3xl'/>
</div>
    </div>
  )
}

export default LoginForm