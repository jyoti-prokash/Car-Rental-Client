import React from 'react';
import videoBg from "../../../assets/Banner vedio/car banner.mp4"
import "./Banner.css"
import { Link } from 'react-router-dom';
import TypeScript from '../../../Components/TypeScript';
const Banner = () => {
    return (
      <div>
        <video
          className="bg-center relative backdrop-blur-2xl w-full"
          src={videoBg}
          autoPlay
          loop
          muted
        />
        <div className="overly"></div>
        <div className="absolute top-28 left-28 lg:top-80 lg:left-[40%] space-y-2 lg:space-y-7 text-white">
          <h2>
            <p className="text-2xl lg:text-7xl font-bold">
              <span className="ml-20">WELCOME TO</span> <br /> CAR
              <span className="text-yellow-500">|</span>RENTAL
            </p>
          </h2>
          <section>
            <TypeScript></TypeScript>
          </section>
          <Link to="/availableCars">
            <button className="px-3 py-3 rounded-full border-b-2 bg-gradient-to-r from-blue-500 to-green-500 mt-10 lg:mt-10 font-bold">
              View Available Cars
            </button>
          </Link>
        </div>
      </div>
    );
};

export default Banner;