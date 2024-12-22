import React from 'react';
import carIcon from "../../../assets/icons/vehicle_16493651.png"
import bookingIcon from "../../../assets/icons/booking_9150508.png"
import supportIcon from "../../../assets/icons/help-desk_4961759.png"
import priceIcon from "../../../assets/icons/best-price_2854320.png"
const WhyChoose = () => {
    return (
      <div>
        <h2 className="text-center my-10 text-xl font-bold text-[#FF3600]">
          Why Choose Us
        </h2>
        <h1 className="text-center text-xl lg:text-4xl font-bold mb-10">
          Unmatched quality and service <br /> for your needs
        </h1>
        <div className="grid grid-cols-2 gap-10 lg:gap-20 mx-auto lg:p-20 ">
          <div className="flex items-center border rounded-xl px-2 gap-5 py-6">
            <img className="w-16" src={carIcon} alt="" />
            <div>
              <h2 className="font-bold text-lg lg:text-xl">
                Wide Variety of Cars
              </h2>
              <p className="text-gray-600">
                From budget-friendly options to luxury vehicles.
              </p>
            </div>
          </div>
          <div className="flex items-center py-6 px-2 gap-5 border rounded-xl">
            <img className="w-16" src={priceIcon} alt="" />
            <div>
              <h2 className="font-bold text-lg lg:text-xl">
                Affordable Prices
              </h2>
              <p className="text-gray-600">
                Competitive daily rates you can count on.
              </p>
            </div>
          </div>
          <div className="flex items-center px-2 gap-5 border rounded-xl py-6">
            <img className="w-16" src={bookingIcon} alt="" />
            <div>
              <h2 className="font-bold text-lg lg:text-xl">
                Easy Booking Process
              </h2>
              <p className="text-gray-600">
                Seamlessly book your ride in just a few clicks.
              </p>
            </div>
          </div>
          <div className="flex items-center px-2 gap-5 border rounded-xl py-6">
            <img className="w-16" src={supportIcon} alt="" />
            <div>
              <h2 className="font-bold text-lg lg:text-xl">Customer Support</h2>
              <p className="text-gray-600">
                24/7 assistance for all your queries.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WhyChoose;