import React from "react";
import "./Menu.css"; // Import your CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Skills } from "./Skills";
import { CardComponent } from "./CardComponent";
import { Testomonial } from "./Testomonial";
import { Project } from "./Project";
import { STATISTIC } from "./STATISTIC";
import { Footer } from "./Footer";
import { Contact } from "./Contact";
import { MyProject } from "./MyProject";
import FAQ from "./FAQ";
import { ContactForm } from "./ContactForm";
import { TypingEffect } from "./TypingEffect";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS CSS file

export const Hero = () => {
  return (
    <>
      <div className="container-hero">
        <div className="left">
          <div className="mobhead">
            <h1>
              <TypingEffect />
            </h1>
            <h2>And I'm a Frontend Developer</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequuntur, amet!
            </p>
          </div>

          <div className="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
          <button className="btn">Download CV</button>
        </div>
        <div className="right">
          <div>
            <img src="image.png" alt="" />
          </div>
        </div>
      </div>
      <Skills />
      <div className="headtest" data-aos="fade-left" data-aos-duration="1000">
        <h1
          style={{
            textAlign: "center",
            backgroundColor: "#571C5C",
            color: "whitesmoke",
            margin: "10px",
            borderRadius: "20px",
          }}
        >
          My work
        </h1>
      </div>
      <MyProject />
      <br />
      <br />
      <br />
      <div className="headtest">
        <h1
          className="headtest"
          data-aos="fade-up"
          data-aos-duration="3000"
          style={{
            textAlign: "center",
            backgroundColor: "#571C5C",
            color: "whitesmoke",
            margin: "10px",
            borderRadius: "20px",
            position: "relative",
            bottom: "60px",
          }}
        >
          Testimonials{" "}
        </h1>
      </div>
      <Testomonial />
      <br />
      <STATISTIC />
      <FAQ />

      <ContactForm />
      <Footer />
    </>
  );
};
