// import React from "react";

// const Home = () => {
//   return (
//     <>
//       <div className="text-white bg-black h-screen w-screen flex flex-col justify-center items-center text-2xl">
//         <h1 className="text-4xl m-2">
//           Welcome to ShopSmart
//         </h1>
//         <p>
//           Discover Products That Fit Your Life – All in One Place
//         </p>
//       </div>
//     </>
//   );
// };

// export default Home;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-4xl font-extrabold text-indigo-700 mb-4">
        Welcome to ShopSmart
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-6">
        Discover stylish clothing, sparkling jewelry, and powerful electronics -
        all in one place. Experience hassle-free shopping with top-rated
        products.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/products">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition">
            Explore Products
          </button>
        </Link>
        <Link to="/about">
          <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-50 transition">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
