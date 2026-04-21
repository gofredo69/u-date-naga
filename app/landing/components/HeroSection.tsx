'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left Column - Content */}
        <div className="flex-1 flex flex-col items-start z-10 w-full">
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
              delay: 0.1
            }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 text-gray-900">
            Connect across <br />
            <span style={{ 
              background: 'linear-gradient(to right, #ec4899, #f43f5e)', 
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Naga&apos;s Universities and Colleges
            </span>
          </motion.div>

          <motion.p
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
            className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg leading-relaxed">
            Join the community where Naga City&apos;s university students connect, 
            match, and build meaningful relationships.
          </motion.p>

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
              delay: 0.3
            }}>
            <Link
              href="/signup"
              className="inline-block text-white font-semibold text-base sm:text-lg py-3 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
              style={{ background: 'linear-gradient(to right, #ec4899, #f43f5e)' }}>
              Get Started
            </Link>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.6,
              delay: 0.5
            }}
            className="mt-6 sm:mt-8 flex items-center gap-3 text-sm font-medium text-gray-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) =>
              <div
                key={i}
                className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src={`/assets/images/pic${i}.jpg`}
                  alt="Student"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              )}
            </div>
            <p className="text-xs sm:text-sm">Join 5,000+ students</p>
          </motion.div>
        </div>

        {/* Right Column - Phone Mockups */}
        <div className="flex-1 relative w-full max-w-sm sm:max-w-md lg:max-w-full">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.3
            }}
            className="relative w-full aspect-square max-w-xs sm:max-w-sm mx-auto">
            
            {/* Phone mockup 1 */}
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute left-0 top-0 w-36 sm:w-40 md:w-48 lg:w-56 bg-white rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-gray-200 overflow-hidden z-10">
              <div className="bg-gray-100 p-2 sm:p-3 pb-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
                  <Image src="/assets/images/pic6.jpg" alt="Profile" width={64} height={64} className="w-full h-full object-cover" />
                </div>
                <p className="text-center font-semibold text-gray-800 mt-1 sm:mt-2 text-xs sm:text-sm">Sarah, 21</p>
                <p className="text-center text-xs text-gray-500">CSU-Naga</p>
              </div>
              <div className="p-2 sm:p-3 flex justify-center gap-2 sm:gap-4">
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-500 text-white flex items-center justify-center text-xs sm:text-sm">✕</button>
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pink-500 text-white flex items-center justify-center text-xs sm:text-sm">♥</button>
              </div>
            </motion.div>

            {/* Phone mockup 2 */}
            <motion.div
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute right-0 bottom-0 w-36 sm:w-40 md:w-48 lg:w-56 bg-white rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-gray-200 overflow-hidden z-20">
              <div className="bg-gray-100 p-2 sm:p-3 pb-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
                  <Image src="/assets/images/pic7.jpg" alt="Profile" width={64} height={64} className="w-full h-full object-cover" />
                </div>
                <p className="text-center font-semibold text-gray-800 mt-1 sm:mt-2 text-xs sm:text-sm">Mark, 22</p>
                <p className="text-center text-xs text-gray-500">UNC-Naga</p>
              </div>
              <div className="p-2 sm:p-3 flex justify-center gap-2 sm:gap-4">
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-500 text-white flex items-center justify-center text-xs sm:text-sm">✕</button>
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pink-500 text-white flex items-center justify-center text-xs sm:text-sm">♥</button>
              </div>
            </motion.div>

            {/* Floating heart icon */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute top-[10%] sm:top-[15%] right-[15%] sm:right-[20%] w-10 sm:w-12 h-10 sm:h-12 rounded-xl flex items-center justify-center rotate-12 shadow-lg"
              style={{ backgroundColor: '#D53F8C' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="sm:w-5 sm:h-5">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}