import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({car}) => {
    const { _id,carModel,description, dailyRentalPrice, photo, availability } = car;
    return (
      <div>
        <div className="card bg-base-100 shadow-xl border p-5">
          <figure>
            <img className="p-3 rounded-3xl" src={photo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">{carModel}</h2>
            <p>{description}</p>
            <p className="badge badge-secondary">{availability}</p>
            <div className="divider"></div>
            <div className="card-actions justify-between items-center">
              <p>
                <span className="text-2xl font-bold">${dailyRentalPrice}</span>
                /Per Day
              </p>
              <Link to={`/carDetails/${_id}`}>
                <button className="text-white font-bold bg-[#FF3600] px-2 py-3 rounded-xl btn">
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