
import React from "react";
import styles from ".../../css/servicesvt.module.css"; // Ensure correct path
import servicesDataVt from "./js/servicesDataVt"; // Import the services data
import { Link } from "react-router-dom";

const ServicesVT = () => {
  return (
    <section className={styles.sectionblogwrap}>
      <div>
        <h2 className={`${styles.servicesvtheading} text-center`}>
          Get solution to all your problems by consulting Astrologer Vivek Tiwari
        </h2>
        <p className="container">
          As the name indicates, Temples Hub one stop solution provider for all
          your pilgrimage/ temple tour needs. We provide unmatched temples tour
          packages like Chardham Packages, South India Temple Tours, Ooty Tours
          etc. Find our most popular packages below and book as per your choice.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {servicesDataVt.map((service) => (
                <div className={`${styles.vtservices} col-md-3`} key={service.id}>
                  <div className={styles.servicecontainer}>
                    <div className={styles.servicecontainer1}>
                      <img
                        src={service.imgSrc}
                        alt={service.altText}
                      />
                    </div>
                    <div className={styles.servicecontainer1a}>
                      {service.title}
                    </div>
                  </div>
                  <div className={styles.servicetext}>
                    {/* <p className={styles.servicetext}>{service.description}</p> */}
                    {/* <Link to={service.link}>KNOW & CONSULT</Link> */}
                    {/* <a href="#">KNOW & CONSULT</a> */}
                    <Link
                      to={`/consult/${service.category}/${service.subcategory}`}
                    >
                      KNOW & CONSULT
                    </Link>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesVT;
