import React from 'react';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center sm:text-left">
        About Us
      </h1>

      <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
        Welcome to <span className="font-semibold text-primary">Intelli Grid</span> — your trusted partner for hassle-free, reliable home services at your fingertips.
        Whether it's plumbing, electrical work, cleaning, or appliance repair, we're here to make home maintenance easy, efficient, and stress-free.
      </p>

      <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
        Founded in 2025, Intelli Grid was built on the idea that finding trusted home professionals should be as easy as tapping a button. No more endless calls or uncertainty —
        our vetted professionals are just a few clicks away. We've created a seamless platform that connects homeowners with skilled service providers they can count on.
      </p>

      <div className="mt-8 sm:mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          To simplify the way people take care of their homes by offering reliable, on-demand services through a smart, user-friendly platform.
        </p>
      </div>

      <div className="mt-8 sm:mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-2 leading-relaxed">
          <li>Verified and experienced service professionals</li>
          <li>Easy booking with real-time tracking</li>
          <li>Transparent pricing and secure payments</li>
          <li>Dedicated customer support</li>
        </ul>
      </div>

      <div className="mt-8 sm:mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Meet the Team</h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          We're a team of tech enthusiasts, service industry veterans, and customer support experts united by one goal — making home services simple and trustworthy.
        </p>
        <div className="mt-4 space-y-1">
          <p className="text-base sm:text-lg text-gray-700"><b>Team Members:</b></p>
          <p className="text-base sm:text-lg text-red-500">1. Adarsh Patel</p>
          <p className="text-base sm:text-lg text-red-500">2. Aryan Jaiswal</p>
          <p className="text-base sm:text-lg text-red-500">3. Mahi Gupta</p>
          <p className="text-base sm:text-lg text-red-500">4. Parth Rai</p>
        </div>
      </div>

      <div className="mt-8 sm:mt-10">
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Have questions or want to work with us?{' '}
          <a href="/" className="text-blue-600 underline">Get in touch</a>. We're here to help.
        </p>
      </div>
    </div>
  );
};

export default About;