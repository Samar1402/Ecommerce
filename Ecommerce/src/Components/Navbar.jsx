import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/smlogo.png";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </NavLink>
        </div>

        {/* Search Field */}
        <div className="flex items-center border rounded-lg px-2 py-1 w-1/3 sm:w-1/4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-1 border-none focus:outline-none"
          />
          <FaSearch className="text-gray-500 ml-2" />
        </div>

        {/* Nav links */}
        <ul className="flex space-x-6 items-center text-sm font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              MEN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/accessorie"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              ACCESSORIES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold flex items-center"
                  : "text-gray-700 hover:text-blue-600 flex items-center"
              }
            >
              <FaUser className="mr-1" /> Login
            </NavLink>
          </li>
        </ul>

        {/* Cart Icon */}
        <div className="ml-4">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 text-lg"
                : "text-gray-700 hover:text-blue-600 text-lg"
            }
          >
            <FaShoppingCart />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
