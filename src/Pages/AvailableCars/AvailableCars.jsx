import axios from "axios";
import React, { useEffect, useState } from "react";
import CarCard from "../../Components/CarCard";

const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [layout, setLayout] = useState("grid"); 
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/cars`)
      .then((res) => {
        setCars(res.data);
        setFilteredCars(res.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter cars based on car model, or location
    const filtered = cars.filter(
      (car) =>
        car.carModel.toLowerCase().includes(query) ||
        car.location.toLowerCase().includes(query)
    );
    setFilteredCars(filtered);
  };

  return (
    <div>
      {/* Search and Layout Toggle Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 container mx-auto gap-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by car model, location..."
          value={searchQuery}
          onChange={handleSearch}
          className="input input-bordered w-full md:w-1/3"
        />

        {/* Layout Toggle Buttons */}
        <div className="flex gap-4">
          <button
            className={`btn ${
              layout === "grid" ? "btn-primary" : "btn-outline"
            }`}
            onClick={() => setLayout("grid")}
          >
            Grid View
          </button>
          <button
            className={`btn ${
              layout === "list" ? "btn-primary" : "btn-outline"
            }`}
            onClick={() => setLayout("list")}
          >
            List View
          </button>
        </div>
      </div>

      {/* Cars Display */}
      {filteredCars.length > 0 ? (
        <div
          className={
            layout === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
              : "flex flex-col gap-4"
          }
        >
          {filteredCars.map((car) => (
            <div
              key={car._id}
              className={
                layout === "list" ? "border p-4 rounded-lg shadow" : ""
              }
            >
              <CarCard car={car} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-10">
          <p>No cars found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default AvailableCars;
