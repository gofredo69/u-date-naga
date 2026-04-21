'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { LoginCard } from './components/LoginCard';

export function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden font-sans selection:bg-[#D53F8C] selection:text-white" style={{ backgroundColor: '#ffffff' }}>
      
      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-4 md:p-6 z-20">
        <motion.div
          initial={{
            opacity: 0,
            x: -20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.5
          }}
          className="flex justify-center md:justify-start w-full">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
            <Image
              src="/assets/images/U-date_logo.png"
              alt="UDate Naga logo"
              width={80}
              height={80}
              className="md:w-10 md:h-10 object-contain"
            />
            <span className="text-3xl md:text-2xl font-bold tracking-tight" style={{ color: '#D53F8C' }}>
              UDate Naga
            </span>
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-10 w-full max-w-7xl mx-auto mt-36 md:mt-0">
        {/* Hero Text */}
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
          className="text-center mb-8 md:mb-10 max-w-2xl mx-auto mt-5 md:mt-0">
          
          <h1 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight mt-5">
            Welcome Back!
          </h1>
          <p className="text-base text-gray-600 font-medium max-w-xl mx-auto leading-relaxed">
            Sign in to connect with peers from your campus and explore other
            universities in Naga City.
          </p>
        </motion.div>

        {/* Login Form Card */}
        <LoginCard />
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full py-4 sm:py-6 text-center z-10">
        <p className="text-xs sm:text-sm text-gray-500 font-medium">
          © {new Date().getFullYear()} UDate Naga. Connecting campuses.
        </p>
      </footer>
    </div>
  );
}