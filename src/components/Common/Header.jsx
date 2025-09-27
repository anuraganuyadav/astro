import React, { useState } from "react";
import styles from "../css/Header.module.css";
import Navbar from "./Navbar";
import HeaderEnquery from "../Modal/HeaderEnquery"; // Import the modal component

const Header = () => {
  const [isEnqueryModalOpen, setEnqueryModalOpen] = useState(false); // Track modal state

  // Handle Enquiry modal open
  const handleEnqueryClick = () => {
    setEnqueryModalOpen(true); // Open modal on button click
  };

  // Handle Enquiry modal close
  const handleEnqueryCloseModal = () => {
    setEnqueryModalOpen(false); // Close modal
  };

  return (
    <>
      {/* Navbar & Hero start */}
      <div className="container-xxl position-relative p-0">
        <Navbar />

        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container my-5 py-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className={`${styles.xplorehead} display-3 text-white animated slideInLeft`}>
                  Xplore Astro & Vastu Kendra by Astro Vivek Tiwari 
                  <br />
                 .....Where Destiny Meets Karma...!!
                </h1>
                <p className="text-white animated slideInLeft mb-4 pb-2">
                  {" "}
                  At Xplore Destiny, we believe every soul carries a unique path
                  written in the stars, waiting to be discovered. Founded by
                  Astrologer, Numerologist, and Vastu Consultant Vivek Tiwari
                  (one of the best astrologers in Ghaziabad and Delhi NCR), our
                  mission is to guide you towards clarity, harmony, and
                  fulfillment in life.
                </p>

                {/* Updated button to trigger the modal */}
                {/* <button
                                    className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
                                    onClick={handleEnqueryClick}
                                >
                                    Book A Appointment
                                </button> */}
                <a href="https://calendly.com/vivektiwari4india/20min?month=2025-09" target="blank">
                  <button
                    className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
                    //   onClick={handleEnqueryClick}
                  >
                    Book Appointment
                  </button>
                </a>
              </div>
              <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                <img className="img-fluid" src="img/heroimg.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar & Hero End */}

      {/* Conditionally render the modal */}
      {isEnqueryModalOpen && (
        <HeaderEnquery onClose={handleEnqueryCloseModal} />
      )}
    </>
  );
};

export default Header;
