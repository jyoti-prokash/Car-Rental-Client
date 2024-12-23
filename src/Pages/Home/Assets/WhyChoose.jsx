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
        {/* <div className="grid grid-cols-2 gap-10 lg:gap-20 mx-auto lg:p-20 ">
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
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Point 1 */}
          <div className="flex flex-col items-center text-center border rounded-2xl p-3 m-2">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
              <img className="w-16" src={carIcon} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Wide Variety of Cars</h3>
            <p className="text-gray-600">
              From budget-friendly options to luxury vehicles, find the perfect
              ride for you.
            </p>
          </div>

          {/* Point 2 */}
          <div className="flex flex-col items-center text-center border rounded-2xl p-3 m-2">
            <div className="bg-green-100 text-green-600 p-4 rounded-full mb-4">
              <img className="w-16" src={priceIcon} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
            <p className="text-gray-600">
              Competitive daily rates you can count on for your next trip.
            </p>
          </div>

          {/* Point 3 */}
          <div className="flex flex-col items-center text-center border rounded-2xl p-3 m-2">
            <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full mb-4">
              <img className="w-16" src={bookingIcon} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Booking Process</h3>
            <p className="text-gray-600">
              Seamlessly book your ride in just a few clicks.
            </p>
          </div>

          {/* Point 4 */}
          <div className="flex flex-col items-center text-center border rounded-2xl p-3 m-2">
            <div className="bg-red-100 text-red-600 p-4 rounded-full mb-4">
              <img className="w-16" src={supportIcon} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
            <p className="text-gray-600">
              24/7 assistance for all your queries to ensure smooth travels.
            </p>
          </div>
        </div>
      </div>
    );
};

export default WhyChoose;