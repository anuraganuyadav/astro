// import React from 'react';
// import styles from '../css/latestblog.module.css';
// const LatestBlogs = () => {
//     return (
//         <>
//             {/* Latest Blog Start */}
//             <div className="container-xxl py-5">
//                 <div className="container">
//                     <div>
//                         <h2 className={`${styles.latestblogheading} text-center`}>Latest Articles</h2>
//                         <p className='container'>
//                             As the name indicates, Temples Hub one stop solution provider for all your pilgrimage/ temple tour needs. We provide unmatched temples tour packages like Chardham Packages, South India Temple Tours, Ooty Tours etc. Find our most popular packages below and book as per your choice.
//                         </p>
//                     </div>
//                     <div className="row g-4">
//                         {/* Blog Item 1 */}
//                         <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
//                             <div className="service-item rounded pt-3">
//                                 <div className="p-4">
//                                     <div className="blog-image">
//                                         <img src="img/num.jpeg" alt="Master Chefs" className="img-fluid rounded" />
//                                     </div>
//                                     <h5>Article1</h5>
//                                     <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
//                                     <button type="button" className="btn btn-danger">Read More</button>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Blog Item 2 */}
//                         <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
//                             <div className="service-item rounded pt-3">
//                                 <div className="p-4">
//                                     <div className="blog-image">
//                                         <img src="img/vas.jpeg" alt="Quality Food" className="img-fluid rounded" />
//                                     </div>
//                                     <h5>Article12</h5>
//                                     <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
//                                     <button type="button" className="btn btn-danger">Read More</button>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Blog Item 3 */}
//                         <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
//                             <div className="service-item rounded pt-3">
//                                 <div className="p-4">
//                                     <div className="blog-image">
//                                         <img src="img/sp.jpeg" alt="Online Order" className="img-fluid rounded" />
//                                     </div>
//                                     <h5>Article1</h5>
//                                     <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
//                                     <button type="button" className="btn btn-danger">Read More</button>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Blog Item 4 */}
//                         <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
//                             <div className="service-item rounded pt-3">
//                                 <div className="p-4">
//                                     <div className="blog-image">
//                                         <img src="img/astrology.webp" alt="Online Order" className="img-fluid rounded" />
//                                     </div>
//                                     <h5>Article1</h5>
//                                     <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
//                                     <button type="button" className="btn btn-danger">Read More</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Latest Blog End */}
//         </>
//     );
// };

// export default LatestBlogs;

import React from "react";
import styles from "../css/latestblog.module.css";
import commonStyles from "../css/common.module.css";
import blogs from "../js/blogsData";
import { Link } from "react-router-dom";


const LatestBlogs = () => {
  return (
    <>
      {/* Latest Blog Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div>
            <h2 className={`${styles.latestblogheading} text-center`}>
              Latest Blogs
            </h2>
            <p className={`${commonStyles.commonpara} container`}>
              Astrologer Vivek Tiwari’s articles provide deep insights into Astrology, Vastu, and Numerology with practical guidance for everyday life.
              Each write-up blends ancient knowledge with modern perspectives, making complex concepts easy to understand.
              His writings aim to educate, inspire, and empower readers seeking clarity and balance in their personal and professional journeys.
            </p>
          </div>
          <div className="row g-4">
            {/* Directly render all blogs */}
            {blogs.map((blog, index) => (
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay={`${index * 0.2}s`}
                key={blog.title}
              >
                <div className={`${styles.latestblg} rounded pt-3`}>
                  <div className="p-4">
                    <div className={styles["blog-image"]}>
                      <img
                        src={blog.imgSrc}
                        alt={blog.title}
                        className="img-fluid rounded"
                      />
                    </div>
                    <h5 className={styles.blgtitle}>{blog.title}</h5>
                    <Link to={`/blog/${blog.slug}`}>
                      <div className={styles.blgbtn}>
                        <button
                          type="button"
                          className="btn btn-danger service-item"
                        >
                          Read More
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Latest Blog End */}
    </>
  );
};

export default LatestBlogs;
