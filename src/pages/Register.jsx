import React from 'react'

const Register = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='w-[50%] border flex justify-center items-center flex-col'>
        <div className='w-[50%] my-16'>
          <h1 className='text-center my-5 text-2xl '>Welcome to BeyondChats</h1>
          <form className='flex flex-col gap-6 '>
            <div className='flex flex-col gap-1'>
              <label htmlFor="name" className='font-roboto'>Name</label>
              <input type="text" id="name" name="name" className='border border-gray-500 hover:border-black px-2 py-1' placeholder='Name' />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="email" className='font-roboto'>Email</label>
              <input type="email" id="email" name="email" className='border border-gray-500 hover:border-black px-2 py-1' placeholder='Email' />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="password" className='font-roboto'>Password</label>
              <input type="password" id="password" name="password" className='border border-gray-500 hover:border-black px-2 py-1' placeholder='Password' />
            </div>

          </form>
          <button type="submit" className='cursor-pointer bg-black hover:bg-[#333333] text-white w-full p-2 my-3'>Register</button>
          <span className='border-l w-full'></span>
          <p className='text-center'>or</p>
          <button className='cursor-pointer border w-full p-2 my-3'>Continue with google</button>
        </div>
      </div>
    </div>
  )
}

export default Register