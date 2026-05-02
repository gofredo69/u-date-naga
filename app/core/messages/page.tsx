'use client';

import { useState } from 'react';
import { SharedLayout } from '../../components/SharedLayout';

const matches = [
  { id: 1, name: 'Sarah', lastMessage: 'Hey! How are you?', time: '2m ago', image: '/assets/images/pic1.jpg', online: true },
  { id: 2, name: 'Maya', lastMessage: 'Nice to meet you too!', time: '1h ago', image: '/assets/images/pic2.jpg', online: false },
  { id: 3, name: 'Nina', lastMessage: 'Would love to grab coffee!', time: '3h ago', image: '/assets/images/pic3.jpg', online: true },
  { id: 4, name: 'Luna', lastMessage: 'That sounds fun 😊', time: '1d ago', image: '/assets/images/pic4.jpg', online: false },
];

const sampleMessages = [
  { id: 1, sender: 'them', text: 'Hey! Nice to match with you 😊', time: '10:30 AM' },
  { id: 2, sender: 'me', text: 'Hi Sarah! Nice to meet you too', time: '10:32 AM' },
  { id: 3, sender: 'them', text: 'So what do you do for fun?', time: '10:33 AM' },
  { id: 4, sender: 'me', text: 'I love hiking and trying new restaurants. You?', time: '10:35 AM' },
];

export default function MessagesPage() {
  const [selectedMatch, setSelectedMatch] = useState<typeof matches[0] | null>(matches[0]);
  const [newMessage, setNewMessage] = useState('');

  return (
    <SharedLayout showBackButton={selectedMatch !== null} onBackClick={() => setSelectedMatch(null)}>
      <div className="flex h-full">
        {/* Messages List */}
        <div className={`${selectedMatch ? 'hidden md:flex' : 'flex'} w-full md:w-80 border-r border-gray-200 flex-col bg-white`}>
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold" style={{ color: '#C13D88', fontFamily: "'Ramabhadra', sans-serif" }}>Messages</h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            {matches.map((match) => (
              <button
                key={match.id}
                onClick={() => setSelectedMatch(match)}
                className={`w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors border-b border-gray-100 ${selectedMatch?.id === match.id ? 'bg-pink-50 border-l-4 border-[#C13D88]' : ''}`}
              >
                <div className="relative">
                  <img src={match.image} alt={match.name} className="w-12 h-12 rounded-full object-cover" />
                  {match.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />}
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold">{match.name}</p>
                  <p className="text-sm text-gray-500 truncate">{match.lastMessage}</p>
                </div>
                <span className="text-xs text-gray-400">{match.time}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area - Desktop (always visible when selected) */}
        {selectedMatch ? (
          <div className="hidden md:flex flex-1 flex-col">
            <div className="p-3 border-b border-gray-200 flex items-center gap-3 bg-white">
              <img src={selectedMatch.image} alt={selectedMatch.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h3 className="font-bold">{selectedMatch.name}</h3>
                <p className="text-sm text-green-500">Online</p>
              </div>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-100">
              {sampleMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] px-4 py-2 rounded-2xl ${msg.sender === 'me' ? 'bg-[#C13D88] text-white rounded-br-none' : 'bg-black text-white rounded-bl-none'}`}>
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-gray-200 bg-white">
              <form onSubmit={(e) => { e.preventDefault(); setNewMessage(''); }} className="flex gap-2">
                <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type a message..." className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#C13D88] bg-black text-white placeholder-gray-400" />
                <button type="submit" className="w-10 h-10 rounded-full bg-[#C13D88] text-white flex items-center justify-center hover:bg-[#a1326e] transition-colors">➤</button>
              </form>
            </div>
          </div>
        ) : (
          <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50">
            <p className="text-gray-400">Select a conversation to start messaging</p>
          </div>
        )}

        {/* Chat Area - Mobile (visible when chat selected) */}
        {selectedMatch ? (
          <div className="flex md:hidden flex-col w-full h-full">
            <div className="p-3 border-b border-gray-200 flex items-center gap-3 bg-white flex-shrink-0">
              <img src={selectedMatch.image} alt={selectedMatch.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h3 className="font-bold">{selectedMatch.name}</h3>
                <p className="text-sm text-green-500">Online</p>
              </div>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-100">
              {sampleMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-4 py-2 rounded-2xl ${msg.sender === 'me' ? 'bg-[#C13D88] text-white rounded-br-none' : 'bg-black text-white rounded-bl-none'}`}>
                    <p className="text-base">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-gray-200 bg-white flex-shrink-0">
              <form onSubmit={(e) => { e.preventDefault(); setNewMessage(''); }} className="flex gap-2">
                <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type a message..." className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#C13D88] bg-black text-white placeholder-gray-400" />
                <button type="submit" className="w-10 h-10 rounded-full bg-[#C13D88] text-white flex items-center justify-center hover:bg-[#a1326e] transition-colors">➤</button>
              </form>
            </div>
          </div>
        ) : (
          <div className="flex md:hidden flex-1 items-center justify-center bg-gray-50 p-4">
            <p className="text-gray-400 text-center">Select a conversation to start messaging</p>
          </div>
        )}
      </div>
    </SharedLayout>
  );
}