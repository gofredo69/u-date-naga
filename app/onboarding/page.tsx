'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const universities = [
  'Ateneo de Naga University (AdNU)',
  'University of Nueva Caceres (UNC)',
  'Universidad de Santa Isabel (USI)',
  'Bicol State College of Applied Sciences and Technology (BISCAST)',
  'Naga College Foundation (NCF)',
  'Mariners\' Polytechnic Colleges (MPC)',
  'STI College (STI)',
  'AMA Computer College (AMACC)',
  'Other'
];

const courses = [
  'Accountancy',
  'Business Administration',
  'Computer Science',
  'Education',
  'Engineering',
  'Hotel & Restaurant Management',
  'Information Technology',
  'Nursing',
  'Psychology',
  'Tourism',
  'Other'
];

const interestTags = [
  'Anime', 'Baking', 'Binge-Watching', 'Board Games', 'Cafe Hopping', 'Campus Events',
  'Cheerdance', 'Concerts & Gigs', 'Content Creation', 'Cosplay', 'DIY Projects',
  'Esports & Gaming', 'Food Trips', 'Gym & Fitness', 'Hackathons', 'Hiking & Outdoors',
  'Late Night Drives', 'Live Music', 'Memes', 'Museum Dates', 'Photography', 'Podcasts',
  'Reading', 'Sports', 'Street Food', 'Student Orgs', 'Study Dates', 'Thrifting',
  'Traveling', 'Volunteering'
];

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [ageError, setAgeError] = useState(false);
  const [customUniversity, setCustomUniversity] = useState('');
  const [formData, setFormData] = useState({
    displayName: '',
    dateOfBirth: '',
    genderIdentity: '',
    wantToMeet: '',
    university: '',
    course: '',
    yearLevel: '',
    profilePhotos: [] as string[], bio: '',
    interests: [] as string[]
  });

  const totalSteps = 4;

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'dateOfBirth' && !isAtLeast18(value)) {
      setAgeError(true);
    } else {
      setAgeError(false);
    }
  };

  const isAtLeast18 = (dateStr: string) => {
    if (!dateStr) return true;
    const birthDate = new Date(dateStr);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 18;
  };

  const toggleInterest = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(tag)
        ? prev.interests.filter(t => t !== tag)
        : [...prev.interests, tag]
    }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProceed = () => {
    if (step === 1) {
      return formData.displayName && formData.dateOfBirth && formData.genderIdentity && formData.wantToMeet && !ageError;
    }
    if (step === 2) {
      const uniValid = formData.university === 'Other' ? customUniversity.trim() : formData.university;
      return uniValid && formData.course && formData.yearLevel;
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="p-4 border-b">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/U-date_logo.png"
            alt="UDate Naga logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-bold" style={{ color: '#D53F8C' }}>UDate Naga</span>
        </Link>
      </header>

      <div className="flex-1 flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= s ? 'text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                  style={{ background: step >= s ? '#D53F8C' : '' }}
                >
                  {s}
                </div>
                {s < 4 && (
                  <div
                    className={`w-12 h-1 ${
                      step > s ? '' : 'bg-gray-200'
                    }`}
                    style={{ background: step > s ? '#D53F8C' : '' }}
                  />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h1 className="text-2xl font-bold text-gray-900">Core Identity</h1>
                <p className="text-gray-500 text-sm">Required fields marked with *</p>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Display Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.displayName}
                    onChange={(e) => updateFormData('displayName', e.target.value)}
                    placeholder="Your nickname or first name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D53F8C] text-black"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D53F8C] text-black"
                  />
                  {ageError && (
                    <p className="text-sm text-red-600">
                      You must be at least 18 years old to use this site. See our{' '}
                      <Link href="/legal" className="underline font-semibold">Terms & Conditions</Link>.
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Gender Identity <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.genderIdentity}
                    onChange={(e) => updateFormData('genderIdentity', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D53F8C] text-black"
                  >
                    <option value="">Select your gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-binary">Non-binary</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Who you want to meet <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.wantToMeet}
                    onChange={(e) => updateFormData('wantToMeet', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D53F8C] text-black"
                  >
                    <option value="">Select preference</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Everyone">Everyone</option>
                  </select>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h1 className="text-2xl font-bold text-gray-900">Academic Profile</h1>
                <p className="text-gray-500 text-sm">Required fields marked with *</p>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    University/College <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.university}
                    onChange={(e) => updateFormData('university', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D53F8C] text-black"
                  >
                    <option value="">Select your university/college</option>
                    {universities.map((uni) => (
                      <option key={uni} value={uni}>{uni}</option>
                    ))}
                  </select>
                  {formData.university === 'Other' && (
                    <input
                      type="text"
                      value={customUniversity}
                      onChange={(e) => setCustomUniversity(e.target.value)}
                      placeholder="Enter your school name"
                      className="w-full p-3 border border-gray-300 rounded--lg focus:outline-none focus:border-[#D53F8C] text-black"
                    />
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Course/Major <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => updateFormData('course', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D53F8C] text-black"
                  >
                    <option value="">Select your course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>{course}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Year Level <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.yearLevel}
                    onChange={(e) => updateFormData('yearLevel', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D53F8C] text-black"
                  >
                    <option value="">Select year level</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="5th Year">5th Year</option>
</select>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
<h1 className="text-2xl font-bold text-gray-900">Visuals & Media</h1>
                <p className="text-gray-500 text-sm">Add at least 1 photo</p>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Profile Photos
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="aspect-square bg-gray-100 rounded-1g flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
                      >
                        <span className="text-3xl text-gray-400">+</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">Add up to 3 photos</p>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h1 className="text-2xl font-bold text-gray-900">Personality & Interests</h1>
                <p className="text-gray-500 text-sm">Tell others about yourself</p>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Short Bio
                  </label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => updateFormData('bio', e.target.value)}
                    placeholder="Tell us about yourself (150-500 characters)"
                    maxLength={500}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D53F8C] h-32 resize-none text-black"
                  />
                  <p className="text-xs text-gray-500">{formData.bio.length}/500 characters</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Interest Tags (select 3-10)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {interestTags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleInterest(tag)}
                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                          formData.interests.includes(tag)
                            ? 'text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        style={{
                          background: formData.interests.includes(tag) ? '#D53F8C' : ''
                        }}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">{formData.interests.length} selected</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50"
              >
                Back
              </button>
            )}
            {step < totalSteps ? (
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className={`flex-1 py-3 rounded-lg text-white font-semibold ${
                  canProceed() ? '' : 'opacity-50 cursor-not-allowed'
                }`}
                style={{ background: '#D53F8C' }}
              >
                Continue
              </button>
            ) : (
              <button
                className="flex-1 py-3 rounded-lg text-white font-semibold"
                style={{ background: '#D53F8C' }}
              >
                Complete Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}