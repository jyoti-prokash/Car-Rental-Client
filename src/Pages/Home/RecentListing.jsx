import axios from "axios";
import React, { useEffect, useState } from "react";

const RecentListing = () => {
  const [recentCar, setRecentCar] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/recent-cars`)
      .then((res) => {
        setRecentCar(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2 className="text-center my-10 text-xl font-bold text-[#FF3600]">
        Recent Listing
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {recentCar.map((car) => (
          <div
            key={car._id}
            className="relative bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:scale-105 transition-transform overflow-hidden"
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-green-500 opacity-20"></div>
            {/* Card content */}
            <img
              src={car.photo}
              alt={car.carModel}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-4 relative z-10">
              <h3 className="text-xl font-bold text-gray-800">
                {car.carModel}
              </h3>
              <p className="text-gray-600 text-sm">${car.dailyRentalPrice}</p>
              <p
                className={`mt-2 text-sm font-medium ${
                  car.availability === "available"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {car.availability}
              </p>
              <p className="text-gray-400 text-xs mt-1">{car.Date}</p>
            </div>

            {/* Decorative gradient circle */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecentListing;
