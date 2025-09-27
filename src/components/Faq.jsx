// Faq.jsx
import React from 'react';
import styles from '.../../css/Faq.module.css'; // CSS Modules
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';
import ServicesVT from './ServicesVT';

const Faq = () => {
  const faqs = [
    {
      question: "What services does Xplore Destiny offer?",
      answer: `Xplore Destiny provides Astrology, Numerology, and Vastu Shastra consultations, along with Gemstone & Rudraksha guidance and sale, personalized remedies, pooja consultation, kundali making, dosha analysis (Kaal Sarp, Mangal, Pitri, etc.), name & signature correction, and career, marriage, and business consultations. Astrologer Vivek Tiwari also provides online classes for astrology, numerology, and vastu.`
    },
    {
      question: "Who is Astrologer Vivek Tiwari?",
      answer: `Astro Vivek Tiwari, District Secretary, All India Federation of Astrologer's Societies, Ghaziabad, is a renowned Astrologer, Numerologist, and Vastu Consultant with years of expertise in offering accurate predictions and practical remedies. He has enlightened countless lives by helping people in marriage, career, finance, property, and health-related matters.`
    },
    {
      question: "How can astrology help me in daily life?",
      answer: `Astrology helps in understanding your past, present, and future, guiding you to make better decisions in life. It provides remedies for challenges like career obstacles, delayed marriage, health issues, financial struggles, and relationship conflicts.`
    },
    {
      question: "What is numerology and how does it help?",
      answer: `Numerology is the study of numbers and their influence on your life. With numerology consultation, Vivek Tiwari helps you with lucky numbers, name corrections, business name selection, and mobile/vehicle number guidance.`
    },
    {
      question: "How does vastu consultation benefit me?",
      answer: `Vastu Shastra ensures that your living or working space aligns with positive cosmic energies. A vastu consultation helps in creating balance, attracting prosperity, and avoiding energy blockages. Vivek Tiwari provides vastu consultation for homes, offices, and corporate spaces in Ghaziabad and Delhi NCR, using a blend of ancient wisdom and scientific approach.`
    },
    {
      question: "Do you provide online consultations?",
      answer: `Yes. Xplore Destiny offers both online and in-person consultations. Clients from anywhere in India or abroad can connect via phone, WhatsApp, or video calls.`
    },
    {
      question: "How do I book an appointment with Astrologer Vivek Tiwari?",
      answer: `Appointments can be booked via:
      📞 Phone / WhatsApp-8512088720
      📅 Book via Calendly link: https://calendly.com/vivektiwari4india/20min?month=2025-09`
    },
    {
      question: "Do you sell gemstones and rudrakshas?",
      answer: `Yes. Xplore Destiny offers authentic and energized gemstones and rudrakshas, carefully selected as per your kundali or numerology chart. Each item is recommended after a detailed consultation to ensure it suits your planetary and energy requirements.`
    },
    {
      question: "How are gemstones recommended?",
      answer: `Gemstones are suggested based on your birth chart, planetary positions, and numerology calculations. Astro Vivek Tiwari ensures you get the right gemstone that enhances positive planetary influences and neutralizes negative ones.`
    },
    {
      question: "Do you provide lab-certified gemstones?",
      answer: `Yes. We only provide 100% genuine, lab-certified gemstones to ensure authenticity, effectiveness, and value for money.`
    },
    {
      question: "What types of rudrakshas do you provide?",
      answer: `We offer a wide range of authentic rudrakshas, including 1 Mukhi to 21 Mukhi Rudrakshas, Gauri Shankar Rudraksha, and Ganesh Rudraksha, each with unique benefits. All rudrakshas are energized and recommended as per individual needs.`
    },
    {
      question: "Why should I buy gemstones and rudrakshas from Xplore Destiny?",
      answer: `Every gemstone and rudraksha from Xplore Destiny is:
      ✅ Authentic & Lab-Certified
      ✅ Energized before delivery
      ✅ Recommended only after proper consultation
      ✅ Directly sourced & reasonably priced`
    },
    {
      question: "Can vastu defects be corrected without demolition?",
      answer: `Yes. Vivek Tiwari specializes in non-demolition vastu remedies using placements, colors, mirrors, symbols, and energy-balancing tools, avoiding expensive structural changes.`
    },
  ];

  return (
    <>
       <Navbar></Navbar>
    <section className={styles.faqSection}>
      <div className="container">
        <div className={styles.faqTitle}>
          <h4>❓ Frequently Asked Questions (FAQs) – Xplore Destiny Astro & Vastu Kendra</h4>
        </div>

        <ul className={styles.faqList} id="faqAccordion">
          {faqs.map((faq, index) => (
            <li key={index} data-aos="fade-up" data-aos-delay="100">
              <a
                className={styles.faqQuestion}
                data-bs-toggle="collapse"
                href={`#faq-${index + 1}`}
                role="button"
                aria-expanded="false"
                aria-controls={`faq-${index + 1}`}
              >
                {faq.question} <i className="fas fa-arrow-up"></i>
              </a>
              <div
                id={`faq-${index + 1}`}
                className="collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
    <ServicesVT></ServicesVT>
    <Footer></Footer>
    </>
  );
};

export default Faq;
