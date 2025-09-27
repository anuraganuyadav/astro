// import React from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import styles from "../css/servicesdetails.module.css";
// const ServicesDetails = () => {
// 	return (
// 		<>
// 			<Navbar></Navbar>

// 			<div
// 				className={`${styles.servicedetailbanner} container-xxl py-5 bg-dark mb-5`}
// 			>
// 				<div className="container my-5 py-5">
// 					<div className="row align-items-center g-5">
// 						<div className="col-lg-6 text-center text-lg-start">
// 							{/* Add any content here if needed */}
// 						</div>
// 						<div className="col-lg-6 text-center text-lg-end overflow-hidden">
// 							<img className="img-fluid" src="img/heroimg.webp" alt="" />
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			<div className="row">
// 				<div
// 					className="col-md-8"
// 					style={{ marginRight: "15px", marginLeft: "15px" }} >
// 					<div className={styles.servicepagecontent1}>
// 						<div className={styles.servicepagecontent1}>
// 							<h1 className="">Astrology Consultation </h1>
// 							<p>
// 								Indian Astrology is often referred to as Vedic Astrology citing
// 								its source in Vedas. It remains 3500 years old according to
// 								modern science. It is perceived to be even more ancient
// 								according to Indian beliefs.{" "}
// 							</p>

// 							<p>
// 								Astrology remains the founding bed of all consequent studies in
// 								predictions. Numerology, gemology and other forms like tarot
// 								cards are an extension of ancient Vedic astrology.
// 							</p>
// 							<p>
// 								Indian Astrology is predictive, precautionary as well as
// 								remedial in nature. It unravels the difficulties and obstacles
// 								plaguing us in past as well as future. It provides a road-map to
// 								traverse around these obstacles as well as capitalize on
// 								opportunities
// 							</p>

// 							<p>
// 								Astrology is study of the twelve signs\constellations commonly
// 								known as Horoscopes. Interactions of these signs with nine stars
// 								of astrology, dictates our day-to-day life. Every star and sign
// 								is associated with their own affects and characteristics, both
// 								positive and negative in nature.
// 							</p>

// 							<p>
// 								Detailed birth report or Janampatri can be studied to peak a
// 								glance into one’s characteristics, favourable times, and other
// 								scenarios. Kundli\Janampatri is studied to explore the yogas and
// 								doshas hidden in horoscope of a person.
// 							</p>

// 							<p>
// 								Mr. Neeraj Diwan consults on energy and vibrations of a person
// 								and suggests necessary remedies and solutions to strengthen
// 								them.
// 							</p>
// 						</div>
// 					</div>
// 				</div>

// 				<div className="col-md-3 bg-dark d-flex align-items-center">
// 					<div className="p-4 wow fadeInUp w-100" data-wow-delay="0.2s">
// 						<h4 className="text-white mb-3">Book An Appointment</h4>
// 						<form>
// 							<div className="row g-3">
// 								{/* Name Field */}
// 								<div className="col-12">
// 									<div className="form-floating">
// 										<input
// 											type="text"
// 											className="form-control"
// 											id="name"
// 											placeholder="Your Name"
// 										/>
// 										<label htmlFor="name">Your Name</label>
// 									</div>
// 								</div>

// 								{/* Number Field */}
// 								<div className="col-12">
// 									<div className="form-floating">
// 										<input
// 											type="number"
// 											className="form-control"
// 											id="number"
// 											placeholder="Your Number"
// 										/>
// 										<label htmlFor="number">Your Number</label>
// 									</div>
// 								</div>

// 								{/* Email Field */}
// 								<div className="col-12">
// 									<div className="form-floating">
// 										<input
// 											type="email"
// 											className="form-control"
// 											id="email"
// 											placeholder="Your Email"
// 										/>
// 										<label htmlFor="email">Your Email</label>
// 									</div>
// 								</div>

// 								{/* Date & Time Field */}
// 								<div className="col-12">
// 									<div className="form-floating">
// 										<input
// 											type="text"
// 											className="form-control"
// 											id="datetime"
// 											placeholder="Date & Time"
// 										/>
// 										<label htmlFor="datetime">Date & Time</label>
// 									</div>
// 								</div>

// 								{/* Special Request Field */}
// 								<div className="col-12">
// 									<div className="form-floating">
// 										<textarea
// 											className="form-control"
// 											placeholder="Special Request"
// 											id="message"
// 											style={{ height: "80px" }}
// 										></textarea>
// 										<label htmlFor="message">Special Request</label>
// 									</div>
// 								</div>

// 								{/* Submit Button */}
// 								<div className="col-12">
// 									<button className="btn btn-primary w-100 py-2" type="submit">
// 										Book Now
// 									</button>
// 								</div>
// 							</div>
// 						</form>
// 					</div>
// 				</div>

// 			</div>

// 			<Footer></Footer>
// 		</>
// 	);
// };

// export default ServicesDetails;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../css/servicesdetails.module.css";
import categorywiseServicesData from "../js/categorywiseServicesData";
import ServicesVT from "../ServicesVT";
import AppoinmentEnquery from "./AppoinmentEnquery";

const ServicesDetails = () => {
  // Extract category and subcategory from URL params
  const { category, subcategory } = useParams();

  // Filter data based on category and subcategory
  const filteredData = categorywiseServicesData.filter(
    (service) =>
      service.category.toLowerCase() === category.toLowerCase() &&
      service.subcategory.toLowerCase() === subcategory.toLowerCase()
  );

  return (
    <>
      <Navbar />

      <div
        className={`${styles.servicedetailbanner} container-xxl py-5 bg-dark mb-5`}
      >
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              {/* Add any content here if needed */}
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              {filteredData.length > 0 && (
                <img
                  className="img-fluid"
                  src={filteredData[0].bannerimgSrc}
                  alt={filteredData[0].altText || "Service Banner"}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div
          className="col-md-8"
          style={{ marginRight: "15px", marginLeft: "15px" }}
        >
          {filteredData.map((service, index) => (
            <div className={styles.servicepagecontent1} key={index}>
              <h1 className="">{service.title} </h1>
              {/* <p>
								{service.description}
							</p> */}
              <div
                dangerouslySetInnerHTML={{
                  __html: filteredData[0].description,
                }}
              ></div>
            </div>
          ))}
        </div>

        <AppoinmentEnquery></AppoinmentEnquery>
      </div><br></br>
      <ServicesVT></ServicesVT>
      <Footer />
    </>
  );
};

export default ServicesDetails;
