import React, { useState } from "react";
import styles from "../css/popularproducts.module.css";
import commonStyles from "../css/common.module.css";
import Pagination from "../Common/Pagination";
import { products } from "../js/productData";
import { Link } from "react-router-dom";
import ProductEnqueryModal from "../Modal/ProductEnqueryModal";

const PopularProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Filter active products
  const activeProducts = products.filter(product => product.popular_products === "Active");

  // Pagination logic
  const postsPerPage = 8;
  const totalPosts = activeProducts.length;  // Use the length of filtered products
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Get products for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = activeProducts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

    // Scroll to the top (Optional)
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isEnqueryModalOpen, setEnqueryModalOpen] = useState(false); // Track modal state

  // Handle Enquiry modal open
  const handleEnqueryClick = () => {
    setEnqueryModalOpen(true); // Open the enquiry modal
  };

  // Handle Enquiry modal close
  const handleEnqueryCloseModal = () => {
    setEnqueryModalOpen(false); // Close the enquiry modal
  };


  return (
    <>
      <section className={styles.sectionblogwrap}>
        <div>
          <h2 className={`${styles.popularheading} text-center`}>Popular Products</h2>
             <p className={`${commonStyles.commonpara} container`}>
           Xplore Destiny offers authentic gemstones, Rudraksha, and spiritual bracelets, energized for maximum positive impact. Each product is carefully selected to enhance well-being, attract prosperity, and bring inner peace. Trusted for quality and purity, these sacred items support spiritual growth and balance in daily life.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {currentPosts.map((post, index) => (
                  <div key={index} className="col-lg-3 col-md-6 mb-5">
                    <div className="shop-item">
                      <div className={`${styles.shopimg} shop-thumb`}>
                        <img src={post.image} alt="" className="img-fluid" />
                      </div>

                      <div className={`${styles.shopbord} shop-item-content`}>
                        <div className="shop-item-meta mb-3 mt-4 d-flex justify-content-between align-items-center">
                          <div className="price-section">
                            <span className={`${styles.discountprice} text-danger`}>₹200</span>
                            <span className={`${styles.originalprice} text-muted`}>₹250</span>
                          </div>
                        </div>
                        <div>
                          <h6 className={styles.productsname}>{post.title}</h6>
                        </div>


                        <div className={styles.productBtns}>
                          <button type="button" className={`${styles.prinvBtn} btn btn-dark`} onClick={handleEnqueryClick}>Enquery Now</button>
                          <Link to="/product-details">
                            <button type="button" className={`${styles.prinvBtn} btn btn-dark`}>Details</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </section>

      {isEnqueryModalOpen && <ProductEnqueryModal onClose={handleEnqueryCloseModal} />}
    </>
  );
};

export default PopularProduct;
