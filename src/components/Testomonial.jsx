import React, { useState, useEffect } from "react";
import "./Testomonial.css"; // CSS for styling

export const Testomonial = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change the interval (in milliseconds) as needed
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      image: "user.png",
      name: "John Doe",
      text: "Working with Prakash was a pleasure. Their professionalism and attention to detail ensured efficient, high-quality results. I highly recommend their services.",
    },
    {
      image: "user2.png",
      name: "Jane Smith",
      text: "Highly satisfied with Prakash's work ethic and skill set. They demonstrated exceptional professionalism and delivered on time and within budget. A pleasure to work with.",
    },
    {
      image: "Image.png",
      name: "Jane Smith",
      text: "Impressed by Prakash's expertise and commitment to excellence. Their positive attitude and proactive approach made them a valuable asset to our project. Highly recommended.",
    },
    // Add more testimonials as needed
  ];

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="testimonial-slider "
    >
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={
            index === currentImageIndex
              ? "testimonial-slide active"
              : "testimonial-slide"
          }
        >
          {index === currentImageIndex && (
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="testimonial-content"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <h3 style={{ color: "white" }} className="testimonial-text">
                {testimonial.text}
              </h3>
              <h3 style={{ color: "white" }} className="testimonial-name">
                {testimonial.name}
              </h3>
            </div>
          )}
        </div>
      ))}
      {/* Previous and Next Buttons */}
      <div className="buttons-container">
        <button className="prev-button" onClick={goToPreviousSlide}>
          Previous
        </button>
        <button className="next-button" onClick={goToNextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};
