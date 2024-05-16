import React, { useState, useEffect } from "react";
import "./FAQ.css"; // CSS for styling
import { FaPlus, FaMinus } from "react-icons/fa"; // Import icons from react-icons library
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS CSS file

const FAQ = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const [openIndex, setOpenIndex] = useState(null); // State to track which question is currently open

  const toggleQuestion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle openIndex
  };

  const faqData = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    },
    {
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum...",
    },
    {
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000...",
    },
  ];

  return (
    <div className="faqcon">
      <div className="faq-section">
        <h2>FAQ</h2>
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="faq-question"
            data-aos="fade-right" // Apply AOS animation
          >
            <div
              className="faq-question-header"
              onClick={() => toggleQuestion(index)}
            >
              <h3>{faq.question}</h3>
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
            {openIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
      <div className="imgfaq" data-aos="fade-right">
       
        {/* Apply AOS animation */}
        <img src="faq.webp" alt="" />
      </div>
    </div>
  );
};

export default FAQ;
