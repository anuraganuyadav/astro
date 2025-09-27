import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Footer start */}
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Company
              </h4>
              <Link to="/about-us" className="btn btn-link">
                About Us
              </Link>
              <Link to="/contact-us" className="btn btn-link">
                Contact Us
              </Link>
              <Link to="/articles" className="btn btn-link">
                Articles
              </Link>
              <Link to="/privacy-policy" className="btn btn-link" href="">
                Privacy Policy
              </Link>
              <Link to="/terms-condition" className="btn btn-link">
                Terms & Condition
              </Link>
              <Link to="/faq" className="btn btn-link">
                Faq
              </Link>
              <Link to="/disclaimer " className="btn btn-link">
                Disclaimer
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Contact
              </h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>Xplore Destiny
                Astro & Vastu Kendra 35A,Surya Enclave Bamheta, Near Jindal
                Public School Sare Homes Road, Ghaziabad - 201002
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>+91-8512088720
              </p>
              <p className="mb-2">
                <strong><i class="fa fa-envelope me-2"></i><a href="mailto:xploredestinygzb@gmail.com">xploredestinygzb@gmail.com</a></strong>
                {/* <i className="fa fa-envelope me-3"></i>www.xploredestiny.com */}
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Opening
              </h4>
              <h5 className="text-light fw-normal">Monday - Saturday</h5>
              <p>09AM - 09PM</p>
              <h5 className="text-light fw-normal">Sunday</h5>
              <p>10AM - 08PM</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Newsletter
              </h4>
              <p>Subscribe to our Newsletter to stay connected with us.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control border-primary w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
};

export default Footer;
