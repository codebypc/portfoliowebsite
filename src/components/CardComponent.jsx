import "./CardComponent.css"; // Import your CSS file for styling
import React from "react";

export const CardComponent = ({ imglink, title, desc }) => {
  // Destructure link from props
  return (
    <div class="main-container">
      <div class="child">
        <img src={imglink} alt="" />
        <h3>{title}</h3>
        <p>{desc}</p>
        <a href="">Read more...</a>
      </div>
    </div>
  );
};
