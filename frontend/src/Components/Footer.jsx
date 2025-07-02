import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-4 ">
      <div className="max-w-6xl mx-auto py-1 px-4 flex flex-col md:flex-col justify-center items-center text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ShopSmart. All rights reserved.
        </p>
        <p className="text-sm mt-2 md:mt-0">
          Developed by <span className="font-bold">Anuja Pawar</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
