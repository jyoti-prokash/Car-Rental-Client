import React from 'react';
import carIcon from "../../../assets/icons/vehicle_16493651.png"
import bookingIcon from "../../../assets/icons/booking_9150508.png"
import supportIcon from "../../../assets/icons/help-desk_4961759.png"
import priceIcon from "../../../assets/icons/best-price_2854320.png"
import SectionTitle from '../../../Components/Reuse/SectionTitle';
const WhyChoose = () => {
    return (
      <div className='lg:px-20'>
        <SectionTitle
          title={"Why Choose Us"}
          subTitle={"Unmatched quality and service for your needs"}
        ></SectionTitle>
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