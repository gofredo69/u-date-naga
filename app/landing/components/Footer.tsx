import React from 'react';
import Image from 'next/image';

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
            <span className="font-bold text-xl sm:text-2xl md:text-3xl text-white">UDate Naga</span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <div className="text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} UDate Naga. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}