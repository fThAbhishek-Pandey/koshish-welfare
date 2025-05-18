import React from "react";
import { Helmet } from "react-helmet-async";
const ColabOrg = () => {
  return (
    <div>
      <div className="w-full px-4 py-12">
        <Helmet>
          <title>Meet Our Collaborating Organization - Koshish</title>
          <meta name="description" content="Learn about our collaboration with Rajkiya Engineering College, Ambedkar Nagar." />
          <meta name="keywords" content="Koshish, Collaboration, Rajkiya Engineering College" />
          <meta name="author" content="Koshish Team" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue10 mb-6">
          Meet Our Collaborating Organization
          </h2>
          <p className="text-md sm:text-xl font-sm text-gray-700 leading-relaxed">
          A heartfelt thanks to our collaborator, Rajkiya Engineering College, Ambedkar Nagar, for their consistent support. Their partnership has played a crucial role in helping KOSHISH reach where it is today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColabOrg;
