import React from "react";
import { Project } from "./Project";

import "./Work.css"; // CSS for styling

export const MyProject = () => {
  return (
    <div className="workcon" style={{}}>
      <Project
        imglink={"./project1.png"}
        title={"FirstStep"}
        para={"This project is react using HTML"}
      />
      <Project
        imglink={"./project2.png"}
        title={"FirstStep"}
        para={"This project is react using HTML"}
      />
      <Project
        imglink={"./project3.png"}
        title={"FirstStep"}
        para={"This project is react using HTML"}
      />
      <Project
        imglink={"./project4.png"}
        title={"FirstStep"}
        para={"This project is react using HTML"}
      />

      <Project
        imglink={"./project1.png"}
        title={"FirstStep"}
        para={"This project is react using HTML"}
      />
      <Project
        imglink={"./project2.png"}
        title={"FirstStep"}
        para={"This project is react using HTML"}
      />
      <Project
        imglink={"./project3.png"}
        title={"FirstStep"}
        para={"This project is react using HTML"}
      />
      <Project
        imglink={"./project4.png"}
        title={"FirstStep"}
        para={"This project is react using HTML"}
      />
    </div>
  );
};
