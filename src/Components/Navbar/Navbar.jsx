import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  return (
    <div className=" header fixed-top d-flex align-items-center justify-content-center">
      <div className="container  top-nav d-flex align-items-center justify-content-between fixed-top">
        <Link
          to="home"
          className="logo d-flex align-items-center me-auto me-lg-0"
        >
          <h1>
            Yummy<span>.</span>
          </h1>
        </Link>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="menu">Menu</Link>
            </li>
            <li>
              <Link to="events">Events</Link>
            </li>
            <li>
              <Link to="chefs">Chefs</Link>
            </li>
            <li>
              <Link to="gallery">Gallery</Link>
            </li>
            <li className="dropdown">
              <Link to="#">
                <span>Drop Down</span>
              </Link>
              <ul>
                <li>
                  <Link to="#">Drop Down 1</Link>
                </li>
                <li className="dropdown">
                  <Link to="#">Drop Down 2</Link>
                </li>
                <li>
                  <Link to="#">Drop Down 3</Link>
                </li>
                <li>
                  <Link to="#">Drop Down 4</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </nav>
        {/* navbar */}
        <Link to="events" className="btn-book-a-table">
          Book a Table
        </Link>

        <FaTimes size={20} className="mobile-nav-show" />

        <FaBars size={20} className=" mobile-nav-hide" />
      </div>
    </div>
  );
}

export default Navbar;
