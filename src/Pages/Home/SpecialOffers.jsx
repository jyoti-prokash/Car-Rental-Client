import React from 'react';
import banner1 from "../../assets/special  offer/wp11629660-2023-toyota-wallpapers.jpg"
import { Link } from 'react-router-dom';

const SpecialOffers = () => {
    return (
      <div className="">
        <h2 className="text-center my-10 text-xl font-bold text-[#FF3600]">
          Special Offers
        </h2>
        <div
          className="w-full h-[400px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${banner1})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Luxury Cars at $99/Day This Holiday Season!
            </h1>
            <p className="text-lg sm:text-xl mb-6">
              Drive in style with exclusive offers on our premium fleet.
            </p>
            <div className="flex gap-20">
              <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition">
                Learn More
              </button>
              <Link to="/availableCars">
                <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-lg transition">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SpecialOffers;