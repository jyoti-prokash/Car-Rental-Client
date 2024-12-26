import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";

const CarDetails = () => {
  const carDetails = useLoaderData();
  const {
    _id,
    photo,
    availability,
    dailyRentalPrice,
    carModel,
    description,
    features,
  } = carDetails;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const bookingDate = new Date();
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gather form data
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { ...bookingCar } = initialData;
    bookingCar.bookingDate = bookingDate;
    bookingCar.bookingUser = user?.email;
    bookingCar.bookingStatus = "pending";
    bookingCar.photo = photo;
    bookingCar.carModel = carModel;
    bookingCar.bookingId = _id;
    bookingCar.dailyRentalPrice = dailyRentalPrice;
    axios.post(`${import.meta.env.VITE_API_URL}/booking`,bookingCar)
    .then(res =>{
          console.log(res.data);
          if(res.data.insertedId){
            toast.success('Added Booking Car successfully')
            navigate("/myCar")
          }
        })
        .catch(err=>{
          console.log(err);
        })
    // Close the modal
    const modal = document.getElementById("my_modal_4");
    if (modal) {
      modal.close();
    }
  };

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
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </p>

        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          Book Now
        </button>
        {/* Modal */}
        <dialog id="my_modal_4" className="modal w-full max-w-6xl">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg text-center">Booking Details</h3>
            <div>
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold my-5">{carModel}</h2>
                <p>
                  <span className="text-2xl font-bold">
                    ${dailyRentalPrice}
                  </span>
                  /Per Day
                </p>
                <div className="flex gap-10 my-5">
                  <p className="p-2 border rounded-md">
                    Booking Start:{" "}
                    <DatePicker
                      selected={startDate}
                      name="startDate"
                      onChange={(date) => setStartDate(date)}
                    />
                  </p>
                  <p className="p-2 border rounded-md">
                    Booking End:{" "}
                    <DatePicker
                      selected={endDate}
                      name="endDate"
                      onChange={(date) => setEndDate(date)}
                    />
                  </p>
                </div>
                <div className="mb-4 w-[45%]">
                  <label className="block text-sm font-medium text-gray-700">
                    User Email
                  </label>
                  <input
                    type="email"
                    defaultValue={user?.email}
                    disabled
                    id="carModel"
                    name="bookingUser"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button
                  type="button"
                  className="btn mr-10"
                  onClick={() => document.getElementById("my_modal_4").close()}
                >
                  Close
                </button>
                <button type="submit" className="btn">
                  Submit
                </button>
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
