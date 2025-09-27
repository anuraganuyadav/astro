import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './css/astroshopproduct.module.css';
import Pagination from './Common/Pagination';
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';
import { products, getPaginatedProducts, calculateTotalPages } from './js/productData';
import ProductEnqueryModal from './Modal/ProductEnqueryModal';
import PopularProduct from './Common/PopularProducts';


const AstroShopProduct = () => {

	const [isEnqueryModalOpen, setEnqueryModalOpen] = useState(false); // Track modal state

	// Handle Enquiry modal open
	const handleEnqueryClick = () => {
		setEnqueryModalOpen(true); // Open the enquiry modal
	};

	// Handle Enquiry modal close
	const handleEnqueryCloseModal = () => {
		setEnqueryModalOpen(false); // Close the enquiry modal
	};



	const { category } = useParams(); // Get category from URL
	const [currentPage, setCurrentPage] = useState(1);

	// Filter products based on the category if available
	const filteredProducts = category
		? products.filter(product => product.category_name.toLowerCase() === category.toLowerCase())
		: products; // If no category, show all products

	const productsPerPage = 4;
	const totalPages = calculateTotalPages(filteredProducts, productsPerPage);

	// Get the products for the current page
	const currentPosts = getPaginatedProducts(currentPage, productsPerPage, filteredProducts);

	// Handle page change
	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<>
			<Navbar />

			{/* Banner Section */}
			<div className={`${styles.productherobanner} container-xxl py-5 bg-dark mb-5`}>
				<div className="container my-5 py-5">
					<div className="row align-items-center g-5">
						<div className="col-lg-6 text-center text-lg-start">
							{/* Add any content here if needed */}
						</div>
						<div className="col-lg-6 text-center text-lg-end overflow-hidden">
							<img className="img-fluid" src="/img/heroimg.webp" alt="" />
						</div>
					</div>
				</div>
			</div>

			<section className={styles.sectionshopwrap}>
				<div>
					<h2 className={`${styles.popularshopheading} text-center`}>
						{category ? `${category} Products` : 'All Products'}
					</h2>
					{/* <p className="container">
						As the name indicates, Temples Hub is your one-stop solution provider for all your pilgrimage/temple tour needs. We provide unmatched temple tour packages like Chardham Packages, South India Temple Tours, Ooty Tours, etc. Find our most popular packages below and book as per your choice.
					</p> */}
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
														<span className={`${styles.discountprice} text-danger`}>₹4900</span>
														<span className={`${styles.originalprice} text-muted`}>₹5500</span>
													</div>
												</div>
												<div>
													<h6 className={styles.productsname}>{post.title}</h6>
												</div>
												{/* <div>
													<p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
												</div> */}

												<div className={styles.productBtns}>
													<button type="button" className={`${styles.prinvBtn} btn btn-dark`} onClick={handleEnqueryClick}>Enquery Now</button>
													<Link to="/product-details">
														<button type="button" className={`${styles.prinvBtn} btn btn-dark`}>
															Details
														</button>
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
			<PopularProduct></PopularProduct>
			<Footer />

		</>
	);
};

export default AstroShopProduct;
