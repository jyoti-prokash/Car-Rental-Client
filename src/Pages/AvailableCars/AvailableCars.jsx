import axios from "axios";
import React, { useEffect, useState } from "react";
import CarCard from "../../Components/CarCard";

const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [layout, setLayout] = useState("grid"); 
  const [searchQuery, setSearchQuery] = useState("");
  const [sortType, setSortType] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/cars`)
      .then((res) => {
        setCars(res.data);
        setFilteredCars(res.data); 
        setLoading(false)
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
  // handle Sort
  const handleSort = (type) => {
    setSortType(type);
    let sortedCars = [...filteredCars];
    if (type === "date-newest") {
      sortedCars = sortedCars.sort(
        (a, b) => new Date(b.Date) - new Date(a.Date)
      );
    } else if (type === "date-oldest") {
      sortedCars = sortedCars.sort(
        (a, b) => new Date(a.Date) - new Date(b.Date)
      );
    } else if (type === "price-lowest") {
      sortedCars = sortedCars.sort(
        (a, b) => a.dailyRentalPrice - b.dailyRentalPrice
      );
    } else if (type === "price-highest") {
      sortedCars = sortedCars.sort(
        (a, b) => b.dailyRentalPrice - a.dailyRentalPrice
      );
    }
    setFilteredCars(sortedCars);
  };
  return (
    <div className="m-3 mx-auto min-h-screen">
      {/* Search and Layout Toggle Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 w-4/6 mx-auto gap-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by car model, location..."
          value={searchQuery}
          onChange={handleSearch}
          className="input input-bordered border-blue-500 border-2"
        />
        {/* sorting all cars */}
        <div className="flex lg:justify-end container mx-auto justify-center items-center">
          <select
            className="border-blue-500 border-2 select select-bordered w-full max-w-xs font-bold"
            value={sortType}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="date-newest">Date Added (Newest First)</option>
            <option value="date-oldest">Date Added (Oldest First)</option>
            <option value="price-lowest">Price (Lowest First)</option>
            <option value="price-highest">Price (Highest First)</option>
          </select>
        </div>

        {/* Layout Toggle Buttons */}
        <div className="flex mr-3 gap-4">
          <button
            className={`btn ${
              layout === "grid"
                ? "btn-primary bg-gradient-to-r border-none from-blue-500 to-green-500"
                : "btn-outline"
            }`}
            onClick={() => setLayout("grid")}
          >
            Grid View
          </button>
          <button
            className={`btn ${
              layout === "list"
                ? "btn-primary bg-gradient-to-r border-none from-blue-500 to-green-500"
                : "btn-outline"
            }`}
            onClick={() => setLayout("list")}
          >
            List View
          </button>
        </div>
      </div>
      <div className="text-center text-4xl text-blue-600">
        {loading && (
          <span className="loading loading-infinity loading-lg"></span>
        )}
      </div>
      {/* Cars Display */}
      {filteredCars.length > 0 ? (
        <div
          className={
            layout === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:px-20 px-2"
              : "flex flex-col gap-4"
          }
        >
          {filteredCars.map((car) => (
            <div
              key={car._id}
              className={
                layout === "list" ? "border p-4 rounded-lg shadow lg:px-20 px-10" : ""
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
