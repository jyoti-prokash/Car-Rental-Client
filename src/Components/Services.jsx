import React from 'react';
import img1 from '../assets/services/2016-bmw-7-series-exterior-images-1900x1200-07.jpg'
import img2 from '../assets/services/2017-Audi-Q7-fornt-three-quarter-03.jpg'
import img3 from '../assets/services/zaudia5-004.jpg'
import { Link } from 'react-router-dom';

const Services = () => {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Car Rental Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={img1}
                alt="Luxury Sedan"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  Luxury Sedan
                </h3>
                <p className="text-gray-600 mt-2">
                  Comfortable, stylish, and perfect for city travel.
                </p>
                <p className="mt-4 text-lg font-bold text-gray-800">$120/day</p>
                <Link to="/availableCars">
                  <button className="mt-6 bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded hover:bg-blue-700">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={img2} alt="SUV" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">SUV</h3>
                <p className="text-gray-600 mt-2">
                  Spacious and ideal for family trips and long drives.
                </p>
                <p className="mt-4 text-lg font-bold text-gray-800">$150/day</p>
                <Link to="/availableCars">
                  <button className="mt-6 bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded hover:bg-blue-700">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={img3}
                alt="Sports Car"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">Sports Car</h3>
                <p className="text-gray-600 mt-2">
                  Experience luxury and speed for special occasions.
                </p>
                <p className="mt-4 text-lg font-bold text-gray-800">$200/day</p>
                <Link to="/availableCars">
                  <button className="mt-6 bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded hover:bg-blue-700">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Services;