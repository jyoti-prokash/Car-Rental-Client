import React from 'react';
import videoBg from "../../../assets/Banner vedio/car banner.mp4"
import "./Banner.css"
const Banner = () => {
    return (
      <div>
        <video
          className="bg-center relative"
          src={videoBg}
          autoPlay
          loop
          muted
        />
        <div className="overly"></div>
        <div className="absolute top-40 left-40 lg:top-80 lg:left-[40%] space-y-2 lg:space-y-7 text-white">
          <h2>
            <p className="text-2xl lg:text-7xl font-bold">
              <span className="ml-20">WELCOME TO</span> <br /> CAR
              <span className="text-yellow-500">|</span>RENTAL
            </p>
          </h2>
          <h1 className="font-bold text-xl lg:text-2xl">
            Drive Your Dreams Today!
          </h1>
          <button className="px-5 py-5 rounded-full border-b-2 bg-[#FF3600] font-bold">
            View Available Cars
          </button>
        </div>
      </div>
    );
};

export default Banner;