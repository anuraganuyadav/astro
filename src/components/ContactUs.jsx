
// import React from "react";
// // import styles from ".../../css/contactus.module.css";
// import Footer from './Common/Footer';
// import Navbar from './Common/Navbar';
// import ServicesVT from "./ServicesVT";
// import { Link } from "react-router-dom";


// const ContactUs = () => {

// 	return (
// 		<>
// 			<Navbar />
// 			<div className="container-xxl position-relative p-0">
// 				<div className="container-xxl py-5 bg-dark hero-header mb-5">
// 					<div className="container text-center my-5 pt-5 pb-4">
// 						<h1 className="display-3 text-white mb-3 animated slideInDown">Contact Us</h1>
// 						<nav aria-label="breadcrumb">
// 							<ol className="breadcrumb justify-content-center text-uppercase">
// 								<li className="breadcrumb-item"><Link to="/">Home</Link></li>

// 								<li className="breadcrumb-item text-white active" aria-current="page">Contact Us</li>
// 							</ol>
// 						</nav>
// 					</div>
// 				</div>
// 			</div>
// 			<section className="container contact-section">
// 				<div
// 					className="content-area recent-property padding-top-40"
// 					style={{ backgroundColor: "#FFF" }}
// 				>
// 					<div className="container">
// 						<div className="row">
// 							<div className="col-md-12">
// 								<div id="contact1">
// 									<div className="row">
// 										<div className="col-sm-4">
// 											<h3>
// 												<i className="fa fa-map-marker"></i> OUR PRESENCE
// 											</h3>
// 											<p className="contact-details">
// 												Headquarter : Templemitra.com-(Avichal Srishtisutra
// 												Infotainment Pvt. Ltd.), C4, Rayos Building, Sector 63
// 												Rd, C Block, Sector 63, Noida, Uttar Pradesh 201301
// 											</p>
// 										</div>

// 										<div className="col-sm-4">
// 											<h3>
// 												<i className="fa fa-phone"></i> Call Center
// 											</h3>
// 											<p className="contact-details">
// 												Lorem ipsum dolor sit amet consectetur, adipisicing
// 												elit. Nulla provident rem aut, dicta itaque quia
// 												corporis voluptas nam magnam dolor est, beatae aperiam
// 												laboriosam culpa. Quo provident illum libero quisquam?
// 											</p>
// 											<p className="contact-number">
// 												<strong>+91- 7678398674</strong>
// 												<br />
// 												<strong>+91- 8851694514</strong>
// 											</p>
// 										</div>

// 										<div className="col-sm-4">
// 											<h3>
// 												<i className="fa fa-envelope"></i> Electronic Support
// 											</h3>
// 											<p className="contact-details">
// 												Lorem ipsum dolor sit amet consectetur adipisicing elit.
// 												Nihil itaque molestias laborum, facilis recusandae est
// 												omnis ipsum aspernatur consequatur quam eveniet,
// 												nostrum, rerum mollitia odit natus nam doloribus
// 												inventore et.
// 											</p>
// 											<ul>
// 												<li>
// 													<strong>
// 														<a href="mailto:info@fakeemail.com">
// 															testing@gmail.com
// 														</a>
// 													</strong>
// 												</li>
// 											</ul>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</section>

// 			<ServicesVT></ServicesVT>

// 			<Footer />
// 		</>
// 	);
// };

// export default ContactUs;




import React from "react";
import Footer from './Common/Footer';
import Navbar from './Common/Navbar';
import ServicesVT from "./ServicesVT";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="container-xxl position-relative p-0">
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Contact Us
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Contact Us
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="container contact-section">
        <div
          className="content-area recent-property padding-top-40"
          style={{ backgroundColor: "#FFF" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div id="contact1">
                  <div className="row">
                    {/* Online Consultation */}
                    <div className="col-sm-4">
                      <h3>
                        <i className="fa fa-laptop"></i> Online Consultation
                      </h3>
                      <p className="contact-details">
                        To book your appointment online, prefer booking here:
                      </p>
                      <p>
                        <a
                          href="https://calendly.com/vivektiwari4india/20min?month=2025-09"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontWeight: "bold",
                            backgroundColor: "#dc3545",
                            color: "white",
                            padding: "6px 10px",
                            borderRadius: "5px",
                            textDecoration: "none",
                          }}
                        >
                          👉 Book Appointment
                        </a>
                      </p>
                    </div>

                    {/* Offline Consultation */}
                    <div className="col-sm-4">
                      <h3>
                        <i className="fa fa-map-marker"></i> Offline Consultation
                      </h3>
                      <p className="contact-details">
                        Xplore Destiny Astro & Vastu Kendra <br />
                        35A, Surya Enclave Bamheta, <br />
                        Near Jindal Public School, <br />
                        Sare Homes Road, <br />
                        Ghaziabad - 201002
                      </p>
                    </div>

                    {/* Contact / Support */}
                    <div className="col-sm-4">
                      <h3>
                        <i className="fa fa-envelope"></i> Contact / Support
                      </h3>
                      <ul style={{ listStyle: "none", padding: 0 }}>
                        <li>
                          <strong>
                            Website:{" "}
                            <a
                              href="https://www.xploredestiny.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              www.xploredestiny.com
                            </a>
                          </strong>
                        </li>
                        <li>
                          <strong>
                            Contact/WhatsApp:{" "}
                            <a href="tel:+918512088720">+91-8512088720</a>
                          </strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesVT />

      <Footer />
    </>
  );
};

export default ContactUs;

