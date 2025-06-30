import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa6";
import Logo from "../Components/Logo";

function Footer() {
  return (
    <footer className="bg-[#4e564e] text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <Logo />
        </div>

        <div className="flex gap-8 text-sm font-semibold">
          <a
            href="/"
            className="hover:text-green-300 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/about"
            className="hover:text-green-300 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="/cart"
            className="hover:text-green-300 transition-colors duration-300"
          >
            Cart
          </a>
          <a
            href="/contact"
            className="hover:text-green-300 transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        <div className="flex space-x-6 text-xl">
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
      </div>

      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Jonopod Organic Foods. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
