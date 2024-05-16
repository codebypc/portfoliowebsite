import React from "react";
import "./Skill.css";
import {
  FaBootstrap,
  FaGithub,
  FaGithubAlt,
  FaHtml5,
  FaReact,
  FaReacteurope,
  FaWordpress,
  FaWordpressSimple,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript, DiJavascript1 } from "react-icons/di";
import { TbBrandTailwind } from "react-icons/tb";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS CSS file
export const Skills = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="skillCountainer"
      >
        <div data-aos="fade-up" data-aos-duration="3000" className="skillSec">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="skillheading"
          >
            <h1>Skills</h1>
          </div>
          <div className="skillset">
            <div className="skill">
              <FaHtml5 style={{ fontSize: "120px" }} />
            </div>
            <div className="skill">
              <IoLogoCss3 style={{ fontSize: "120px" }} />
            </div>
            <div className="skill">
              <DiJavascript1 style={{ fontSize: "120px" }} />
            </div>
            <div className="skill">
              <FaReacteurope style={{ fontSize: "120px" }} />
            </div>
            <div className="skill">
              <FaBootstrap style={{ fontSize: "120px" }} />
            </div>
            <div className="skill">
              <TbBrandTailwind style={{ fontSize: "120px" }} />
            </div>
            <div className="skill">
              <FaGithubAlt style={{ fontSize: "120px" }} />
            </div>
            <div className="skill">
              <FaWordpressSimple style={{ fontSize: "120px" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
