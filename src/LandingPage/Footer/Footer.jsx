import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-black text-lg font-semibold">About Us</h3>
            <p className="text-gray-200 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper, urna non semper dictum, justo erat cursus justo.
            </p>
          </div>
          <div className="flex items-center">
            <div className="mr-6">
              <h3 className="text-black text-lg font-semibold">Contact</h3>
              <p className="text-gray-200 mt-2">
                Email: info@example.com
                <br />
                Phone: +1 234 567 890
              </p>
            </div>
            <div>
              <h3 className="text-black text-lg font-semibold">Follow Us</h3>
              <div className="flex mt-2">
                <a
                  href="#"
                  className="text-gray-200 hover:text-white mr-4 transition-colors duration-300"
                >
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white mr-4 transition-colors duration-300"
                >
                  <FaTwitter></FaTwitter>
                </a>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition-colors duration-300"
                >
                  <FaInstagram></FaInstagram>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 my-6" />
        <p className="text-gray-200 text-center">
          &copy; {new Date().getFullYear()} Your Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
