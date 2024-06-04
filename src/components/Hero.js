import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold">Transform Your Business with Cutting-Edge Digital Marketing</h1>
            <p className="mt-4 text-lg md:text-xl">Ignite Your Brand's Presence with Our Comprehensive Digital Marketing Solutions.</p>
            <button className="mt-8 bg-white text-blue-600 font-bold py-2 px-4 rounded-full shadow-lg hover:bg-gray-100">Get Started</button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="C:\Users\purva\task1\Team.jpg" alt="Digital Marketing" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
