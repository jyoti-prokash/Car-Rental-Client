import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateForm = ({ car }) => {
  const {
    _id,
    carModel,
    description,
    dailyRentalPrice,
    photo,
    registrationNumber,
    features,
    availability,
    location,
  } = car;
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { ...newCar } = initialData;
    newCar.features = newCar.features.split("\n"); 

    // Sending PATCH request to update the car details
    axios
      .patch(`${import.meta.env.VITE_API_URL}/update/${_id}`, newCar)
      .then((res) => {
        console.log("Update successful:", res.data);
        toast.success("Car updated successfully!");
      })
      .catch((err) => {
        console.error("Error updating car:", err);
        toast.error("Failed to update car. Please try again.");
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md"
      >
        {/* Car Model */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Car Model
          </label>
          <input
            type="text"
            id="carModel"
            name="carModel"
            defaultValue={carModel}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Daily Rental Price */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Daily Rental Price
          </label>
          <input
            type="number"
            id="dailyRentalPrice"
            name="dailyRentalPrice"
            defaultValue={dailyRentalPrice}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Availability */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Availability
          </label>
          <select
            id="availability"
            name="availability"
            defaultValue={availability}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>

        {/* Registration Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Vehicle Registration Number
          </label>
          <input
            type="text"
            defaultValue={registrationNumber}
            id="registrationNumber"
            name="registrationNumber"
            placeholder="Enter vehicle registration number"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Features */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Features
          </label>
          <textarea
            id="features"
            name="features"
            defaultValue={features}
            placeholder="Enter features (e.g., GPS, AC) in a new line"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={description}
            placeholder="Enter description"
            rows="3"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        {/* Photo URL */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Images
          </label>
          <input
            type="url"
            name="photo"
            defaultValue={photo}
            placeholder="Photo URL"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            defaultValue={location}
            placeholder="Enter location"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            hidden
            defaultValue={user?.email}
            type="email"
            name="adder_email"
          />
        </div>

        <button className="btn text-white font-bold text-xl bg-[#FF3600] w-full">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
