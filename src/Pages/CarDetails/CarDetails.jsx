import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CarDetails = () => {
    const carDetails = useLoaderData()
    const { photo, availability, dailyRentalPrice,carModel,description,features } = carDetails;
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    console.log(startDate);
    return (
      <div className="flex-col-reverse lg:flex-row flex gap-10 flex-1 space-y-5 my-20 lg:px-20 px-5">
        <div className="bg-[#FFF8F6] h-fit rounded-3xl p-10 lg:w-[25%]">
          <p>
            <span className="text-2xl font-bold">${dailyRentalPrice}</span>
            /Per Day
          </p>
          <h2 className="text-2xl font-bold my-5">{carModel}</h2>
          <p className="text-lg badge badge-secondary p-3 my-5">
            {availability}
          </p>
          <p>{description}</p>
          <p className="my-5">
            <span className="text-lg font-bold">Features</span>
            {features.map((feature) => (
              <li>{feature}</li>
            ))}
          </p>
          {/* <button className="btn bg-[#FF3600] px-6 py-3 rounded-xl text-white font-bold">
            Book Now
          </button> */}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Book Now
          </button>
          {/* modal......................... */}
          <dialog id="my_modal_4" className="modal w-full max-w-6xl">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Booking Details</h3>
              <p className="py-4">Submit Booking Form</p>
              <div className="">
                <form method="dialog">
                  <div className="flex gap-10">
                    <p className="p-2 border rounded-md">
                      Booking Start:{" "}
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </p>
                    <p className="p-2 border rounded-md">
                      Booking End:{" "}
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </p>
                  </div>
                  <p>
                    <span className="text-2xl font-bold">
                      ${dailyRentalPrice}
                    </span>
                    /Per Day
                  </p>
                  <h2 className="text-2xl font-bold my-5">{carModel}</h2>
                  <button className="btn mr-10">Close</button>
                  <button className="btn">Submit</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div className="flex-1 lg:px-10">
          <img className="rounded-3xl" src={photo} alt="" />
        </div>
      </div>
    );
};

export default CarDetails;