'use client';
import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>);

}