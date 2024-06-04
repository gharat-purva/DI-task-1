import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Empowering Your Digital Journey with Expertise and Innovation</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg text-gray-700">
            <h3 className="text-xl font-bold">Our Journey to Excellence</h3>
            <p className="mt-2">Explore the milestones that define our legacy in digital marketing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-gray-700">
            <h3 className="text-xl font-bold">Driven by Purpose</h3>
            <p className="mt-2">Committed to delivering innovative marketing solutions for every business.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-gray-700">
            <h3 className="text-xl font-bold">Envisioning a Digital Future</h3>
            <p className="mt-2">Creating a world where digital marketing unlocks endless possibilities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-gray-700">
            <h3 className="text-xl font-bold">Values that Guide Us</h3>
            <p className="mt-2">Integrity, innovation, and impact are at the heart of everything we do.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-gray-700">
            <h3 className="text-xl font-bold">Meet Our Experts</h3>
            <p className="mt-2">A team of passionate professionals dedicated to your digital success.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-gray-700">
            <h3 className="text-xl font-bold">Milestones of Success</h3>
            <p className="mt-2">Celebrating the achievements that fuel our continuous growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
