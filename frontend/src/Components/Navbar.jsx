import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md p-4 fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-0.5 flex justify-around items-center">
        <div className="text-2xl font-bold text-indigo-600">
          <Link to="/">ShopSmart</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-indigo-600 transition">HOME</Link></li>
          <li><Link to="/products" className="hover:text-indigo-600 transition">PRODUCTS</Link></li>
          <li><Link to="/about" className="hover:text-indigo-600 transition">ABOUT</Link></li>
          <li><Link to="/contact" className="hover:text-indigo-600 transition">CONTACT</Link></li>
          <li><Link to="/signIn" className="hover:text-indigo-600 transition">SIGN IN</Link></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 px-4 text-gray-700 font-medium">
          <li><Link to="/" onClick={toggleMenu}>HOME</Link></li>
          <li><Link to="/products" onClick={toggleMenu}>PRODUCTS</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>ABOUT</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>CONTACT</Link></li>
          <li><Link to="/signIn" onClick={toggleMenu}>SIGN IN</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
