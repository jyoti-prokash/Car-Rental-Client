import React from "react";
import logo from "../assets/Rent Car Logo (1)/Car Rent Logo-3.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer footer-center bg-gradient-to-r from-green-500 to-blue-500 opacity-100 p-5 text-white">
      <aside>
        <img className="w-28 rounded-full" src={logo} alt="logo" />
        <p className="font-bold">
          Car|Rental Service Ltd.
          <br />
          Providing reliable tech since 2020
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.instagram.com/jyotiprokashchakma/" target="blank">
            <FaInstagram className="text-2xl"></FaInstagram>
          </a>
          <a href="https://x.com/jyoti_prokash20" target="blank">
            <FaTwitter className="text-2xl"></FaTwitter>
          </a>
          <a href="https://www.facebook.com/jyotiprokashchakma" target="blank">
            <FaFacebook className="text-2xl"></FaFacebook>
          </a>
        </div>
      </nav>
      <p>
        Copyright © {new Date().getFullYear()} - All right reserved Car|Rental
      </p>
    </footer>
  );
};

export default Footer;
