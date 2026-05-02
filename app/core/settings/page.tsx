'use client';

import { SharedLayout } from '../../components/SharedLayout';

export default function SettingsPage() {
  return (
    <SharedLayout>
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Ramabhadra', sans-serif", color: '#C13D88' }}>Settings</h1>

        <div className="space-y-3">
          <button className="w-full py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-gray-600">
            Deactivate Account
          </button>
          <button className="w-full py-3 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors font-semibold">
            Logout
          </button>
        </div>
      </div>
    </SharedLayout>
  );
}