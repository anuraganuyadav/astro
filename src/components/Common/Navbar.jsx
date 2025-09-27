// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import HeaderEnquery from '../Modal/HeaderEnquery';
// import CommonEnquery from './CommonEnquery';

// const Navbar = () => {

//     const [isEnqueryModalOpen, setEnqueryModalOpen] = useState(false); // Track modal state

//     // Handle Enquiry modal open
//     const handleEnqueryClick = () => {
//         setEnqueryModalOpen(true);
//     };

//     // Handle Enquiry modal close
//     const handleEnqueryCloseModal = () => {
//         setEnqueryModalOpen(false);
//     };

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
//                 <a href="" className="navbar-brand p-0">
//                     <h1 className="text-primary m-0">astrology.in</h1>
//                 </a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//                     <span className="fa fa-bars"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarCollapse">
//                     <div className="navbar-nav ms-auto py-0 pe-4">
//                         <Link to="/" className="nav-item nav-link active">ASTRO V.T</Link>

//                         <div className="nav-item dropdown">
//                             <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Astrology</a>
//                             <div className="dropdown-menu m-0">
//                                 <Link to={`/service-details/astrology/match-making`} className="dropdown-item">Match Making</Link>
//                             </div>
//                         </div>

//                         <div className="nav-item dropdown">
//                             <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Numerology</a>
//                             <div className="dropdown-menu m-0">
//                                 <Link to={`/service-details/numerology/love-compalition`} className="dropdown-item">Love Compalition</Link>
//                                 <Link to={`/service-details/numerology/business`} className="dropdown-item">Business</Link>
//                                 <Link to={`/service-details/numerology/career-education`} className="dropdown-item">Career & Education</Link>
//                                 <Link to={`/service-details/numerology/name-change`} className="dropdown-item">Name Change</Link>
//                             </div>
//                         </div>

//                         <div className="nav-item dropdown">
//                             <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Vastu</a>
//                             <div className="dropdown-menu m-0">
//                                 <Link to={`/service-details/vastu/vast-home`} className="dropdown-item">Vastu for Home</Link>
//                                 <Link to={`/service-details/vastu/vastu-Office`} className="dropdown-item">Vastu for Office</Link>
//                             </div>
//                         </div>

//                         <div className="nav-item dropdown">
//                             <Link to="/astro-shop" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">AstroShop</Link>
//                             <div className="dropdown-menu m-0">
//                                 <Link to="/astro-shop/gemstones" className="dropdown-item">
//                                     Gemstones/नवरत्न
//                                 </Link>
//                                 <Link to="/astro-shop/bracelets" className="dropdown-item">
//                                     Bracelets/ब्रेसलेट्स
//                                 </Link>
//                                 <Link to="/astro-shop/crystal" className="dropdown-item">
//                                     Crystal/स्फटिक
//                                 </Link>
//                                 <Link to="/astro-shop/conch" className="dropdown-item">
//                                     Conch/शंख
//                                 </Link>
//                             </div>
//                         </div>

//                         <a href="#" className="nav-item nav-link">Contact</a> {/* Open modal on click */}
//                     </div>
//                     <a href="#" className="btn btn-primary py-2 px-4" onClick={handleEnqueryClick}>Book A Appointment</a>
//                 </div>
//             </nav>

//             {/* Only show modal if it's open */}
//             {isEnqueryModalOpen && <HeaderEnquery onClose={handleEnqueryCloseModal} />}

//             <CommonEnquery onEnqueryClick={handleEnqueryClick} /> {/* Pass function to CommonEnquery */}
//         </>
//     );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import HeaderEnquery from "../Modal/HeaderEnquery";
// import CommonEnquery from "./CommonEnquery";
// import useScrollToTop from "./useScrollToTop"; // Import the custom hook
// import styles from "../css/Navbar.module.css";
// import logo1 from "../../assets/logo/logo1.jpeg";

// const Navbar = () => {
//   const [isEnqueryModalOpen, setEnqueryModalOpen] = useState(false); // Track modal state

//   // Handle Enquiry modal open
//   const handleEnqueryClick = () => {
//     setEnqueryModalOpen(true); // Open the enquiry modal
//   };

//   // Handle Enquiry modal close
//   const handleEnqueryCloseModal = () => {
//     setEnqueryModalOpen(false); // Close the enquiry modal
//   };

