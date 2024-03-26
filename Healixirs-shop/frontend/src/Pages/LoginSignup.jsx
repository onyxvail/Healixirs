import React, { useState } from 'react';

const LoginSignup = () => {
  const [state, setState] = useState("Login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-customNeon to-customBlack bg-fixed bg-cover">
      <div className="w-full max-w-lg bg-customBlack shadow-xl rounded-lg p-8 transform transition-transform duration-500 hover:scale-105">
        <h1 className="text-customNeon text-4xl font-bold text-center mb-6">{state}</h1>
        <div className="flex justify-center">
          <form className="w-full space-y-6">
            <div className="relative">
              {state === "Sign Up" ? (
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input border border-gray-300 px-4 py-3 rounded-lg w-full"
                />
              ) : (
                <></>
              )}
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="E-mail Address"
                className="input border border-gray-300 px-4 py-3 rounded-lg w-full"
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="input border border-gray-300 px-4 py-3 rounded-lg w-full"
              />
            </div>
            <button className="btn btn-primary w-full text-customBlack bg-gradient-to-br from-customNeon to-customBlack px-4 py-3 rounded-lg">Continue</button>
            {state === "Sign Up" ? (
              <p className="text-sm mt-4 text-gray-300 text-center">
                Already have an account? <span onClick={() => setState("Login")} className="text-customNeon cursor-pointer">Login Here</span>
              </p>
            ) : (
              <p className="text-sm mt-4 text-gray-300 text-center">
                Create a new account <span onClick={() => setState("Sign Up")} className="text-customNeon cursor-pointer">Click here</span>
              </p>
            )}
          </form>
        </div>
        <label className="flex items-center mt-2 text-sm text-gray-500">
          <input type="checkbox" className="mr-2 mt-px" />
          <span>
            By continuing, I agree to the terms of use & privacy policies
          </span>
        </label>
      </div>
    </div>
  );
};

export default LoginSignup;
