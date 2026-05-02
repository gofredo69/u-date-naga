'use client';

import { useState } from 'react';
import { SharedLayout } from '../../components/SharedLayout';

const interests = ['Photography', 'Travel', 'Coffee', 'Music', 'Movies', 'Fitness', 'Cooking', 'Gaming', 'Art', 'Books', 'Nature', 'Dancing'];

export default function ProfilePage() {
  const [displayName, setDisplayName] = useState('Jessica');
  const [selectedInterests, setSelectedInterests] = useState(['Photography', 'Travel', 'Coffee']);
  const [pictures] = useState(['/assets/images/pic1.jpg', '/assets/images/pic2.jpg', '/assets/images/pic3.jpg', '/assets/images/pic4.jpg', '/assets/images/pic5.jpg']);

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else if (selectedInterests.length < 6) {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  return (
    <SharedLayout>
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Ramabhadra', sans-serif", color: '#C13D88' }}>Edit Profile</h1>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
          <h2 className="text-lg font-semibold mb-3">Display Name</h2>
          <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#C13D88]" />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
          <h2 className="text-lg font-semibold mb-3">Pictures</h2>
          <div className="grid grid-cols-3 gap-2">
            {pictures.map((pic, idx) => (
              <div key={idx} className="relative aspect-square rounded-lg overflow-hidden group">
                <img src={pic} alt={`Picture ${idx + 1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-white text-sm px-2 py-1 bg-[#C13D88] rounded">Change</button>
                </div>
                {idx === 0 && <span className="absolute top-1 left-1 bg-[#C13D88] text-white text-xs px-2 py-0.5 rounded">Main</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
          <h2 className="text-lg font-semibold mb-3">Interests</h2>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <button key={interest} onClick={() => toggleInterest(interest)} className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${selectedInterests.includes(interest) ? 'bg-[#C13D88] text-white border-[#C13D88]' : 'border-gray-200 text-gray-600 hover:border-[#C13D88]'}`}>
                {interest}
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-2">{selectedInterests.length}/6 selected</p>
        </div>

        <button className="w-full py-3 bg-[#C13D88] text-white rounded-lg hover:bg-[#a1326e] transition-colors font-semibold">Save Changes</button>
      </div>
    </SharedLayout>
  );
}