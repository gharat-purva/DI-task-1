import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold">Digital Innovate Inc</h3>
            <p className="mt-4">© 2023 InnovationMarketSolution. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="font-bold">Get in Touch</h4>
            <div className="mt-4">
              <input className="w-full px-3 py-2 border rounded mb-4" type="text" placeholder="Name" />
              <input className="w-full px-3 py-2 border rounded mb-4" type="email" placeholder="Email" />
              <textarea className="w-full px-3 py-2 border rounded" placeholder="Your Message" rows="4"></textarea>
              <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 hover:bg-blue-700">Send</button>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="font-bold">Social Media</h4>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-white">Instagram</a>
              <a href="#" className="text-blue-500 hover:text-white">Facebook</a>
              <a href="#" className="text-blue-500 hover:text-white">Twitter</a>
              <a href="#" className="text-blue-500 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
