'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
export function Navbar() {
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
      className="sticky top-0 z-50 w-full bg-white shadow-sm">
      
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
{/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/assets/images/U-date_logo.png"
            alt="U-date logo"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="font-extrabold text-2xl tracking-tight" style={{ color: '#D53F8C' }}>
            U-date
          </span>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-10 font-medium text-gray-700">
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

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <Link
            href="/login"
            className="hidden sm:block font-semibold text-gray-700 hover:text-[#D53F8C] transition-colors duration-200 text-sm">
            Log In
          </Link>
          <Link
            href="/signup"
            className="text-white font-bold py-2.5 px-6 rounded-full shadow-lg hover:shadow-xl transition-shadow text-sm"
            style={{ backgroundColor: '#D53F8C' }}>
            Join Now
          </Link>
        </div>
      </div>
    </motion.nav>);

}