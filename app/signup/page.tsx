'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function SignupPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [termsAccepted, setTermsAccepted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('Please accept the Terms & Conditions and Privacy Policy');
      return;
    }
  };

  const handleGoogleSignup = () => {
    // Google signup logic here - only fires if checkbox is checked
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden font-sans selection:bg-[#D53F8C] selection:text-white" style={{ background: '#fffdd0' }}>
       
      <header className="absolute top-0 left-0 w-full p-4 md:p-6 z-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center md:justify-start w-full">
          <Link href="/" className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
            <Image
              src="/assets/images/U-date_logo.png"
              alt="UDate Naga logo"
              width={80}
              height={80}
              className="md:w-10 md:h-10 object-contain"
            />
            <span className="text-3xl md:text-2xl tracking-tight" style={{ color: '#D53F8C', fontFamily: "'Ramabhadra', sans-serif" }}><span style={{ fontWeight: 700 }}>UDate</span> Naga</span>
          </Link>
        </motion.div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-10 w-full max-w-7xl mx-auto mt-36 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10 max-w-2xl mx-auto mt-5 md:mt-0">
          
          <h1 className="text-4xl md:text-3xl font-bold mb-4 tracking-tight mt-5" style={{ color: '#1a1a2e' }}>
            Create Account
          </h1>
          <p className="text-base font-medium max-w-xl mx-auto leading-relaxed" style={{ color: '#1a1a2e', fontFamily: "'Ramabhadra', sans-serif" }}>
            Join <span style={{ fontWeight: 700 }}>UDate</span> Naga and connect with peers from your campus and explore other
            universities in Naga City.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md bg-white rounded-[20px] p-6 sm:p-8 relative z-10 mx-4 pb-8"
          style={{
            boxShadow: `
              20px 20px 60px #d1d1d1,
              -20px -20px 60px #ffffff,
              inset 0 0 0 1px rgba(255,255,255,0.8)
            `
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold" style={{ color: '#151717' }} htmlFor="email">
                Email
              </label>
              <div className="flex items-center rounded-[10px] transition-all duration-200" style={{ border: '1.5px solid #ecedec', paddingLeft: '10px' }}>
                <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" fill="#9ca3af" />
                </svg>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-[10px] border-none py-3 px-3 text-gray-900 placeholder-gray-400 focus:outline-none"
                  style={{ background: 'transparent' }}
                  placeholder="Enter your Email"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold" style={{ color: '#151717' }} htmlFor="password">
                Password
              </label>
              <div className="flex items-center rounded-[10px] transition-all duration-200" style={{ border: '1.5px solid #ecedec', paddingLeft: '10px' }}>
                <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 10 0v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3z" fill="#9ca3af" />
                </svg>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-[10px] border-none py-3 px-3 text-gray-900 placeholder-gray-400 focus:outline-none"
                  style={{ background: 'transparent' }}
                  placeholder="Enter your Password"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold" style={{ color: '#151717' }} htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className="flex items-center rounded-[10px] transition-all duration-200" style={{ border: '1.5px solid #ecedec', paddingLeft: '10px' }}>
                <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 10 0v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3z" fill="#9ca3af" />
                </svg>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-[10px] border-none py-3 px-3 text-gray-900 placeholder-gray-400 focus:outline-none"
                  style={{ background: 'transparent' }}
                  placeholder="Confirm your Password"
                  required
                />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={!termsAccepted}
              className={`w-full rounded-[20px] text-white font-bold py-3.5 px-6 cursor-pointer mt-2 ${
                !termsAccepted ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              style={{ background: '#C13D88', border: 'none' }}
              whileHover={termsAccepted ? { background: '#111111' } : {}}
              whileTap={termsAccepted ? { scale: 0.95 } : {}}
              transition={{ duration: 0.2 }}
            >
              Sign Up
            </motion.button>

            <motion.button
              type="button"
              onClick={handleGoogleSignup}
              disabled={!termsAccepted}
              className={`w-full flex items-center justify-center gap-3 rounded-[8px] py-3 px-6 cursor-pointer transition-all ${
                !termsAccepted ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              style={{
                border: '1px solid rgba(0, 0, 0, 0.25)',
                background: '#fff',
                color: '#41403f',
                fontWeight: '700',
                fontSize: '0.875rem'
              }}
              whileHover={termsAccepted ? { scale: 1.02 } : {}}
              whileTap={termsAccepted ? { scale: 0.98 } : {}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" width="24" height="24">
                <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" />
                <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" />
                <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" />
                <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
              </svg>
              Continue with Google
            </motion.button>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="termsAccept"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="w-4 h-4 mt-0.5 accent-[#D53F8C]"
              />
              <label htmlFor="termsAccept" className="text-xs text-gray-600">
                I accept the{' '}
                <Link href="/legal" className="text-[#D53F8C] hover:underline">
                  Terms & Conditions
                </Link>
                {' '}and{' '}
                <Link href="/legal" className="text-[#D53F8C] hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <p className="text-center text-sm" style={{ color: '#151717', margin: '5px 0' }}>
              Already have an account?{' '}
              <Link href="/login" style={{ color: '#2d79f3', fontWeight: 500 }}>
                Log in
              </Link>
            </p>
          </form>
        </motion.div>
      </main>

      <footer className="absolute bottom-0 w-full py-4 sm:py-6 text-center z-10">
        <p className="text-xs sm:text-sm font-medium" style={{ color: '#1a1a2e', fontFamily: "'Ramabhadra', sans-serif" }}>
          © {new Date().getFullYear()} <span style={{ fontWeight: 700 }}>UDate</span> Naga. Connecting campuses.
        </p>
      </footer>
    </div>
  );
}