import React from 'react';

const services = [
  { title: "SEO", description: "Boost your visibility online with our tailored SEO strategies.", icon: "seo-icon" },
  { title: "Email Marketing", description: "Reinvigorate your communication and nurture leads.", icon: "email-marketing-icon" },
  { title: "PPC Advertising", description: "Drive targeted traffic and get immediate results with our PPC campaigns.", icon: "ppc-icon" },
  { title: "Social Media Marketing", description: "Create compelling content and build a loyal community.", icon: "social-media-icon" },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700">Our Diverse Range of Marketing Solutions</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className={`mb-4 ${service.icon}`} />
              <h3 className="text-xl font-bold text-gray-700">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
