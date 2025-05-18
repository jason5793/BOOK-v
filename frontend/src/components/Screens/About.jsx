import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to <span className="font-semibold text-blue-600">BookVerse</span> — your ultimate destination for timeless classics,
          bestsellers, and hidden gems across genres. Whether you're a curious reader,
          a passionate collector, or someone looking for their next favorite book, we’ve got you covered.
        </p>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          At BookVerse, we believe in the power of stories to educate, inspire, and entertain. Our mission is to bring books closer
          to people of all ages through a curated, user-friendly platform with competitive pricing and reliable service.
        </p>
        <p className="mt-6 text-md text-gray-500">
          Thank you for choosing us — happy reading!
        </p>
      </div>
    </div>
  );
};

export default About;
