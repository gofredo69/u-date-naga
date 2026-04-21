'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Heart, MessageCircle } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-10 h-10" />,
    title: '1. Discover',
    description: 'Browse profiles of students from your campus and nearby universities.',
  },
  {
    icon: <Heart className="w-10 h-10" />,
    title: '2. Match',
    description: 'When you both like each other, it\'s a match! Start a conversation.',
  },
  {
    icon: <MessageCircle className="w-10 h-10" />,
    title: '3. Connect',
    description: 'Chat in real-time and build meaningful connections.',
  },
];

export function FeaturesSection() {
  return (
    <section className="w-full bg-gray-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.6
          }}
          className="text-center mb-10 sm:mb-16">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Find your match in three simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}
              transition={{
                duration: 0.5,
                delay: step.delay || index * 0.1
              }}
              className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              
              <div 
                className="w-14 h-14 sm:w-16 sm:w-20 sm:h-20 rounded-full mx-auto flex items-center justify-center mb-4 sm:mb-6"
                style={{ backgroundColor: `${index === 0 ? '#FEE2E2' : index === 1 ? '#FCE7F3' : '#DBEAFE'}` }}>
                <div className="sm:hidden" style={{ color: index === 0 ? '#DC2626' : index === 1 ? '#DB2777' : '#2563EB' }}>
                  {React.cloneElement(step.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                <div className="hidden sm:block" style={{ color: index === 0 ? '#DC2626' : index === 1 ? '#DB2777' : '#2563EB' }}>
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}