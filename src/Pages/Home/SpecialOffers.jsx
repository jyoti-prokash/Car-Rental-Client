import React from "react";
import banner1 from "../../assets/special  offer/wp11629660-2023-toyota-wallpapers.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Correct import for motion
import SectionTitle from "../../Components/Reuse/SectionTitle";

const SpecialOffers = () => {
  return (
    <div>
      <SectionTitle
        title={"Special Offers"}
        subTitle={
          "Don't miss our special car offers! Limited-time deals on top models. Drive home your dream car at unbeatable prices today!"
        }
      ></SectionTitle>
      <div
        className="w-full h-[550px] bg-cover bg-center relative bg-fixed"
        style={{
          backgroundImage: `url(${banner1})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
          viewport={{ once: true, amount: 0.5 }} // Trigger only once when 50% visible
          transition={{ duration: 2 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
          >
            Luxury Cars at $99/Day This Holiday Season!
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl mb-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2, delay: 0.2 }}
          >
            Drive in style with exclusive offers on our premium fleet.
          </motion.p>
          <div className="flex gap-20">
            <Link to="/availableCars">
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold px-6 py-3 rounded-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 2 }}
              >
                Book Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SpecialOffers;
