import React, { useState } from 'react';
import signpic from '../assets/images/Sign.png';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const [isRegister, setIsRegister] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    navigate('home');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white p-6">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img src={signpic} alt="Sign" className="w-full max-w-md mx-auto" />
      </div>

      <div className="md:w-1/2 w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between mb-6">
          <button
            onClick={() => setIsRegister(true)}
            className={`px-4 py-2 rounded ${
              isRegister ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Create New Account
          </button>
          <button
            onClick={() => setIsRegister(false)}
            className={`px-4 py-2 rounded ${
              !isRegister ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Already have an account? Login
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <h2 className="text-xl font-bold text-center">
            {isRegister ? 'Register' : 'Login'}
          </h2>

          <div>
            <input
              type="text"
              placeholder="Username"
              {...register('username', { required: 'Username is required' })}
              className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-blue-500"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: 'Email is required' })}
              className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {isRegister && (
            <>
              <div>
                <input
                  type="text"
                  placeholder="Phone"
                  {...register('phone', { required: 'Phone is required' })}
                  className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-blue-500"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Address"
                  {...register('address', { required: 'Address is required' })}
                  className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-blue-500"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                )}
              </div>
            </>
          )}

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register('password', { required: 'Password is required' })}
              className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
