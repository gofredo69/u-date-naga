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
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
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
          className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Find your match in three simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              
              <div 
                className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6"
                style={{ backgroundColor: `${index === 0 ? '#FEE2E2' : index === 1 ? '#FCE7F3' : '#DBEAFE'}` }}>
                <div style={{ color: index === 0 ? '#DC2626' : index === 1 ? '#DB2777' : '#2563EB' }}>
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}