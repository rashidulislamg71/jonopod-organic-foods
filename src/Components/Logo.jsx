import React from "react";
import logoText from "/images/logo-text.png";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <>
      <NavLink to="/">
        <div className="flex flex-col ">
          <div className="flex items-center gap-1 text-sm">
            <img className="w-11" src="/logo.png" alt="Jonopod Organic Foods" />
            <img className="w-[50%]" src={logoText} alt="Logo Text" />
          </div>
          <strong className="text-green-600 text-sm">
            বিশ্বস্ততায় খাঁটি পণ্যের নিশ্চয়তা
          </strong>
        </div>
      </NavLink>
    </>
  );
}

export default Logo;
