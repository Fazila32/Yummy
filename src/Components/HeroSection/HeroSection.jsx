import React from "react";
import "./HeroSection.css";
import HeroImg from "../../Images/hero-img.png";
import { FiPlayCircle } from "react-icons/fi";
import { Link } from "react-scroll";

function HeroSection() {
  return (
    <div id="home">
      <section id="hero" className="hero d-flex align-items-center section-bg">
        <div className="container">
          <div className="row justify-content-between gy-5">
            <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
              <h1>Enjoy Your Healthy Delicious Food</h1>
              <p className="text-center">
                Sed autem laudantium dolores. Voluptatem itaque ea consequatur
                eveniet. Eum quas beatae cumque eum quaerat.
              </p>
              <div className="d-flex ">
                <Link to="book-a-table" className="btn-book-a-table">
                  Book a Table
                </Link>
                <a>
                  <FiPlayCircle size={35} className="btn-watch-video" />
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
              <img src={HeroImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
