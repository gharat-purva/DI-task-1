import React from 'react';

const CaseStudies = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-700">Explore Our Trailblazing Success Stories</h2>
        <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-700">Social Media Success for ABC Restaurant</h3>
          <p className="mt-2 text-gray-600">Industry: Food & Beverage</p>
          <p className="mt-2 text-gray-600">Challenge: Limited social media presence and engagement.</p>
          <p className="mt-2 text-gray-600">Solution: We crafted innovative social media strategies including content calendars, regular posts, and paid advertising. We also engaged the community through contests and user-generated content.</p>
          <ul className="mt-4 text-left text-gray-600 list-disc list-inside">
            <li>Facebook followers increased by 20% in 3 months.</li>
            <li>Instagram engagement rate doubled.</li>
            <li>A 30% boost in foot traffic to the restaurant.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
