// src/pages/NotFoundPage.jsx

import React from "react";
import { Link } from "react-router-dom";
import notFoundimg from "../assets/image/404.gif";

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 ">
      <img
        src={notFoundimg}
        alt="Page Not Found"
        className="w-64 h-64 mb-6 object-contain"
      />

      <p className="text-2xl md:text-3xl mt-[-20px] font-semibold  text-gray-700">
        Oops! Page Not Found
      </p>
      <p className="text-center max-w-md text-gray-600">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      
      <Link
        to="/"
        className="px-6 py-2 mt-[10px] bg-green-600 text-white rounded shadow hover:bg-green-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