//   // Use the custom hook to scroll to top on page load or action
//   useScrollToTop(); // Scrolls to top on route change

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
//         <Link to="/" className="navbar-brand p-0">
//           <img src={logo1} alt="astrology.in" className={styles.logonav} />
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarCollapse"
//         >
//           <span className="fa fa-bars"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarCollapse">
//           <div className="navbar-nav ms-auto py-0 pe-4">
//             <Link to="/" className="nav-item nav-link active">
//               Astro Vivek Tiwari
//             </Link>
//             <div className="nav-item dropdown">
//               <a
//                 href="#"
//                 className="nav-link dropdown-toggle"
//                 data-bs-toggle="dropdown"
//               >
//                 Astrology
//               </a>
//               <div className={`${styles.sumbenudrp} dropdown-menu m-0`}>
//                 <Link to="/astrology/ Career & Business Guidance" className="dropdown-item">
//                   📜 Career & Business Guidance
//                 </Link>
//                 <Link
//                   to="/astrology/marriage-compatibility"
//                   className="dropdown-item"
//                 >
//                   💍 Marriage & Relationship Compatibility
//                 </Link>
//                 <Link to="/astrology/property-wealth" className="dropdown-item">
//                   🏠 Property & Wealth Astrology
//                 </Link>
//                 <Link
//                   to="/astrology/remedies-gemstone"
//                   className="dropdown-item"
//                 >
//                   🪔 Personalized Remedies, Pooja & Gemstone Consultation
//                 </Link>
//                 <Link to="/astrology/kundali-nirman" className="dropdown-item">
//                   📖 Kundali Nirman
//                 </Link>
//                 <Link to="/astrology/kaal-sarp-dosha" className="dropdown-item">
//                   🐍 Kaal Sarp Dosha
//                 </Link>
//                 <Link to="/astrology/mangal-dosha" className="dropdown-item">
//                   🔥 Mangal Dosha
//                 </Link>
//                 <Link to="/astrology/pitri-dosha" className="dropdown-item">
//                   🕊️ Pitri Dosha
//                 </Link>
//               </div>
//             </div>
//             <div className="nav-item dropdown">
//               <a
//                 href="#"
//                 className="nav-link dropdown-toggle"
//                 data-bs-toggle="dropdown"
//               >
//                 Numerology
//               </a>
//              <div className={`${styles.sumbenudrp} dropdown-menu m-0`}>
//                 <Link
//                   to={`/service-details/numerology/love-compalition`}
//                   className="dropdown-item"
//                 >
//                   ✍️ Name Correction & Signature Analysis
//                 </Link>
//                 <Link
//                   to={`/service-details/numerology/business`}
//                   className="dropdown-item"
//                 >
//                   🔮 Lucky Numbers & Dates Guidance
//                 </Link>
//                 <Link
//                   to={`/service-details/numerology/career-education`}
//                   className="dropdown-item"
//                 >
//                   ❤️ Love & Marriage Compatibility
//                 </Link>
//                 <Link
//                   to={`/service-details/numerology/name-change`}
//                   className="dropdown-item"
//                 >
//                   🏢 Business Name Numerology
//                 </Link>
//                 <Link
//                   to={`/service-details/numerology/name-change`}
//                   className="dropdown-item"
//                 >
//                   📱 Mobile Number & Vehicle Number Analysis
//                 </Link>
//                 <Link
//                   to={`/service-details/numerology/name-change`}
//                   className="dropdown-item"
//                 >
//                   🕉️ Customized Numerology Remedies
//                 </Link>
//               </div>
//             </div>
//             <div className="nav-item dropdown">
//               <a
//                 href="#"
//                 className="nav-link dropdown-toggle"
//                 data-bs-toggle="dropdown"
//               >
//                 Vastu
//               </a>
//                    <div className={`${styles.sumbenudrp} dropdown-menu m-0`}>
//                 <Link
//                   to={`/service-details/vastu/vast-home`}
//                   className="dropdown-item"
//                 >
//                   🏠 Residential Vastu Consultation
//                 </Link>
//                 <Link
//                   to={`/service-details/vastu/vastu-Office`}
//                   className="dropdown-item"
//                 >
//                   🏢 Commercial Vastu Consultation
//                 </Link>
//                 <Link
//                   to={`/service-details/vastu/vastu-Office`}
//                   className="dropdown-item"
//                 >
//                   🌆 Property Selection & Layout Planning
//                 </Link>
//               </div>
//             </div>
//             <div className="nav-item dropdown">
//               <Link
//                 to="/astro-shop"
//                 className="nav-link dropdown-toggle"
//                 data-bs-toggle="dropdown"
//               >
//                 AstroShop
//               </Link>
//            <div className={`${styles.sumbenudrp} dropdown-menu m-0`}>
//                 <Link to="/astro-shop/gemstones" className="dropdown-item">
//                   Gemstones/नवरत्न
//                 </Link>
//                 <Link to="/astro-shop/bracelets" className="dropdown-item">
//                   Bracelets/ब्रेसलेट्स
//                 </Link>
//                 <Link to="/astro-shop/crystal" className="dropdown-item">
//                   Crystal/स्फटिक
//                 </Link>
//                 <Link to="/astro-shop/conch" className="dropdown-item">
//                   Conch/शंख
//                 </Link>
//               </div>
//             </div>
//             <Link to="/contact-us" className="nav-item nav-link">
//               Contact
//             </Link>{" "}
//             {/* Open modal on click */}
//           </div>
//           <div>
//             <a
//               href="#"
//               className="btn btn-primary py-2 px-1"
//               onClick={handleEnqueryClick}
//             >
//               Book Appointment
//             </a>
//           </div>
//         </div>
//       </nav>
//       {/* Only show modal if it's open */}
//       {isEnqueryModalOpen && (
//         <HeaderEnquery onClose={handleEnqueryCloseModal} />
//       )}
//       <CommonEnquery onEnqueryClick={handleEnqueryClick} />{" "}
//       {/* Pass function to CommonEnquery */}
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderEnquery from "../Modal/HeaderEnquery";
import CommonEnquery from "./CommonEnquery";
import useScrollToTop from "./useScrollToTop";
import styles from "../css/Navbar.module.css";
import logo1 from "../../assets/logo/logo1.jpeg";
import categorywiseServicesData from "../js/categorywiseServicesData";

