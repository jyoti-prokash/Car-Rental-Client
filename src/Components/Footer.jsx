import React from "react";
import logo from "../assets/Rent Car Logo (1)/Car Rent Logo-3.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import footerImg from '../assets/footer/wp11965377-car-rental-wallpapers.jpg'
const Footer = () => {
  return (
    <footer
      className="footer footer-center opacity-100 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      <div className="bg-black/40 rounded-lg backdrop-blur-sm shadow-l w-full py-14">
        <aside>
          <img className="w-28 rounded-full mx-auto" src={logo} alt="logo" />
          <p className="font-bold my-5">
            Car|Rental Service Ltd.
            <br />
            Providing reliable tech since 2020
          </p>
        </aside>
        <nav className="my-5">
          <div className="grid grid-flow-col gap-5">
            <a
              href="https://www.instagram.com/jyotiprokashchakma/"
              target="blank"
            >
              <FaInstagram className="text-2xl"></FaInstagram>
            </a>
            <a href="https://x.com/jyoti_prokash20" target="blank">
              <FaTwitter className="text-2xl"></FaTwitter>
            </a>
            <a
              href="https://www.facebook.com/jyotiprokashchakma"
              target="blank"
            >
              <FaFacebook className="text-2xl"></FaFacebook>
            </a>
          </div>
        </nav>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved Car|Rental
        </p>
      </div>
    </footer>
  );
};

export default Footer;
