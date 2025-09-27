import React from "react";
import styles from "../css/appoinment.module.css";
const AppoinmentEnquery = () => {
  return (
    <>
      <div className={`${styles.AppoinmentEnquery} col-md-3 bg-dark d-flex align-items-center`}>
        <div className="p-4 wow fadeInUp w-100" data-wow-delay="0.2s">
          <h4 className="text-white mb-3">Book An Appointment</h4>
          <form>
            <div className="row g-3">
              {/* Name Field */}
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>

              {/* Number Field */}
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="number"
                    placeholder="Your Number"
                  />
                  <label htmlFor="number">Your Number</label>
                </div>
              </div>

              {/* Email Field */}
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>

              {/* Date & Time Field */}
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="datetime"
                    placeholder="Date & Time"
                  />
                  <label htmlFor="datetime">Date & Time</label>
                </div>
              </div>

              {/* Special Request Field */}
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Special Request"
                    id="message"
                    style={{ height: "80px" }}
                  ></textarea>
                  <label htmlFor="message">Special Request</label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-12">
                <button className="btn btn-primary w-100 py-2" type="submit">
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppoinmentEnquery;
