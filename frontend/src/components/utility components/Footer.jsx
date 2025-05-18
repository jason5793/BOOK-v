import React from 'react';

const Footer = () => {
  return (
    <footer className="">
      <p className="text-white text-m text-center bg-black">&copy; {new Date().getFullYear()} Book Store. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
