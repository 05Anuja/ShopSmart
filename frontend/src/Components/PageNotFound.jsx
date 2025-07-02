import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-indigo-600">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
          Oops! Page not found
        </h2>
        <p className="text-gray-600 mt-2 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
        >
          Go back home
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
