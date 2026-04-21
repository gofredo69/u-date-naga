import React from 'react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/U-date_logo.png"
              alt="U-date logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="font-bold text-xl text-white">U-date</span>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium text-gray-400">
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

          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} U-date. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}