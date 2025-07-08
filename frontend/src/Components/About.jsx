import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-indigo-50 to-white px-6 py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-8">
          About ShopSmart
        </h1>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
          Welcome to <span className="font-semibold text-indigo-700">ShopSmart</span> — your one-stop destination for quality fashion, electronics, and lifestyle essentials.
        </p>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
          At <span className="font-semibold text-indigo-700">ShopSmart</span>, we believe shopping should be simple, enjoyable, and affordable. That’s why we offer a curated collection of quality products — from trendy clothing to must-have electronics — all in one place. Whether you're upgrading your wardrobe or searching for the perfect gift, we've got you covered.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-indigo-500 mt-10 mb-4">
          Our Mission
        </h2>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          To deliver a smart and seamless shopping experience that blends style, value, and convenience — every time.
        </p>
      </div>
    </section>
  );
};

export default About;
