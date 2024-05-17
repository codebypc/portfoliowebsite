import React from "react";
import { Project } from "./Project";

import "./Work.css"; // CSS for styling

export const MyProject = () => {
  return (
    <div className="workcon" style={{}}>
      <Project
        imglink={"./project1.png"}
        title={"FirstStep"}
        para={
          "Experience the ultimate productivity tool with our article reading quiz Pomodoro project. Enhance focus, test comprehension, and generate captivating summaries"
        }
        linktext={"https://firststep007.netlify.app/"}
      />
      <Project
        imglink={"./project3.png"}
        title={"AOS animation"}
        para={
          "Introducing 'AOS Animation' project, merging HTML, CSS, & JS for fluid animations. Experience seamless motion like never before. Explore the artistry of web animation!"
        }
        linktext={
          "https://6581a965a08d0d199d0b9624--dazzling-ganache-abe3b6.netlify.app/hub#"
        }
      />
      <Project
        imglink={"./project4.png"}
        title={"Code Editor"}
        para={
          "I've built a comprehensive code editor tailored for HTML, CSS, and JavaScript, facilitating efficient development and seamless integration for web projects."
        }
        linktext={
          "https://6581a965a08d0d199d0b9624--dazzling-ganache-abe3b6.netlify.app/codeeditor"
        }
      />
      <Project
        imglink={"./qr.png"}
        title={"QR code Generator"}
        para={
          "I developed a QR code generator using HTML, CSS, and JavaScript, enabling users to input data and generate QR codes dynamically on a webpage."
        }
        linktext={
          "https://6581a965a08d0d199d0b9624--dazzling-ganache-abe3b6.netlify.app/qr"
        }
      />

      <Project
        imglink={"./portfolio.png"}
        title={"Portfolio Using Core JS"}
        para={
          "Using HTML for structure, CSS for style, and JavaScript for interactivity, I design a portfolio showcasing my skills and projects, creating a dynamic and engaging online presence."
        }
      />
    </div>
  );
};
