
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "John Smith",
    role: "Project Manager",
    company: "ABC Company",
    review:
      "Shagun consistently delivered high-quality work and communicated effectively with stakeholders throughout the project lifecycle.",
  },
  {
    name: "Sarah Johnson",
    role: "Senior Business Analyst",
    company: "XYZ Solutions",
    review:
      "A reliable professional who understands both business requirements and technical implementation. Great team player.",
  },
  {
    name: "Michael Brown",
    role: "Engineering Lead",
    company: "TechCorp",
    review:
      "Strong analytical mindset and excellent problem-solving abilities. Always focused on delivering value.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <h2>Testimonials</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />

                <p>{item.review}</p>

                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <h3>{item.name}</h3>

                <span>
                  {item.role} • {item.company}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;