import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Menu.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";
import { LuHome } from "react-icons/lu";

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <img
          style={{ padding: "10px", marginTop: "15px" }}
          width="100px"
          height="100px"
          src="image.png"
          alt=""
        />
      </div>
      <ul className={isMenuOpen ? "menu-list expanded" : "menu-list"}>
        <Link to="/">
          <i class="fa-solid fa-house"></i>
          Home
        </Link>
        <Link to="/">Contact</Link>
        <Link to="/">Services</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Report</Link>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </div>
    </nav>
  );
};
