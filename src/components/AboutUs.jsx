import React from "react";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import { Link } from "react-router-dom";
import ServicesVT from "./ServicesVT";

const AboutUs = () => {
  return (
    <>
      <Navbar></Navbar>
      <div class="container-xxl position-relative p-0">
        <div class="container-xxl py-5 bg-dark hero-header mb-5">
          <div class="container text-center my-5 pt-5 pb-4">
            <h1 class="display-3 text-white mb-3 animated slideInDown">
              About Us
            </h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center text-uppercase">
                <li class="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>

                <li
                  class="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Left Image Column */}
            {/* <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid rounded w-100 wow zoomIn"
                data-wow-delay="0.1s"
                src="img/num.jpeg"
                alt="About Us"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div> */}

            {/* Right Text Column */}
            <div className="col-lg-12">
              <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                About Us – Xplore Destiny
              </h5>
              <h1 className="mb-4">
                Welcome to <i className="fa-moon text-primary me-2"></i>
                Where Karma Meets Destiny
              </h1>

              <p className="mb-3">
                At Xplore Destiny, we believe every soul carries a unique path
                written in the stars, waiting to be discovered. Founded by
                Astrologer, Numerologist, and Vastu Consultant Vivek Tiwari (one
                of the best astrologers in Ghaziabad and Delhi NCR), our mission
                is to guide you towards clarity, harmony, and fulfillment in
                life.
              </p>

              <p className="mb-3">
                Our logo tells our story — the lotus represents purity, growth,
                and spiritual awakening, while the orbit reflects the cosmic
                cycles that shape our journey. Together, they symbolize how
                karma and destiny are interconnected, aligning with our guiding
                philosophy: “Where Karma Meets Destiny.”
              </p>

              <p className="mb-3">
                With years of expertise, Vivek Tiwari brings ancient wisdom into
                modern life through:
              </p>

              <ul>
                <li>
                  <strong>Astrology Consultation</strong> – insights into
                  career, marriage, health, finance, and personal growth.
                </li>
                <li>
                  <strong>Numerology Guidance</strong> – decoding the power of
                  numbers to reveal your strengths, opportunities, and life
                  path.
                </li>
                <li>
                  <strong>Vastu Shastra Solutions</strong> – balancing energy in
                  your home, office, or property for prosperity and peace.
                </li>
                <li>
                  <strong>Personalized Remedies</strong> – gemstones, mantras,
                  and practical solutions tailored to your unique chart.
                </li>
                <li>
                  <strong>Spiritual Guidance</strong> – aligning mind, body, and
                  soul for a balanced life.
                </li>
              </ul>

              <p className="mb-3">
                At Xplore Destiny, we don’t just predict the future — we empower
                you to shape it with awareness. Whether you seek direction,
                peace, or success, our holistic approach helps you align with
                your higher purpose and live in harmony with universal energies.
              </p>

              <p className="mb-4">
                🌿 Because true destiny is not just found… it’s explored.
              </p>

              {/* Experience Counter */}
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1
                      className="flex-shrink-0 display-5 text-primary mb-0"
                      data-toggle="counter-up"
                    >
                      15
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Years of</p>
                      <h6 className="text-uppercase mb-0">Experience</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesVT></ServicesVT>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
