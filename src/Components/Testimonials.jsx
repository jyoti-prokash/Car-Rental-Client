import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  

  // Fetch testimonials from fake API
  useEffect(() => {
    fetch("/testimonials.json") // Replace with your API URL
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-gray-100 py-10 px-10 lg:px-20">
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {testimonials.map((testimonial) => (
            <SwiperSlide>
              <div className="m-24 flex flex-col items-center">
                <img
                  className="rounded-full"
                  src={testimonial.image}
                  alt=""
                />
                <h2>{testimonial.name}</h2>
                <Rating style={{ maxWidth: 180 }} value={testimonial.rating} readOnly />
                <p>{testimonial.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </section>
  );
};

export default Testimonials;
