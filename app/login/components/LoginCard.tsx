'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function LoginCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.6,
        delay: 0.2
      }}
      className="w-full max-w-md bg-white rounded-[20px] p-6 sm:p-8 relative z-10"
      style={{
        boxShadow: `
          20px 20px 60px #d1d1d1,
          -20px -20px 60px #ffffff,
          inset 0 0 0 1px rgba(255,255,255,0.8)
        `
      }}>
      
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        {/* Email Field */}
        <div className="space-y-2">
          <label
            className="text-sm font-semibold"
            style={{ color: '#151717' }}
            htmlFor="email">
            Email
          </label>
          <div 
            className="flex items-center rounded-[10px] transition-all duration-200"
            style={{ 
              border: '1.5px solid #ecedec',
              paddingLeft: '10px'
            }}
          >
            <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
              <g id="Layer_3" data-name="Layer 3">
                <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" fill="#9ca3af" />
              </g>
            </svg>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-[10px] border-none py-3 px-3 text-gray-900 placeholder-gray-400 focus:outline-none"
              style={{ background: 'transparent' }}
              placeholder="Enter your Email"
              required />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <label
            className="text-sm font-semibold"
            style={{ color: '#151717' }}
            htmlFor="password">
            Password
          </label>
          <div 
            className="flex items-center rounded-[10px] transition-all duration-200"
            style={{ 
              border: '1.5px solid #ecedec',
              paddingLeft: '10px'
            }}
          >
            <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 10 0v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3z" fill="#9ca3af" />
            </svg>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-[10px] border-none py-3 px-3 text-gray-900 placeholder-gray-400 focus:outline-none"
              style={{ background: 'transparent' }}
              placeholder="Enter your Password"
              required />
          </div>
        </div>

{/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full rounded-[20px] text-white font-bold py-3.5 px-6 cursor-pointer mt-2"
          style={{ 
            background: '#C13D88',
            border: 'none',
          }}
          whileHover={{ background: '#111111' }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Log In
        </motion.button>

        {/* Continue with Google */}
        <motion.button
          type="button"
          className="w-full flex items-center justify-center gap-3 rounded-[8px] py-3 px-6 cursor-pointer transition-all"
          style={{ 
            border: '1px solid rgba(0, 0, 0, 0.25)',
            background: '#fff',
            color: '#41403f',
            fontWeight: '700',
            fontSize: '0.875rem'
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" width="24" height="24">
            <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" />
            <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" />
            <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" />
            <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
          </svg>
          Continue with Google
        </motion.button>

        {/* Forgot Password - Centered */}
        <div className="text-center">
          <Link
            href="#"
            className="text-sm font-medium transition-colors"
            style={{ color: '#2d79f3' }}>
            Forgot Password?
          </Link>
        </div>
        
        <p className="text-center text-sm" style={{ color: '#151717', margin: '5px 0' }}>
          Don&apos;t have an account?{' '}
          <Link href="/signup" style={{ color: '#2d79f3', fontWeight: 500 }}>
            Sign up
          </Link>
        </p>
      </form>
    </motion.div>
  );
}