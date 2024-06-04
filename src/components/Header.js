import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-700">Digital Innovate Inc</div>
        <nav className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-700">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-700">Services</a>
          <a href="#" className="text-gray-600 hover:text-blue-700">About Us</a>
          <a href="#" className="text-gray-600 hover:text-blue-700">Case Studies</a>
          <a href="#" className="text-gray-600 hover:text-blue-700">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
