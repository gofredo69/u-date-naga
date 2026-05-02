import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
export function RegistrationCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Form submitted');
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
        ease: [0.22, 1, 0.36, 1]
      }}
      className="w-full max-w-[440px] bg-white/80 backdrop-blur-xl rounded-3xl shadow-glass border border-white/40 p-8 sm:p-10">
      
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-brand-carbon tracking-tight">
          U Date Naga
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          Create an account to start your journey
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-brand-carbon mb-1.5">
            
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 text-brand-carbon placeholder-gray-400 focus:outline-none focus:border-brand-aqua focus:ring-2 focus:ring-brand-aqua/30 transition-all duration-200"
            required />
          
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-brand-carbon mb-1.5">
            
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 text-brand-carbon placeholder-gray-400 focus:outline-none focus:border-brand-aqua focus:ring-2 focus:ring-brand-aqua/30 transition-all duration-200"
            required />
          
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-brand-carbon mb-1.5">
            
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 text-brand-carbon placeholder-gray-400 focus:outline-none focus:border-brand-aqua focus:ring-2 focus:ring-brand-aqua/30 transition-all duration-200 pr-12"
              required />
            
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1">
              
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-brand-carbon mb-1.5">
            
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 text-brand-carbon placeholder-gray-400 focus:outline-none focus:border-brand-aqua focus:ring-2 focus:ring-brand-aqua/30 transition-all duration-200 pr-12"
              required />
            
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1">
              
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-brand-fuchsia hover:bg-brand-fuchsia-dark text-white font-semibold py-3.5 px-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]">
          
          Sign Up
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Already have an account?{' '}
          <a
            href="#"
            className="font-semibold text-brand-fuchsia hover:text-brand-fuchsia-dark transition-colors">
            
            Log in
          </a>
        </p>
      </div>
    </motion.div>);

}