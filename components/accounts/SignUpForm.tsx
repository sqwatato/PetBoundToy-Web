'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";

const SignUpForm = () => {
  const [isOrganization, setIsOrganization] = useState(false);
  
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log("signup submitted");
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-400">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md w-96">
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <Input
            id="name"
            name="name"
            className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="Full Name"
            type="text"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-600">
            Email or Phone
          </label>
          <Input
            id="emailOrPhone"
            name="emailOrPhone"
            className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="Email or Phone"
            type="text"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <Input
            id="password"
            name="password"
            className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handlePasswordVisibility} onMouseDown={handleMouseDownPassword}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
        <div className="mb-6">
          <label htmlFor="organization" className="block text-sm font-medium text-gray-600">
            <input
              type="checkbox"
              id="organization"
              name="organization"
              className="mr-2"
              checked={isOrganization}
              onChange={() => setIsOrganization(!isOrganization)}
            />
            I am representing an organization
          </label>
        </div>
        {isOrganization && (
          <div className="mb-6">
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-600">
              Business<span className="text-red-500">*</span>
            </label>
            <Input
              id="businessName"
              name="businessName"
              className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Business Name"
              type="text"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 bg-green-500 rounded-md text-white font-medium hover:bg-green-600 focus:ring-4 focus:ring-green-300 focus:outline-none mt-4"
        >
          Sign Up
          <i className="fas fa-arrow-right ml-1"></i>
        </button>
        <p className="mt-4 text-center text-gray-600 font__poppins">
          Already have an account? <a href="/login" className="text-green-500">Log in</a>
        </p>
      </form>
    </div>
  );
}
 
export default SignUpForm;
