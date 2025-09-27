import React from 'react';
import styles from '.../../css/Disclaimer.module.css';
import Footer from './Common/Footer';
import ServicesVT from './ServicesVT';
import Navbar from './Common/Navbar';

const Disclaimer = () => {
  return (
    <>
    <Navbar></Navbar>
    <div class="container-xxl py-5 bg-dark hero-header mb-5"><div class="container text-center my-5 pt-5 pb-4"><h1 class="display-3 text-white mb-3 animated slideInDown">Disclaimer</h1><nav aria-label="breadcrumb"><ol class="breadcrumb justify-content-center text-uppercase"><li class="breadcrumb-item"><a href="/" data-discover="true">Home</a></li><li class="breadcrumb-item text-white active" aria-current="page">Disclaimer</li></ol></nav></div></div>
    <section className={styles.disclaimerSection}>
      <div className={styles.contentArea}>
        <div className="container">
          <div className="row">
            <div className={styles.serviceLeadingSection}>
              <h4><span className={styles.snBlue}>Disclaimer – Xplore Destiny</span></h4>
              <div className={styles.serviceInfoContainer}>
                <p className={styles.discText}>
                  The services, consultations, remedies, and products offered by Xplore Destiny Astro & Vastu Kendra and Astrologer Vivek Tiwari are based on the principles of Astrology, Numerology, and Vastu Shastra, which are ancient sciences of guidance. While these practices have been followed for centuries and have benefited countless people, they are not scientifically proven. The efficacy of any consultation, prediction, or remedy (including gemstones, rudrakshas, poojas, yantras, or vastu corrections) may vary from person to person depending on multiple factors.
                </p>
              </div>

              <h4><span className={styles.snBlue}>1.</span> By availing of our services or purchasing any products:</h4>
              <ul className={styles.discList}>
                <li>You acknowledge and agree that the advice provided is guidance-oriented and should not be considered as a substitute for medical, legal, financial, psychological, or professional advice.</li>
                <li>We do not guarantee specific results, as outcomes depend on multiple circumstances, individual efforts, and external factors beyond our control.</li>
                <li>The efficacy of gemstones, rudrakshas, and other suggested remedies cannot be assured with absolute certainty, and results may differ for each individual.</li>
                <li>All gemstones and rudrakshas provided are authentic and lab-certified to the best of our knowledge, but their effects remain subjective and belief-based.</li>
                <li>Clients are advised to exercise their own discretion and judgment before following any advice or purchasing any product.</li>
                <li>Xplore Destiny Astro & Vastu Kendra and Astrologer Vivek Tiwari shall not be held liable for any direct, indirect, incidental, or consequential loss, damage, or inconvenience arising from the use of our services or products.</li>
                <li>By continuing to engage with our consultations, services, or products, you confirm that you have read, understood, and agreed to this disclaimer.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ServicesVT></ServicesVT>
    <Footer></Footer>
    </>
  );
};

export default Disclaimer;
