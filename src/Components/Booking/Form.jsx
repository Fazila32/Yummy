import React, { useState } from "react";
import FormBooking from "./FormBooking";
import "./Booking.css";
import reserve from "../../Images/reserved.png";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div id="events">
      <section className="book-a-table">
        <div className="container">
          <div className="section-header text-center">
            <h2>Book A Table</h2>
            <p>
              Book <span>Your Stay</span> With Us
            </p>
          </div>

          <div className="row reservation-form">
            <div className="col-lg-4 reservation-img"></div>

            <div className="col-lg-7 d-flex align-items-stretch justify-content-center reservation-form-bg">
              {!isSubmitted ? (
                <FormBooking submitForm={submitForm} />
              ) : (
                <div className="right text-center">
                  <h2>You Table has been reserved</h2>
                  <img src={reserve} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
