import React from "react";
import "./Project.css";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Project = ({ imglink, title, para, linktext }) => {
  return (
    <div
      // data-aos="fade-down"
      // data-aos-duration="1000"
      className="containerProj"
    >
      <div className="imgsection">
        <img src={imglink} alt="" />
      </div>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="para">
        <p>{para}</p>
      </div>

      <div className="desc">
        <button>#HTML</button>
        <button>#CSS</button>
        <button>#JavaScript</button>
        <button>#React</button>
      </div>

      <div className="footersection">
        <button>
          <a target="_blank" href="https://github.com/pcprajapat001/firststep">
            Github <i class="fa-brands fa-github"></i>
          </a>
        </button>
        <button style={{ backgroundColor: "black" }}>
          <a target="_blank" href={linktext}>
            Live <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </button>
      </div>
    </div>
  );
};
