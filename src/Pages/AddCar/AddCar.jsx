import axios from 'axios';
import { toast } from 'react-toastify';

const AddCar = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const {...newCar} = initialData;
        newCar.features = newCar.features.split('\n');
        // send to server vie creating post api
        axios.post(`${import.meta.env.VITE_API_URL}/cars`,newCar)
        .then(res =>{
          console.log(res.data);
          if(res.data.insertedId){
            toast.success('Added Car successfully')
          }
        })
        .catch(err=>{
          console.log(err);
        })
    };
  
    return (
      <div className="">
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
            >
              Car Model
            </label>
            <input
              type="text" required
              id="carModel"
              name="carModel"
              placeholder="Enter car model"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="dailyRentalPrice"
              className="block text-sm font-medium text-gray-700"
            >
              Daily Rental Price
            </label>
            <input
              type="number" required
              id="dailyRentalPrice"
              name="dailyRentalPrice"
              placeholder="Enter daily rental price"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="availability"
              className="block text-sm font-medium text-gray-700"
            >
              Availability
            </label>
            <select
              id="availability"
              name="availability" required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="vehicleRegistrationNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Vehicle Registration Number
            </label>
            <input
              type="text" required
              id="registrationNumber"
              name="registrationNumber"
              placeholder="Enter vehicle registration number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="features"
              className="block text-sm font-medium text-gray-700"
            >
              Features
            </label>
            <textarea
              type="text" required
              id="features"
              name="features"
              placeholder="Enter features (e.g., GPS, AC) in a new line"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description" required
              name="description"
              placeholder="Enter description"
              rows="3"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-700"
            >
              Images
            </label>
            <div id="images" className="mt-1 flex justify-center items-center">
              <input
                type="url"
                name="photo" required
                placeholder="Enter location"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              id="location" required
              name="location"
              placeholder="Enter location"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="btn text-white font-bold text-xl bg-[#FF3600] w-full">Add Car</button>
        </form>
      </div>
    );
};

export default AddCar;