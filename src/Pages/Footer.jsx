import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../Components/Logo";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#676967] text-white py-10 mt-16 text-lg ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="text-center md:text-left">
          <Logo />
        </div>

        <div className="flex gap-8 text-lg font-semibold">
          <Link
            to="/"
            className="hover:text-green-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-green-300 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/cart"
            className="hover:text-green-300 transition-colors duration-300"
          >
            Cart
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex space-x-6 text-xl mb-">
            <a
              href="https://www.facebook.com/jonopodorganicfoods/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/rashidulislam71/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <hr />
          <div className="flex flex-col justify-start items-start">
            <div className="flex justify-center items-center gap-2">
              <strong>Email:</strong>
              <a href="mailto:jonopodorganicfoods@gmail.com">
                jonopodorganicfoods@gmail.com
              </a>
            </div>
            <div className="flex justify-center items-center gap-2">
              <strong>Contact:</strong>
              <a href="tel: 01782-241671">01782-241671</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Jonopod Organic Foods. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
