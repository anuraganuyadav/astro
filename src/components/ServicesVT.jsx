
import React from "react";
import styles from ".../../css/servicesvt.module.css"; // Ensure correct path
import commonStyles from ".../../css/common.module.css";
import servicesDataVt from "./js/servicesDataVt"; // Import the services data
import { Link } from "react-router-dom";

const ServicesVT = () => {
  return (
    <section className={styles.sectionblogwrap}>
      <div>
        <h2 className={`${styles.servicesvtheading} text-center`}>
          Get solution to all your problems by consulting Astrologer Vivek Tiwari
        </h2>
        <p className={`${commonStyles.commonpara} container`}>
          Astrologer Vivek Tiwari offers accurate Astrology, Numerology, and Vastu solutions, blending traditional wisdom with a modern scientific approach.
          His guidance helps individuals resolve life challenges, achieve harmony, and make informed decisions.
          Trusted for his clarity and efficiency, he is recognized as one of the best astrologers in Ghaziabad and Delhi NCR.
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