import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../css/servicesdetails.module.css";

import ServicesVT from "../ServicesVT";
import AppoinmentEnquery from "./AppoinmentEnquery";
import servicesDataVt from "../js/servicesDataVt";

const ConsultDetails = () => {
  // Extract category and subcategory from URL params
  const { category, subcategory } = useParams();

  // Filter data based on category and subcategory
  const filteredData = servicesDataVt.filter(
    (service) =>
      service.category.toLowerCase() === category.toLowerCase() &&
      service.subcategory.toLowerCase() === subcategory.toLowerCase()
  );

  // Get selected service (first match)
  const selectedService = filteredData.length > 0 ? filteredData[0] : null;

  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <div
        className={`${styles.servicedetailbanner} container-xxl py-5 bg-dark mb-5`}
      >
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              {/* You can add heading or intro text here */}
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              {selectedService && (
                <img
                  className="img-fluid"
                  src={selectedService.bannerimgSrc || selectedService.imgSrc}
                  alt={selectedService.altText || "Service Banner"}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="row">
        <div
          className="col-md-8"
          style={{ marginRight: "15px", marginLeft: "15px" }}
        >
          {selectedService ? (
            <div className={styles.servicepagecontent1}>
              <h1>{selectedService.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: selectedService.description,
                }}
              ></div>
            </div>
          ) : (
            <p>Service details not found.</p>
          )}
        </div>

        {/* Enquiry Form */}
        <AppoinmentEnquery />
      </div>
      <br />

      {/* Other Services Section */}
      <ServicesVT />

      <Footer />
    </>
  );
};

export default ConsultDetails;
