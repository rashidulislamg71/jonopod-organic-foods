import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";

import { ProductContext } from "../Context/productContext";
import Logo from "./Logo";

function NavBar() {
  const { cartItems } = useContext(ProductContext);

  return (
    <div className="shadow-md border-b border-gray-200">
      <div className="flex gap-[30px] flex-wrap justify-around py-[10px]  bg-white items-center">
        {/* logo */}
        <Logo />

        <div className="navBar ">
          <ul className="flex justify-center items-center gap-[30px] lg:gap-[50px] text-[20px] text-[rgb(15, 64, 32)] font-bold  ">
            <li className=" hover:text-green-800">
              <NavLink className="hover:text-green-800" to="/">
                Home
              </NavLink>
            </li>
            <li className=" ">
              <NavLink className="hover:text-green-800" to="/about">
                About
              </NavLink>
            </li>
            <li className="  ">
              <NavLink title="Cart" className="flex items-center" to="/cart">
                <span className=" hover:text-green-800 text-3xl">
                  <IoCartSharp />
                </span>
                <strong className="text-[18px] mt-[-20px] text-[#fbbe60] ">
                  {cartItems.length}
                </strong>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
