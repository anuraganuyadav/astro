import React, { useState } from 'react';
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';
import styles from "../components/css/productshopdetails.module.css"; // Update path if necessary
import { Link } from 'react-router-dom';

const ProductShopDetails = () => {
	const [activeSection, setActiveSection] = useState("overview"); // Default to 'overview'
	// Function to handle section click
	const handleSectionClick = (section) => {
		setActiveSection(section);
	};

	const [mainImage, setMainImage] = useState("img/products/bracelet.jfif");

	const handleThumbnailClick = (src) => {
		setMainImage(src);
	};

	return (
		<>
			<Navbar />
			<div className={`${styles.productdetailbanner} container-xxl py-5 bg-dark mb-5`}>
				<div className="container my-5 py-5">
					<div className="row align-items-center g-5">
						<div className="col-lg-6 text-center text-lg-start">
							{/* Add any content here if needed */}
						</div>
						<div className="col-lg-6 text-center text-lg-end overflow-hidden">
							<img className="img-fluid" src="img/heroimg.webp" alt="" />
						</div>
					</div>
				</div>
			</div>

			<div className="container mt-5">
				<div className="row">
					{/* Product Images */}
					<div className="col-md-6 mb-4">
						<img
							src={mainImage}
							alt="Product"
							className={`${styles.productimage} img-fluid rounded mb-3`}
							id="mainImage"
						/>
						{/* Thumbnails Section */}
						<div className={`${styles.thumbnailContainer} thumbnail-container`}>
							<img
								src="img/products/bracelet.jfif"
								alt="Thumbnail 1"
								className={styles.thumbnailrounded}
								onClick={() => handleThumbnailClick("img/products/coach.jfif")}
							/>
							<img
								src="img/products/bracelet.jfif"
								alt="Thumbnail 2"
								className={styles.thumbnailrounded}
								onClick={() => handleThumbnailClick("img/products/bracelet.jfif")}
							/>
							<img
								src="img/products/bracelet.jfif"
								alt="Thumbnail 3"
								className={styles.thumbnailrounded}
								onClick={() => handleThumbnailClick("img/products/crystal.jfif")}
							/>
							<img
								src="img/products/bracelet.jfif"
								alt="Thumbnail 4"
								className={styles.thumbnailrounded}
								onClick={() => handleThumbnailClick("img/products/bracelet.jfif")}
							/>
						</div>
					</div>

					{/* Product Details */}
					<div className="col-md-6">
						<h2 className="mb-3">Amethyst Gemstone, Katela Stone, Oval Shape</h2>
						<p className="text-muted mb-4">Category Name: WH1000XM4</p>
						<div className="mb-3">
							<span className="h4 me-2">$349.99</span>
							<span className="text-muted">
								<s>$399.99</s>
							</span>
						</div>

						<p className="mb-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab mollitia blanditiis tempora tempore quo et molestias eum? Modi enim illo deserunt est nihil sit hic quibusdam cumque earum dolorum!
						</p>

						{/* <div className="mb-4">
							<label htmlFor="quantity" className="form-label">Quantity:</label>
							<input type="number" className="form-control" id="quantity" value="1" min="1" style={{ width: '80px' }} />
						</div> */}
						<Link to="/product-checkout">
							<button className="btn btn-primary btn-lg mb-3 me-2">
								<i className="bi bi-cart-plus"></i> Order Now
							</button>
						</Link>
						<div className="mt-4">
							<h5>Key Points:</h5>
							<ul>
								<li>Lorem ipsum dolor sit</li>
								<li>Lorem ipsum dolor sit</li>

							</ul>
						</div>
					</div>

					<div className="col-lg-9">



						<div className={styles.itncontainer}>

							<div className={`${styles.sectiontitle} ${activeSection === "overview" ? styles.active : ""}`} onClick={() => handleSectionClick("overview")}>
								<p className={styles.detailsheading}>Overview &amp; Highlights</p>
							</div>

							<div className={`${styles.sectiontitle} ${activeSection === "inclusions" ? styles.active : ""}`} onClick={() => handleSectionClick("inclusions")}>
								<p className={styles.detailsheading}>Additional Information</p>
							</div>

							<div className={`${styles.sectiontitle} ${activeSection === "otherInfo" ? styles.active : ""}`} onClick={() => handleSectionClick("otherInfo")}>
								<p className={styles.detailsheading}>Need Help</p>
							</div>
						</div>

						{/* Content of each section */}
						{activeSection === "overview" && (

							<div className={styles.pkgdetails}>
								<svg xmlns="http://www.w3.org/2000/svg" width="9" height="40" viewBox="0 0 9 40" fill="none">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M0 4.44444V26.1111H4.44444V4.44444H8.88889V0H2.22222H0V2.22222V4.44444ZM8.88889 35.5556H4.44444V30H0V35.5556V37.7778V40H2.22222H8.88889V35.5556Z"
										fill="#01AFD1"
									/>
								</svg>
								<h3 className={styles.dthead}>Overview & Highlights</h3>
								<p className={styles.indvdetails}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto rerum nisi ullam asperiores vitae, repudiandae dolor doloribus a quo non maxime magni dolore minima perferendis, provident dolorem optio ipsa quae.</p>
							</div>
						)}


						{activeSection === "inclusions" && (
							<div className={styles.pkgdetails}>
								<svg xmlns="http://www.w3.org/2000/svg" width="9" height="40" viewBox="0 0 9 40" fill="none">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M0 4.44444V26.1111H4.44444V4.44444H8.88889V0H2.22222H0V2.22222V4.44444ZM8.88889 35.5556H4.44444V30H0V35.5556V37.7778V40H2.22222H8.88889V35.5556Z"
										fill="#01AFD1"
									/>
								</svg>
								<h3 className={styles.dthead}>Additional Information</h3>
								<div className={styles.inclusionscontainer}>
									<div className={styles.inclusionitem}>
										<img src="img/check-mark.png" alt="check mark" />
										<span>color</span>
										<p>Red</p>

									</div>

									<div className={styles.inclusionitem}>
										<img src="img/check-mark.png" alt="check mark" />
										<span>Weight</span>
										<p>0.5 gram</p>
									</div>

									<div className={styles.inclusionitem}>
										<img src="img/check-mark.png" alt="check mark" />
										<span>Quanity</span>
										<p>1</p>
									</div>
								</div>

							</div>
						)}



						{activeSection === "otherInfo" && (
							<div className={styles.pkgdetails}>
								<svg xmlns="http://www.w3.org/2000/svg" width="9" height="40" viewBox="0 0 9 40" fill="none">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M0 4.44444V26.1111H4.44444V4.44444H8.88889V0H2.22222H0V2.22222V4.44444ZM8.88889 35.5556H4.44444V30H0V35.5556V37.7778V40H2.22222H8.88889V35.5556Z"
										fill="#01AFD1"
									/>
								</svg>
								<h3 className={styles.dthead}>Need Help</h3>
								<p className={styles.indvdetails}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto rerum nisi ullam asperiores vitae, repudiandae dolor doloribus a quo non maxime magni dolore minima perferendis, provident dolorem optio ipsa quae.</p>
							</div>
						)}
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default ProductShopDetails;
