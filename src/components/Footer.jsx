import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <div className="text-lg font-bold">
            Project FEx.
          <div className="flex items-center mt-4">
            <a href="#" className="text-white hover:text-gray-400 mx-4">
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-gray-400 mx-4">
              <FaGithub className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-gray-400 mx-4">
              <FaTwitter className="h-5 w-5" />
            </a>
          </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400 mb-4">
            123 Main Street, Anytown, CA 12345<br />
            +1 (555) 555-5555<br />
            contact@Project-fex.live
          </p>
        </div>

        <div className="w-full md:w-1/3">
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="list-unstyled text-gray-400 mb-4">
            <li>
              <a href="#" className="text-white hover:text-gray-400">About Us</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">Services</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">Blog</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div>

        <p className="text-center text-white text-xs mt-4">&copy; Project FEx. - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