const Navbar = () => {
  const [isEnqueryModalOpen, setEnqueryModalOpen] = useState(false);

  const handleEnqueryClick = () => setEnqueryModalOpen(true);
  const handleEnqueryCloseModal = () => setEnqueryModalOpen(false);

  useScrollToTop();

  // Extract unique categories from data
  const categories = [
    ...new Set(categorywiseServicesData.map((item) => item.category)),
  ];

  // Function to get subcategories for a category
  const getSubcategories = (category) => {
    return categorywiseServicesData
      .filter((item) => item.category === category)
      .map((item) => ({
        subcategory: item.subcategory,
        title: item.title,
        icon: item.icon,
      }));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <img src={logo1} alt="astrology.in" className={styles.logonav} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pe-4">
            <Link to="/about-us" className="nav-item nav-link active">
              Astro Vivek Tiwari
            </Link>

            {/* Dynamic Dropdowns */}
            {categories.map((category) => (
              <div className="nav-item dropdown" key={category}>
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </a>
                <div className={`${styles.sumbenudrp} dropdown-menu m-0`}>
                  {getSubcategories(category).map((sub, index) => (
                    <Link
                      key={index}
                      to={`/service-details/${category}/${sub.subcategory}`}
                      className="dropdown-item"
                    >
                      {sub.icon} {sub.title} {/* Show emoji here */}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="nav-item dropdown">
              <Link
                to="/astro-shop"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Products
              </Link>
              <div className={`${styles.sumbenudrp} dropdown-menu m-0`}>
                <Link to="/astro-shop/gemstones" className="dropdown-item">
                  Gemstones
                </Link>
                <Link to="/astro-shop/rudrakash" className="dropdown-item">
                  Rudrakash
                </Link>
                <Link to="/astro-shop/other-products" className="dropdown-item">
                  Other Products
                </Link>
                {/* <Link to="/astro-shop/conch" className="dropdown-item">
                  Conch/शंख
                </Link> */}
              </div>
            </div>
            {/* <Link to="/contact-us" className="nav-item nav-link">
              Contact
            </Link>/ */}
          </div>

          <div>
            {/* <a
              href="#"
              className="btn btn-primary py-2 px-1"
              onClick={handleEnqueryClick}
            >
              Book Appointment
            </a> */}
            <a href="https://calendly.com/vivektiwari4india/20min?month=2025-09" className="btn btn-primary py-2 px-1" target="blank">
              Book Appointment
            </a>
          </div>
        </div>
      </nav>

      {isEnqueryModalOpen && (
        <HeaderEnquery onClose={handleEnqueryCloseModal} />
      )}
      <CommonEnquery onEnqueryClick={handleEnqueryClick} />
    </>
  );
};

export default Navbar;
