import React from "react";
import "./About.css";
import { BsCheck2All } from "react-icons/bs";

function About() {
  return (
    <div id="about">
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="text-center">About Us</h2>
            <p className="text-center">
              Learn More <span>About Us</span>
            </p>
          </div>

          <div className="row gy-4">
            <div className="col-lg-7 position-relative about-img">
              <div className="call-us position-absolute">
                <h4>Book a Table</h4>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-start">
              <div className="content ps-0 ps-lg-5">
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <BsCheck2All size={20} className="check" />
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <BsCheck2All size={20} className="check" /> Duis aute irure
                    dolor in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <BsCheck2All size={20} className="check" /> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate trideta storacalaperda
                    mastiro dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident
                </p>

                <div className="position-relative mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
