import React from "react";
import logo from "../assets/Rent Car Logo (1)/Car Rent Logo-3.png"

const Navbar = () => {
    const links = (
      <>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Available Cars</a>
        </li>
        <li>
          <a>Add Car</a>
        </li>
        <li>
          <a>My Cars</a>
        </li>
        <li>
          <a>My Bookings</a>
        </li>
      </>
    );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img className="w-28 mr-5 rounded-full scale-120" src={logo} alt="logo" />
        <a className="text-2xl font-bold">CAR<span className="text-yellow-500">|</span>RENTAL</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
