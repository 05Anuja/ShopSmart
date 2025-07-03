import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-40">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">
          About ShopSmart
        </h1>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          Welcome to <span className="font-semibold">ShopSmart</span> — your
          one-stop destination for quality fashion, electronics, and lifestyle
          essentials. We bring you a seamless online shopping experience powered
          by React and real-time product data from FakeStoreAPI.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Whether you're looking for trendy outfits, affordable gadgets, or the
          perfect accessories, we've got something for everyone.
        </p>
      </div>
    </section>
  );
};

export default About;
