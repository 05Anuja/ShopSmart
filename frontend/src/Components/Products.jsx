import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const api = "https://fakestoreapi.com/products/";
    fetch(api)
      .then((res) => res.json())
      .then((resData) => {
        setProducts(resData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const cartHandler = () => {
    alert("Product has been added to Cart")
  }

  // Shows when fetching api data
  if (loading) {
    return (
      <div className="min-h-screen flex items-center text-indigo-600 justify-center text-2xl font-extrabold">
        Loading...
      </div>
    );
  }

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-indigo-100 to-white py-20 px-4">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-10">
          Our Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mb-4 mx-auto"
              />
              <h2 className="text-sm font-semibold text-gray-800 mb-2 truncate">
                {product.title}
              </h2>
              <p className="text-indigo-600 font-bold mb-2">
                ₹ {product.price}
              </p>
              <div className="flex justify-between gap-2 mt-auto">
                <Link
                  to="/products"
                  className="bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 px-3 py-1 rounded"
                  onClick={cartHandler}
                >
                  Add to Cart
                </Link>
                <Link
                  to="/"
                  className="bg-indigo-600 hover:bg-indigo-700 text-sm text-white px-3 py-1 rounded"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
