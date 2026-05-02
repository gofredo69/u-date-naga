'use client';

import { useState } from 'react';
import { SharedLayout } from '../../components/SharedLayout';

const profiles = [
  { id: 1, name: 'Sarah', age: 26, location: 'Bangkok', job: 'Marketing Manager', image: '/assets/images/pic1.jpg' },
  { id: 2, name: 'Maya', age: 24, location: 'Chiang Mai', job: 'Designer', image: '/assets/images/pic2.jpg' },
  { id: 3, name: 'Nina', age: 27, location: 'Phuket', job: 'Teacher', image: '/assets/images/pic3.jpg' },
  { id: 4, name: 'Luna', age: 25, location: 'Pattaya', job: 'Photographer', image: '/assets/images/pic4.jpg' },
];

export default function DiscoverPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = () => {
    if (currentIndex < profiles.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const currentProfile = profiles[currentIndex];

  return (
    <SharedLayout>
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="relative h-[65vh] max-h-[450px] bg-gray-100">
              <img src={currentProfile.image} alt={currentProfile.name} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Ramabhadra', sans-serif" }}>
                  {currentProfile.name}, {currentProfile.age}
                </h2>
                <p className="text-white/90">{currentProfile.location}</p>
                <p className="text-white/80 text-sm">{currentProfile.job}</p>
              </div>
            </div>
            <div className="flex justify-center gap-8 p-6">
              <button onClick={handleSwipe} className="w-14 h-14 rounded-full border-4 border-red-500 text-red-500 hover:bg-red-50 flex items-center justify-center text-xl transition-colors">✕</button>
              <button onClick={handleSwipe} className="w-14 h-14 rounded-full bg-[#C13D88] text-white hover:bg-[#a1326e] flex items-center justify-center text-xl transition-colors">♥</button>
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {profiles.map((_, idx) => (
              <div key={idx} className={`w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-[#C13D88]' : 'bg-gray-300'}`} />
            ))}
          </div>
        </div>
      </div>
    </SharedLayout>
  );
}