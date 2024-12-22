import React from 'react';

const CarCard = ({car}) => {
    const { carModel,description, dailyRentalPrice, photo, availability } = car;
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
              <span className="font-bold text-xl">
                $ {dailyRentalPrice}/Per Day
              </span>
              <button className="text-white font-bold bg-[#FF3600] px-2 py-3 rounded-xl btn">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CarCard;