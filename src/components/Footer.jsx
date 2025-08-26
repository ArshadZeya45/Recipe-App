import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-gray-300 pt-12 pb-6 mt-16">
      <div className="w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <div className="flex gap-3 items-center">
            <img
              src="/zaika.png"
              alt=""
              className="w-15 h-15 object-cover rounded-full"
            />
            <h1 className="text-2xl font-bold text-white">Zaika 🍴</h1>
          </div>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Zaika is your digital cookbook – discover, cook, and share delicious
            recipes from around the world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/recipes" className="hover:text-yellow-400">
                Recipes
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Categories</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="" className="hover:text-yellow-400">
                Breakfast
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-yellow-400">
                Lunch
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-yellow-400">
                Dinner
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-yellow-400">
                Desserts
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Follow Us</h2>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-yellow-400">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Zaika. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
