import React from "react";
import { Link } from "react-scroll";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            We are dedicated to making the world a better place by addressing
            critical issues like clean water, education, healthcare, and food
            security. Join us in creating lasting change.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="about" className="hover:underline cursor-pointer" spy={true} smooth={true} offset={0} duration={1000} >
                About Us
              </Link>
            </li>
            <li>
              <Link to="causes" className="hover:underline cursor-pointer" spy={true} smooth={true} offset={0} duration={1000} >
                Our Causes
              </Link>
            </li>
            <li>
              <Link to="donation" className="hover:underline cursor-pointer" spy={true} smooth={true} offset={0} duration={1000} >
                Donate Now
              </Link>
            </li>
            <li>
              <Link to="projects" className="hover:underline cursor-pointer" spy={true} smooth={true} offset={0} duration={1000} >
                Projects
              </Link>
            </li>
            <li>
              <Link to="donation" className="hover:underline cursor-pointer" spy={true} smooth={true} offset={0} duration={1000} >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">
            <strong>Email:</strong> info@victorious.com
          </p>
          <p className="text-gray-400">
            <strong>Phone:</strong> +1234567899
          </p>
          <p className="text-gray-400">
            <strong>Address:</strong> Envato Pty Ltd, 13/2 Elizabeth St Melbourne VIC 3000, Australia
            Country
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center border-t border-gray-700 pt-4">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Victorious Non-Profit Charity. All Rights Reserved.
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Designed and Developed by Gereal-Tech.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
