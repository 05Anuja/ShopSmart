import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-4 py-32">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl px-8 py-12">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-2">Contact Us</h2>
        <p className="text-center text-gray-500 leading-relaxed mb-10">
          Got a question, feedback or just want to say hello? We’d love to hear from you!
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold shadow-md transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-sm text-gray-600">
          <p className="mb-1">📧 support@shopsmart.com</p>
          <p>📞 +91 98765 43210</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
