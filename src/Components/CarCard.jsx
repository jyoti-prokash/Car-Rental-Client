import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({car}) => {
    const {
      _id,
      carModel,
      description,
      dailyRentalPrice,
      photo,
      availability,
      bookingCount,
    } = car;
    return (
      <div>
        <div className="h-[520px] card bg-base-100 shadow-xl border p-2">
          <figure>
            <img
              className="p-2 w-[380px] rounded-3xl object-cover"
              src={photo}
              alt="carModel"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">{carModel}</h2>
            <p>{description}</p>
            {/* {car.availability === "available"? } */}
            <p
              className={`${
                availability === "available"
                  ? "badge badge-primary"
                  : "badge badge-secondary"
              }`}
            >
              {availability}
            </p>
            <p className="font-semibold">Booking Count: {bookingCount}</p>
            {/* <p className="badge badge-secondary">{availability}</p> */}
            <div className="divider"></div>
            <div className="card-actions justify-between items-center">
              <p>
                <span className="text-2xl font-bold">${dailyRentalPrice}</span>
                /Per Day
              </p>
              <Link to={`/carDetails/${_id}`}>
                <button className="text-white font-bold bg-gradient-to-r from-blue-500 to-green-500 px-2 py-3 rounded-xl btn">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CarCard;