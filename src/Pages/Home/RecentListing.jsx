import axios from "axios";
import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/Reuse/SectionTitle";
import { Link } from "react-router-dom";

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
    <div className="lg:px-20">
      <SectionTitle
        title={"Recent Listing"}
        subTitle={
          "Explore the latest car listings! Find your perfect vehicle from top brands with great deals. Buy or sell cars effortlessly today!"
        }
      ></SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {recentCar.map((car) => (
          <div
            key={car._id}
            className="relative bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:scale-105 transition-transform overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-green-500 opacity-20"></div>
            {/* Card*/}
            <img
              src={car.photo}
              alt={car.carModel}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-4 relative z-10 flex items-center justify-between">
              <div>
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
              <div>
                <Link to={`/carDetails/${car._id}`}>
                  <button className="btn btn-outline">Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecentListing;
