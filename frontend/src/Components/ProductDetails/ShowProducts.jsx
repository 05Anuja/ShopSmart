import React, { useContext } from "react";
import { CreateProducts } from "./CreateProduct";
import { Link } from "react-router-dom";
import StarRating from "../StarRating";

const ShowProduct = () => {
  const { product, loading, error } = useContext(CreateProducts);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-indigo-600 font-semibold text-xl">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 font-semibold text-xl">
        Error: {error}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Product not found.
      </div>
    );
  }

  return (
    <section className="min-h-screen px-6 py-24 bg-gradient-to-br from-white to-indigo-50">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row gap-8 p-6 md:p-10">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-sm h-80 object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              {product.title}
            </h1>
            <p className="text-indigo-600 text-xl font-semibold mb-4">
              ₹{product.price}
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              {product.description}
            </p>
            <p className="text-sm text-gray-500 mb-1">
              Category:{" "}
              <span className="capitalize font-medium">{product.category}</span>
            </p>
            <div className="text-indigo-600 font-bold mb-2 mt-3">
              <StarRating rating={product.rating.rate} />
            </div>
          </div>

          <div className="mt-6">
            <Link
              to="/"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-6 py-2 rounded-full shadow transition duration-300"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center content-center">
        <Link
          to="/products"
          className="inline-block px-6 py-3 mt-8 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
        >
          Return to Products
        </Link>
      </div>
    </section>
  );
};

export default ShowProduct;
