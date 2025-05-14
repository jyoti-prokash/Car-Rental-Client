import videoBg from "../../../assets/Banner vedio/car banner.mp4";
import "./Banner.css";
import { Link } from "react-router-dom";
import TypeScript from "../../../Components/TypeScript";

const Banner = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 className="text-3xl lg:text-7xl font-bold">
          <span className="block">WELCOME TO</span>
          CAR<span className="text-yellow-500">|</span>RENTAL
        </h2>
        <section className="mt-4 lg:mt-8">
          <TypeScript />
        </section>
        <Link to="/availableCars">
          <button className="mt-6 lg:mt-10 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-sm lg:text-lg font-bold text-white shadow-lg hover:scale-105 transition-transform">
            View Available Cars
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;