import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import { FaBars, FaTimes } from "react-icons/fa";
const NavMenu = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <Link to="home">
        <h1>Yummy.</h1>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="home">Home</Link>
        </li>

        <li>
          <Link to="home">About</Link>
        </li>

        <li>
          <Link to="menu">Menu</Link>
        </li>

        <li>
          <Link to="event">Event</Link>
        </li>
        <li>
          <Link to="events">Event</Link>
        </li>
        <li>
          <Link to="chefs">Chefs</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
        <li>
          <Link to="dropdown">Dropdown</Link>
        </li>
        <li>
          <Link to="Contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaBars size={20} style={{ color: "yellow" }} />
        ) : (
          <FaTimes size={20} style={{ color: "yellow" }} />
        )}
      </div>
      <button>Book a table</button>
    </div>
  );
};

export default NavMenu;
