import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const About = () => {
    return (
      <section className="bg-gray-100 py-16 px-8 min-h-screen">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About <span className="text-blue-600">Our Car Rental Service</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Your trusted partner for affordable, reliable, and luxurious car
            rentals. Drive your way with comfort and style.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                🚗 Diverse Fleet
              </h3>
              <p className="text-gray-600">
                From economy cars to luxury SUVs, we have the perfect vehicle
                for every trip.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                💰 Competitive Pricing
              </h3>
              <p className="text-gray-600">
                Enjoy the best rates with no hidden fees. Get the most value for
                your money.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                📞 24/7 Support
              </h3>
              <p className="text-gray-600">
                We're here to assist you anytime, anywhere. Your convenience is
                our priority.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                🎁 Loyalty Rewards
              </h3>
              <p className="text-gray-600">
                Special discounts and rewards for our repeat customers. Drive
                more, save more.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
                <h2 className='text-xl font-bold mb-3'>Follow Us</h2>
            <div className="flex gap-10 justify-center">
              <a
                href="https://www.instagram.com/jyotiprokashchakma/"
                target="blank"
              >
                <FaInstagram className="text-2xl"></FaInstagram>
              </a>
              <a href="https://x.com/jyoti_prokash20" target="blank">
                <FaTwitter className="text-2xl"></FaTwitter>
              </a>
              <a
                href="https://www.facebook.com/jyotiprokashchakma"
                target="blank"
              >
                <FaFacebook className="text-2xl"></FaFacebook>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;