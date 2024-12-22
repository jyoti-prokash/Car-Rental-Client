import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CarDetails = () => {
    const carDetails = useLoaderData()
    const { photo, availability, dailyRentalPrice,carModel,description,features } = carDetails;
    return (
      <div className="flex-col-reverse lg:flex-row flex gap-10 flex-1 space-y-5 my-20 lg:px-20 px-5">
        <div className="bg-[#FFF8F6] h-fit rounded-3xl p-10 lg:w-[25%]">
          <p>
            <span className="text-2xl font-bold">${dailyRentalPrice}</span>
            /Per Day
          </p>
          <h2 className="text-2xl font-bold my-5">{carModel}</h2>
          <p className="text-lg badge badge-secondary p-3 my-5">{availability}</p>
          <p>{description}</p>
          <p className="my-5">
            <span className="text-lg font-bold">Features</span>
            {features.map((feature) => (
              <li>{feature}</li>
            ))}
          </p>
          <button className="btn bg-[#FF3600] px-6 py-3 rounded-xl text-white font-bold">
            Book Now
          </button>
        </div>
        <div className="flex-1 lg:px-10">
          <img className="rounded-3xl" src={photo} alt="" />
        </div>
      </div>
    );
};

export default CarDetails;