import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import useUserStore from '../zustand/useUserStore.js';

const Register = () => {
  const [userData, setUserData] = useState({});
  const [validateUser, setValidateUser] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');

  const setUser = useUserStore((state) => state.setUser);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidateUser(true); 
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const closeDialog = () => {
    setValidateUser(false); 
  };

  const handleUserInfo = () => {
    setUser(userData);
    navigate('/setup-org');
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className='w-full md:w-[40%] lg:w-[35%] border border-gray-200 bg-white flex flex-col items-center py-8 mx-4'>
        <div className='w-[90%] md:w-[70%] my-8 space-y-6'>
          <h1 className='text-center text-2xl font-medium text-gray-800'>
            Welcome back to BeyondChats
          </h1>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='space-y-4'>

              <div className='flex flex-col gap-1'>
                <label htmlFor="email" className='text-sm font-medium text-gray-700'>
                  Email
                </label>
                <div className='relative'>
                  <input
                    onChange={handleChange}
                    type="email"
                    id="email"
                    name="email"
                    className='w-full px-3 py-2 border border-gray-300 hover:border-gray-400 focus:outline-none focus:border-black pl-10'
                    placeholder='Email'
                  />
                  <FaEnvelope className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                </div>
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor="password" className='text-sm font-medium text-gray-700'>
                  Password
                </label>
                <div className='relative'>
                  <input
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className='w-full px-3 py-2 border border-gray-300 hover:border-gray-400 focus:outline-none focus:border-black pl-10 pr-10'
                    placeholder='Password'
                  />
                  <FaLock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none'
                  >
                    {userData?.password?.length > 0 && (showPassword ? <FaEyeSlash /> : <FaEye />)}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className='w-full py-2 bg-black hover:bg-gray-800 text-white font-medium transition-colors cursor-pointer'
            >
              Login
            </button>
          <p className='-mt-4 flex'>Already have an account, <Link to={'/register'} className='text-blue-600 underline cursor-pointer'>register</Link> </p>
          </form>
          <div className='flex items-center gap-3'>
            <div className='flex-1 border-t border-gray-300'></div>
            <span className='text-sm text-gray-500'>or</span>
            <div className='flex-1 border-t border-gray-300'></div>
          </div>

          <button
            className='w-full py-2 border border-gray-300 flex justify-center 
                     items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer'
          >
            <FcGoogle className='text-lg' />
            <span className='text-sm font-medium'>Continue with Google</span>
          </button>
        </div>
      </div>

      {/* Dialog */}
      {validateUser && (
        <div className='fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-opacity-50'>
          <div className='bg-white p-6 w-[90%] md:w-[50%] lg:w-[40%] border border-gray-300 relative'>
            <span className='absolute top-1 right-1 cursor-pointer text-xl' onClick={closeDialog}>
              <FaTimes/>
            </span>
            <h2 className='text-xl font-semibold mb-4'>Enter Verification Code</h2>
            <p className='text-gray-700 mb-4'>
              A verification code has been sent to your email. Please enter it below:
            </p>
            <input
              type='text'
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-black mb-4'
              placeholder='Verification Code'
            />
            <button
              onClick={handleUserInfo}
              className='w-full py-2 bg-black hover:bg-gray-800 text-white font-medium transition-colors cursor-pointer'
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
