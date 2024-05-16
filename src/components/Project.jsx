import React from "react";
import "./Project.css";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Project = ({ imglink, title, para }) => {
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
        <button>HTML</button>
        <button>CSS</button>
        <button>JavaScript</button>
        <button>React</button>
      </div>

      <div className="footersection">
        <button>
          Github <i class="fa-brands fa-github"></i>
        </button>
        <button>
          Live <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
      </div>
    </div>
  );
};
