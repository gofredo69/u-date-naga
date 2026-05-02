'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden font-['Be_Vietnam_Pro'] text-[#23181d] bg-[#fff8f8]">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full shadow-sm"
        style={{ backgroundColor: '#FFFDD0' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1 sm:gap-2 cursor-pointer hover:no-underline">
            <Image
              src="/assets/images/U-date_logo.png"
              alt="U Date Naga logo"
              width={32}
              height={32}
              className="sm:w-14 sm:h-14 object-contain w-8 h-8"
            />
            <span className="font-extrabold text-lg sm:text-2xl tracking-tight" style={{ color: '#D53F8C', fontFamily: "'Ramabhadra', sans-serif" }}>
              <span style={{ fontWeight: 700 }}>UDate</span> Naga
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-10 font-medium text-gray-700">
            <Link href="/" className="hover:text-[#D53F8C] transition-colors duration-200 text-sm">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#D53F8C] transition-colors duration-200 text-sm">
              About Us
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link href="/login" className="font-semibold text-gray-700 hover:text-[#D53F8C] transition-colors duration-200 text-sm">
              Log In
            </Link>
            <Link href="/signup" className="text-white font-bold py-2 lg:py-2.5 px-4 lg:px-6 rounded-full shadow-lg hover:shadow-xl transition-shadow text-sm" style={{ background: 'linear-gradient(to right, #ec4899, #f43f5e)' }}>
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-700 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#FFFDD0] border-t border-gray-200"
            >
              <div className="px-4 py-4 flex flex-col gap-4">
                <Link href="/" className="font-medium text-gray-700 hover:text-[#D53F8C] transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link href="/about" className="font-medium text-gray-700 hover:text-[#D53F8C] transition-colors" onClick={() => setIsMenuOpen(false)}>
                  About Us
                </Link>
                <Link href="/login" className="font-semibold text-gray-700 hover:text-[#D53F8C] transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Log In
                </Link>
                <Link href="/signup" className="text-white font-bold py-3 px-6 rounded-full text-center shadow-lg" style={{ background: 'linear-gradient(to right, #ec4899, #f43f5e)' }} onClick={() => setIsMenuOpen(false)}>
                  Join Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-[#fff8f8] py-12 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
          <div className="z-10 order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-[48px] leading-[1.1] font-extrabold tracking-tight mb-4 sm:mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}>
              Connecting Naga City&apos;s Campuses, <span className="bg-[#76f2f8] px-1 sm:px-2 italic">One Match</span> at a Time.
            </h1>
            <p className="text-sm sm:text-base md:text-[18px] leading-[1.6] text-[#554149] mb-6 sm:mb-12 max-w-xl">
              College is about more than just exams and early morning classes - it is about the people you meet along the way. UDate Naga was created to provide a dedicated, casual space for students across Naga City to connect, date, and hang out.
            </p>
            <Link href="/signup" className="bg-[#a1216e] text-white text-base sm:text-lg md:text-[24px] font-bold px-6 sm:px-8 py-3 sm:py-5 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all active:translate-y-0">
              Set up your profile
            </Link>
          </div>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 md:w-64 md:h-64 bg-[#696aae] rounded-full opacity-20 blur-3xl"></div>
            <div className="relative shadow-[4px_4px_0px_0px_#23181d] rounded-2xl md:rounded-[32px] overflow-hidden border-2 md:border-4 border-[#23181d] rotate-2">
              <Image
                className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover"
                alt="A group of diverse, trendy college students in Naga City laughing and sharing street food"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUTdEuD2MeXyirzBN54xInRVdTCkWKAcKTdeD8TG4CfUILBPM6tMsbcDIZEQw8pkQbInxydNBI_BmPDnIjqUsPXmvrT9J4tc7XnSgosexdU7Yub707BLxseusu1IOfulH2eKQzvLXkpZwo6dZq5QQ4nbWJtAtZluC8U9biU1uSesL0Bt2ptVafEVuEUYBaC7f6ia_6JOMzHaYlV_FxcRRP2e_RhL_qpjM9vq22_J8V2qd_e9YXjNXL-iBjIbIabVQdSvKb933eH-k-"
                width={500}
                height={500}
              />
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Why We Built This Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 md:py-[80px] bg-[#fff0f4]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="sticky top-24 md:top-32">
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-[48px] leading-[1.1] font-extrabold text-[#a1216e] mb-3 md:mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Why We Built This
            </motion.h2>
            <div className="w-20 md:w-24 h-3 md:h-4 bg-[#76f2f8]"></div>
          </div>
          <div className="space-y-4 md:space-y-6">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm sm:text-base md:text-[18px] leading-[1.6] text-[#23181d] leading-relaxed"
            >
              We noticed a gap in the local student experience. While Naga City is a bustling academic hub with thousands of students, it is surprisingly difficult to meet people outside your own campus or college department.
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base md:text-[18px] leading-[1.6] text-[#23181d] leading-relaxed"
            >
              Mainstream dating apps felt too broad and impersonal, often cluttered with profiles that did not share the student lifestyle. We wanted to build something specific - a digital hangout that feels like a natural extension of our local university culture.
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base md:text-[18px] leading-[1.6] text-[#23181d] leading-relaxed"
            >
              UDate Naga is more than an app; it is a bridge between campuses, helping students discover shared interests, mutual friends, and meaningful relationships without the corporate sterility of traditional dating platforms.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* What Makes Us Different? Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 md:py-[80px] bg-[#fff8f8]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-[48px] inline-block relative leading-[1.1] font-extrabold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.01em' }}>
            What Makes Us Different?
            <div className="absolute -bottom-2 left-0 w-full h-2 md:h-3 bg-[#e1dfff] opacity-50 -z-10"></div>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: 'celebration', title: 'Built for Fun, Built for Us', desc: 'A casual, laid-back space where students can be their authentic selves without the pressure.' },
            { icon: 'bolt', title: 'Keep It Casual, Simple', desc: 'Hassle-free sign up designed around your university email, keeping it exclusive and safe.' },
            { icon: 'location_on', title: "Naga's Digital Hangout", desc: 'Dive deep into the local student scene with features tailored to Naga City unique culture.' },
            { icon: 'groups', title: 'More Than Just Dating', desc: 'Network, find friends, or discover local campus events. It is about the full social experience.' }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-[#e1dfff] text-[#3e4081] p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-[#23181d] shadow-[4px_4px_0px_0px_#23181d] flex flex-col gap-2 md:gap-4 ${index % 2 === 1 ? 'lg:translate-y-8' : ''}`}
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#76f2f8] flex items-center justify-center rounded-lg md:rounded-xl border-2 border-[#23181d]">
                <span className="material-symbols-outlined text-[#23181d] text-lg md:text-xl">{card.icon}</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-[24px] leading-[1.3] font-bold text-[#23181d]">{card.title}</h3>
              <p className="text-xs sm:text-sm md:text-[16px] leading-[1.5]">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer / Join the Crowd */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full rounded-t-2xl md:rounded-t-[32px] mt-12 md:mt-20 bg-[#76f2f8] border-t-4 border-zinc-900"
      >
        <div className="flex flex-col items-center text-center py-10 md:py-16 px-4 sm:px-8 w-full max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-[48px] leading-[1.1] font-extrabold mb-4 md:mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Join the Crowd
          </h2>
          <p className="text-sm sm:text-base md:text-[18px] leading-[1.6] text-[#23181d] max-w-xl md:max-w-2xl mb-6 sm:mb-10">
            UDate Naga thrives on community respect and positive vibes. Ready to see who is on the other side of campus?
          </p>
          <Link href="/signup" className="bg-[#a1216e] text-white text-base sm:text-lg md:text-[24px] font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all mb-10 md:mb-16">
            Get Started
          </Link>
          <div className="text-xl sm:text-2xl md:text-3xl font-black text-zinc-900 mb-6 sm:mb-8 italic" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>UDate Naga</div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-10 font-medium text-xs sm:text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <Link href="/legal" className="text-[#23181d]/80 hover:text-[#23181d] hover:underline transition-all">Privacy Policy</Link>
            <Link href="/legal" className="text-[#23181d]/80 hover:text-[#23181d] hover:underline transition-all">Terms of Service</Link>
            <a className="text-[#23181d]/80 hover:text-[#23181d] hover:underline transition-all" href="#">Campus Safety</a>
            <a className="text-[#23181d]/80 hover:text-[#23181d] hover:underline transition-all" href="#">Contact Us</a>
          </div>
          <div className="w-full h-px bg-[#23181d]/10 mb-6 sm:mb-8"></div>
          <p className="font-medium text-xs sm:text-sm text-[#23181d]/60" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            © 2026 UDate Naga
          </p>
        </div>
      </motion.footer>
    </div>
  );
}