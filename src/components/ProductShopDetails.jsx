import React, { useState } from 'react';
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';
import styles from "../components/css/productshopdetails.module.css";
import { Link } from 'react-router-dom';

const ProductShopDetails = () => {
	const [activeSection, setActiveSection] = useState("overview");
	const handleSectionClick = (section) => {
		setActiveSection(section);
	};

	const [mainImage, setMainImage] = useState("img/products/blue.webp");

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
							{/* Optional Banner Text */}
						</div>
						<div className="col-lg-6 text-center text-lg-end overflow-hidden">
							<img className="img-fluid" src="img/heroimg.webp" alt="Blue Sapphire Banner" />
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
								src="img/products/blue.webp"
								alt="Thumbnail 1"
								className={styles.thumbnailrounded}
								onClick={() => handleThumbnailClick("img/products/blue.webp")}
							/>
							<img
								src="img/products/blue.webp"
								alt="Thumbnail 2"
								className={styles.thumbnailrounded}
								onClick={() => handleThumbnailClick("img/products/blue.webp")}
							/>
							<img
								src="img/products/blue.webp"
								alt="Thumbnail 3"
								className={styles.thumbnailrounded}
								onClick={() => handleThumbnailClick("img/products/blue.webp")}
							/>
							<img
								src="img/products/blue.webp"
								alt="Thumbnail 4"
								className={styles.thumbnailrounded}
								onClick={() => handleThumbnailClick("img/products/blue.webp")}
							/>
						</div>
					</div>


					{/* Product Details */}
					<div className="col-md-6">
						<h2 className="mb-3">Blue Sapphire (Neelam) – 5 Carat</h2>
						<div className="mb-3">
							<span className="h4 me-2">₹4,900</span>
							<span className="text-muted">
								<s>₹5,500</s>
							</span>
						</div>

						<p className="mb-4">
							Blue Sapphire, also known as <strong>Neelam Ratna</strong>, is one of the most powerful gemstones associated with the planet <strong>Saturn (Shani)</strong>.
							This natural 5-carat Blue Sapphire enhances focus, wealth, prosperity, and stability in life. It is especially recommended for individuals seeking growth in business, career advancement, and mental clarity.
						</p>

						<Link to="/product-checkout">
							<button className="btn btn-primary btn-lg mb-3 me-2">
								<i className="bi bi-cart-plus"></i> Order Now
							</button>
						</Link>

						<div className="mt-4">
							<h5>Key Points:</h5>
							<ul>
								<li>Natural Blue Sapphire certified gemstone</li>
								<li>Weight: 5 Carat (approx. 5.5 Ratti)</li>
								<li>Best for Saturn (Shani) related remedies</li>
								<li>Brings success, wealth, and stability</li>
								<li>Highly recommended for business growth & career success</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-9 mt-5">
						<div className={styles.itncontainer}>
							<div
								className={`${styles.sectiontitle} ${activeSection === "overview" ? styles.active : ""}`}
								onClick={() => handleSectionClick("overview")}
							>
								<p className={styles.detailsheading}>Overview & Highlights</p>
							</div>
							<div
								className={`${styles.sectiontitle} ${activeSection === "inclusions" ? styles.active : ""}`}
								onClick={() => handleSectionClick("inclusions")}
							>
								<p className={styles.detailsheading}>Additional Information</p>
							</div>
							<div
								className={`${styles.sectiontitle} ${activeSection === "otherInfo" ? styles.active : ""}`}
								onClick={() => handleSectionClick("otherInfo")}
							>
								<p className={styles.detailsheading}>Need Help</p>
							</div>
						</div>

						{/* Overview */}
						{activeSection === "overview" && (
							<div className={styles.pkgdetails}>
								<h3 className={styles.dthead}>Overview & Highlights</h3>
								<p className={styles.indvdetails}>
									Blue Sapphire is one of the fastest-acting gemstones. When suitable, it can bring instant results
									like growth in career, improved financial status, and protection from negative energies.
									This 5-carat Blue Sapphire is carefully sourced and certified for authenticity.
								</p>
							</div>
						)}

						{/* Inclusions */}
						{activeSection === "inclusions" && (
							<div className={styles.pkgdetails}>
								<h3 className={styles.dthead}>Additional Information</h3>
								<div className={styles.inclusionscontainer}>
									<div className={styles.inclusionitem}>
										<img src="img/check-mark.png" alt="check mark" />
										<span>Color</span>
										<p>Deep Royal Blue</p>
									</div>
									<div className={styles.inclusionitem}>
										<img src="img/check-mark.png" alt="check mark" />
										<span>Weight</span>
										<p>5 Carat</p>
									</div>
									<div className={styles.inclusionitem}>
										<img src="img/check-mark.png" alt="check mark" />
										<span>Origin</span>
										<p>Sri Lanka (Ceylon)</p>
									</div>
									<div className={styles.inclusionitem}>
										<img src="img/check-mark.png" alt="check mark" />
										<span>Certification</span>
										<p>100% Natural & Certified</p>
									</div>
								</div>
							</div>
						)}

						{/* Other Info */}
						{activeSection === "otherInfo" && (
							<div className={styles.pkgdetails}>
								<h3 className={styles.dthead}>Need Help</h3>
								<p className={styles.indvdetails}>
									Our expert astrologers can guide you on whether Blue Sapphire is suitable for you
									based on your horoscope. For personalized consultation,
									please contact us on <strong>+91-8512088720</strong> or visit our <Link to="/contact-us">Contact Page</Link>.
								</p>
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
