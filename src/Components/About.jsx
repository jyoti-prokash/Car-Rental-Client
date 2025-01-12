import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import about from '../assets/others/about.jpg'

const About = () => {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* About Us Image */}
            <div className="w-4/6 mx-auto">
              <img
                src={about}
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* About Us Text */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                About Us
              </h2>
              <p className="text-gray-600 mb-4">
                Welcome to our Car Rental Services! We are committed to
                providing top-notch vehicles and outstanding customer service.
                Our goal is to make your travel experience safe, comfortable,
                and hassle-free.
              </p>
              <p className="text-gray-600">
                Whether you need a luxury sedan for a business trip, an SUV for
                a family vacation, or a sports car for a special occasion, we’ve
                got you covered. Experience quality, reliability, and
                flexibility with us.
              </p>
              <div className='mt-10 text-3xl font-bold'><p>Learn More</p></div>
              <div className="grid grid-flow-col gap-5 mt-10 w-40">
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
        </div>
      </section>
    );
};

export default About;