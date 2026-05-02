'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{
        y: -20,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.5
      }}
      className="sticky top-0 z-50 w-full shadow-sm"
      style={{ backgroundColor: '#FFFDD0' }}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/assets/images/U-date_logo.png"
            alt="U Date Naga logo"
            width={40}
            height={40}
            className="sm:w-14 sm:h-14 object-contain"
          />
          <span className="font-extrabold text-xl sm:text-2xl tracking-tight" style={{ color: '#D53F8C', fontFamily: "'Ramabhadra', sans-serif" }}><span style={{ fontWeight: 700 }}>UDate</span> Naga</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 font-medium text-gray-700">
          <Link
            href="/"
            className="hover:text-[#D53F8C] transition-colors duration-200 text-sm">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-[#D53F8C] transition-colors duration-200 text-sm">
            About Us
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <Link
            href="/login"
            className="font-semibold text-gray-700 hover:text-[#D53F8C] transition-colors duration-200 text-sm">
            Log In
          </Link>
          <Link
            href="/signup"
            className="text-white font-bold py-2 lg:py-2.5 px-4 lg:px-6 rounded-full shadow-lg hover:shadow-xl transition-shadow text-sm"
            style={{ background: 'linear-gradient(to right, #ec4899, #f43f5e)' }}>
            Join Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-gray-700 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-gray-700 transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-gray-700 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FFFDD0] border-t border-gray-200"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              <Link
                href="/"
                className="font-medium text-gray-700 hover:text-[#D53F8C] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="font-medium text-gray-700 hover:text-[#D53F8C] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/login"
                className="font-semibold text-gray-700 hover:text-[#D53F8C] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="text-white font-bold py-3 px-6 rounded-full text-center shadow-lg"
                style={{ background: 'linear-gradient(to right, #ec4899, #f43f5e)' }}
                onClick={() => setIsOpen(false)}
              >
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}