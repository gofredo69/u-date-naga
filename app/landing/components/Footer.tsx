import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-8 sm:py-12" style={{ backgroundColor: '#36454F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/assets/images/U-date_logo.png"
              alt="UDate Naga logo"
              width={48}
              height={48}
              className="sm:w-16 sm:h-16 object-contain"
            />
            <span className="text-xl sm:text-2xl md:text-3xl tracking-tight" style={{ fontFamily: "'Ramabhadra', sans-serif", color: 'white' }}><span style={{ fontWeight: 700 }}>UDate</span> <span style={{ fontWeight: 700 }}>Naga</span></span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-gray-400">
            <Link href="/legal" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <div className="text-xs sm:text-sm text-gray-500" style={{ fontFamily: "'Ramabhadra', sans-serif" }}>
            © {new Date().getFullYear()} <span style={{ fontWeight: 700 }}>UDate</span> Naga. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}