import React from 'react';

const ContactForm = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-400 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
        <form className="mt-10 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg text-gray-700">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input className="w-full px-3 py-2 border rounded" type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 border rounded" type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">Your Message</label>
            <textarea className="w-full px-3 py-2 border rounded" id="message" placeholder="Your Message" rows="4"></textarea>
          </div>
          <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700">Send</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
