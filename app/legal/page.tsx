'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
            ← Back to Home
          </Link>
        </div>

        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-6 py-3 font-semibold text-lg transition-colors ${
              activeTab === 'privacy'
                ? 'text-[#D53F8C] border-b-2 border-[#D53F8C]'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-6 py-3 font-semibold text-lg transition-colors ${
              activeTab === 'terms'
                ? 'text-[#D53F8C] border-b-2 border-[#D53F8C]'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Terms & Conditions
          </button>
        </div>

        {activeTab === 'privacy' ? (
          <div className="prose prose-lg max-w-none text-black">
            <p className="text-sm text-gray-500 mb-6">Last Updated: April 30, 2026</p>
            
            <p className="mb-6 text-gray-800">
              UDate Naga (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
              This Privacy Policy outlines how we collect, use, and safeguard your information within the UDate Naga 
              mobile application and website. By using our services, you agree to the practices described below.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">1. Information We Collect</h2>
            <p className="mb-2 text-gray-800">To provide a secure and tailored experience for the Naga City academic community, we collect the following:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Account Data:</strong> Legal name, verified email address (preferably institutional), and phone number.</li>
              <li><strong>Academic Profile:</strong> University/College affiliation, course, year level, and age.</li>
              <li><strong>User Content:</strong> Photos, bio descriptions, and messages sent through our encrypted in-app chat.</li>
              <li><strong>Location Services:</strong> General proximity based on your institution to facilitate local matching.</li>
              <li><strong>Technical Data:</strong> IP address, device type, operating system, and app usage patterns.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">2. How We Use Your Information</h2>
            <p className="mb-2 text-gray-800">We process your data to ensure a functional and safe dating environment:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Matching:</strong> Connecting you with users based on shared academic interests and preferences.</li>
              <li><strong>Security:</strong> Verifying student status to maintain a &quot;students-only&quot; ecosystem and prevent &quot;catfishing.&quot;</li>
              <li><strong>Communication:</strong> Enabling real-time messaging and sending critical account notifications.</li>
              <li><strong>Optimization:</strong> Analyzing usage trends to improve app performance and UI/UX.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">3. Sharing and Disclosure</h2>
            <p className="mb-2 text-gray-800">We do not sell your personal data to third parties. Data is only shared in the following contexts:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Public Profile:</strong> Your name, age, course, and photos are visible to other registered users. Your private contact details (email/phone) are never displayed.</li>
              <li><strong>Safety & Legal:</strong> We may disclose information if required by law or if we believe it is necessary to prevent physical harm or financial loss.</li>
              <li><strong>Service Providers:</strong> Trusted partners (e.g., cloud hosting or SMS verification services) who are contractually bound to protect your data.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">4. Data Retention and Deletion</h2>
            <p className="mb-2 text-gray-800">We retain your information only as long as your account is active.</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Account Deletion:</strong> You can delete your account via the app settings at any time.</li>
              <li><strong>Data Purge:</strong> Upon deletion, your profile is removed from public view immediately. Residual data may remain in our backups for up to 30 days before permanent erasure.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">5. Security Measures</h2>
            <p className="mb-6 text-gray-800">
              We employ industry-standard encryption and security protocols to shield your data. However, 
              please remember that no digital platform is 100% immune to risks. We encourage users to choose 
              strong passwords and avoid sharing sensitive personal information in chats.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">6. Your Rights</h2>
            <p className="mb-2 text-gray-800">As a user, you have the right to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Rectify:</strong> Correct any outdated or inaccurate profile information.</li>
              <li><strong>Withdraw Consent:</strong> Opt-out of optional data tracking (like analytics) via your device settings.</li>
            </ul>
          </div>
        ) : (
          <div className="prose prose-lg max-w-none text-black">
            <p className="text-sm text-gray-500 mb-6">Last Updated: April 30, 2026</p>
            
            <p className="mb-6 text-gray-800">
              Welcome to UDate Naga. By accessing or using our mobile application and services, you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these terms, please do not use our service.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">1. Eligibility & Verification</h2>
            <p className="mb-2 text-gray-800">To maintain a secure and exclusive community for the Naga City academic circle, you must meet the following criteria:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Age:</strong> You must be at least 18 years of age.</li>
              <li><strong>Status:</strong> You must be a currently enrolled student or a member of a recognized Higher Education Institution (HEI) in Naga City.</li>
              <li><strong>Email Requirements:</strong> To access UDate Naga, you must provide a valid and active email address. While we strongly recommend using your official school email (.edu.ph) for faster verification and community trust, standard personal emails are accepted provided they pass our internal security and authenticity checks.</li>
              <li><strong>Account Authenticity:</strong> You may only use an email address that belongs to you. Using "burner" emails or impersonating another student is strictly prohibited.</li>
            </ul>
            <p className="mb-6 text-gray-800">
              <strong>Disclaimer:</strong> UDate Naga is not affiliated with, endorsed by, or a partner of any university or college in Naga City.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">2. Account Registration & Security</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Accuracy:</strong> You agree to provide accurate, current, and complete information during the registration process.</li>
              <li><strong>One Account Policy:</strong> Each user is permitted only one active account. Duplicate profiles will be flagged and removed.</li>
              <li><strong>Confidentiality:</strong> You are responsible for maintaining the security of your login credentials. UDate Naga is not liable for any unauthorized access resulting from your failure to safeguard your account.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">3. User Conduct</h2>
            <p className="mb-2 text-gray-800">UDate Naga is built on mutual respect. You agree not to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Harass or Abuse:</strong> Engage in stalking, bullying, intimidation, or the use of hate speech toward other users.</li>
              <li><strong>Misrepresent:</strong> Use photos that are not of yourself or create a profile for anyone other than yourself.</li>
              <li><strong>Solicit:</strong> Use the platform for commercial purposes, advertising, "sugar dating," or requesting financial assistance.</li>
              <li><strong>Disrupt:</strong> Attempt to bypass our verification systems or interfere with the app's functionality.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">4. Content & Intellectual Property</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Your Content:</strong> You retain ownership of the photos and text you upload. However, you grant UDate Naga a non-exclusive, royalty-free license to host, store, and display this content within the app.</li>
              <li><strong>Prohibited Content:</strong> You may not post explicit, offensive, or infringing material. We reserve the right to remove any content that violates these Terms or local community standards.</li>
              <li><strong>App Ownership:</strong> All design elements, code, and branding are the exclusive property of UDate Naga.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">5. Safety & Interactions</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>Online to Offline:</strong> UDate Naga is a platform for introductions. We do not perform criminal background checks on our users.</li>
              <li><strong>Personal Responsibility:</strong> You are solely responsible for your interactions with other users. We strongly recommend meeting in well-lit, public areas and informing a friend of your location when meeting someone for the first time.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">6. Disclaimers & Limitation of Liability</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li><strong>"As-Is" Service:</strong> The service is provided without warranties of any kind. We do not guarantee that you will find a match or that the app will always be error-free.</li>
              <li><strong>Limitation of Liability:</strong> To the maximum extent permitted by law, UDate Naga and its developers shall not be liable for any damages—physical, emotional, or financial—arising from your use of the app or your interactions with other users.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">7. Termination</h2>
            <p className="mb-2 text-gray-800">We reserve the right to suspend or terminate your account at our sole discretion, without prior notice, if:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
              <li>You violate any part of these Terms.</li>
              <li>Your behavior is deemed harmful to the community.</li>
              <li>Your email address is found to be inactive or fraudulent.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">8. Changes to These Terms</h2>
            <p className="mb-6 text-gray-800">
              We may update these Terms periodically to reflect changes in our service or legal requirements. We will notify you of any material changes via in-app notification. Your continued use of the app after such changes constitutes acceptance of the new Terms.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}