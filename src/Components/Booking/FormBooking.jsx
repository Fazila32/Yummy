import React from "react";
import validate from "./ValidateInfo";
import useForm from "./useForm";

const FormBooking = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="d-flex align-items-center reservation-form-bg">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Your Name"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username ? (
              <p>{errors.username}</p>
            ) : (
              <div>
                <br />
              </div>
            )}
          </div>
          <div className="col-lg-4 col-md-6">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Your Email"
              value={values.email}
              onChange={handleChange}
            />

            {errors.email ? (
              <p>{errors.email}</p>
            ) : (
              <div>
                <br />
              </div>
            )}
          </div>
          <div className="col-lg-4 col-md-6">
            <input
              type="text"
              className="form-control"
              name="phone"
              placeholder="Your Phone"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone ? (
              <p>{errors.phone}</p>
            ) : (
              <div>
                <br />
              </div>
            )}
          </div>
          <div className="col-lg-4 col-md-6">
            <input
              type="text"
              name="date"
              className="form-control"
              placeholder="Date"
              value={values.date}
              onChange={handleChange}
            />
            {errors.date ? (
              <p>{errors.date}</p>
            ) : (
              <div>
                <br />
              </div>
            )}
          </div>
          <div className="col-lg-4 col-md-6">
            <input
              type="text"
              className="form-control"
              name="time"
              placeholder="Time"
              value={values.time}
              onChange={handleChange}
            />
            {errors.time ? (
              <p>{errors.time}</p>
            ) : (
              <div>
                <br />
              </div>
            )}
          </div>
          <div className="col-lg-4 col-md-6">
            <input
              type="number"
              className="form-control"
              name="people"
              placeholder="# of people"
              value={values.people}
              onChange={handleChange}
            />
            {errors.people ? (
              <p>{errors.people}</p>
            ) : (
              <div>
                <br />
              </div>
            )}
          </div>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="message"
            rows="5"
            placeholder="Message"
            value={values.message}
            onChange={handleChange}
          ></textarea>
          {errors.message ? (
            <p>{errors.message}</p>
          ) : (
            <div>
              <br />
            </div>
          )}
        </div>

        <div className="text-cenxter m-auto btn-reserve d-flex justify-content-center">
          <button type="submit">Book a Table</button>
        </div>
      </form>
    </div>
  );
};

export default FormBooking;
