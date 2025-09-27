import React from "react";
import Testimonial from "./Common/Testimonial";
import LatestBlogs from "./Common/LatestBlogs";
import PopularProduct from "./Common/PopularProducts";
import ServicesVT from "./ServicesVT";
import PopularServices from "./Common/PopularServices";
import { Link } from "react-router-dom";
import styles from ".../../css/index.module.css"; 

const Index = () => {
  return (
    <>
      {/* About start */}

      <div className="container-xxl py-1">
        <div className="container">
          <div className="row g-5 ">
            {/* Left Side: Image */}
            <div className="col-lg-6 d-flex justify-content-center ">
              <img
                className={`${styles.astroimg} img-fluid rounded w-100 wow zoomIn`}
                data-wow-delay="0.1s"
                src="img/vivek.jpeg"
                alt="About Us"
                // Adjust height to match text
              />
            </div>

            {/* Right Side: Content */}
            <div className="col-lg-6 d-flex flex-column ">
              <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                About Us
              </h5>
              <h1 className="mb-4">
                Welcome to <i className="fa-moon text-primary me-2"></i>
                Xplore Destiny
              </h1>
              <p className="mb-4">
                At Xplore Destiny, we believe every soul carries a unique path written in the stars, waiting to be discovered. Founded by Astrologer, Numerologist, and Vastu Consultant Vivek Tiwari (one of the best astrologers in Ghaziabad and Delhi NCR), our mission is to guide you towards clarity, harmony, and fulfillment in life.
              </p>
              <p className="mb-4">
               Our logo tells our story — the lotus represents purity, growth, and spiritual awakening, while the orbit reflects the cosmic cycles that shape our journey. Together, they symbolize how karma and destiny are interconnected, aligning with our guiding philosophy: “Where Karma Meets Destiny.
              </p>

              {/* Stats Section */}
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
                {/* <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1
                      className="flex-shrink-0 display-5 text-primary mb-0"
                      data-toggle="counter-up"
                    >
                      50
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Popular</p>
                      <h6 className="text-uppercase mb-0">Master Chefs</h6>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Read More Button */}
              <Link to="/about-us" className="btn btn-primary py-3 px-5 mt-2">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Menu start */}
      {/* <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">

                        <h1
                            className="section-title ff-secondary text-center text-primary fw-normal">Most popuarl Products</h1>
                    </div>
                    <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.1s">

                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt=""
                                                style={{ width: '80px' }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Astrology product1</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                    diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-2.jpg" alt=""
                                                style={{ width: '80px' }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Astrology product2</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                    diam</small>

                                            </div>
                                        </div>
                                        <button type="button" class="btn btn-primary">Primary</button>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-3.jpg" alt=""
                                                style={{ width: '80px' }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Astrology product3</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                    diam</small>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}
  <PopularServices></PopularServices>
      <PopularProduct></PopularProduct>

      {/* Menu End */}

      {/*  Reservation Start */}
     

      {/*  Reservation Start  */}

      {/*  our services Start*/}
    
      {/*  our services end*/}

      {/* BLOCK Start |*/}

      {/* BLOCK END |*/}
      <ServicesVT></ServicesVT><br></br>
      <Testimonial></Testimonial>
      <LatestBlogs></LatestBlogs>

    </>
  );
};

export default Index;
