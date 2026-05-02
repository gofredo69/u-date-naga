import React from 'react';
import { RegistrationCard } from './components/RegistrationCard';
export function App() {
  return (
    <div className="min-h-screen w-full bg-brand-periwinkle flex items-center justify-center p-4 sm:p-8 selection:bg-brand-aqua/30 selection:text-brand-carbon">
      <RegistrationCard />
    </div>);

}