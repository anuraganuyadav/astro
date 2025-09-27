
import React, { useState } from 'react';
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';
import styles from ".../../css/productcheckout.module.css"; // Update path if necessary
import { Link } from 'react-router-dom';

const ProductCheckout = () => {
	// Add quantity to state
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		state: '',
		phone: '',
		address: '',
		city: '',
		zipCode: '',
		country: '',
		cardNumber: '',
		cardExpiry: '',
		cardCVV: '',
	});

	// Add quantity state
	const [quantity, setQuantity] = useState(1);  // Default quantity to 1

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleQuantityChange = (action) => {
		setQuantity(prevQuantity => {
			if (action === 'increase') {
				return prevQuantity + 1;
			} else if (action === 'decrease' && prevQuantity > 1) {
				return prevQuantity - 1;
			}
			return prevQuantity;
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission (e.g., API call)
		alert('Order submitted successfully!');
	};

	return (
		<>
			<Navbar />
			<div className={`${styles.checkoutbanner} container-xxl py-5 bg-dark mb-5`}>
				<div className="container my-5 py-5">
					<div className="row align-items-center g-5">
						<div className="col-lg-6 text-center text-lg-start">
							{/* Add any content here if needed */}
						</div>
						<div className="col-lg-6 text-center text-lg-end overflow-hidden">
							<img className="img-fluid" src="img/products/blue.webp" alt="" />
						</div>
					</div>
				</div>
			</div>

			<div className="container mt-5">
				<div className="row">
					<div className="col-md-8">
						<h3 className="mb-4">Billing Information</h3>
						<form onSubmit={handleSubmit}>
							<div className="row">
								{/* Billing Information Fields */}
								<div className="mb-3 col-md-12">
									<label htmlFor="fullName" className="form-label">Full Name</label>
									<input
										type="text"
										className="form-control"
										id="fullName"
										name="fullName"
										value={formData.fullName}
										onChange={handleChange}
										required
									/>
								</div>
								{/* Add other fields like email, address, etc. here */}
								<div className="mb-3 col-md-6">
									<label htmlFor="email" className="form-label">Email Address</label>
									<input
										type="email"
										className="form-control"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="mb-3 col-md-6">
									<label htmlFor="phone" className="form-label">Phone</label>
									<input
										type="text"
										className="form-control"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="mb-3 col-md-6">
									<label htmlFor="address" className="form-label">Address</label>
									<input
										type="text"
										className="form-control"
										id="address"
										name="address"
										value={formData.address}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="mb-3 col-md-6">
									<label htmlFor="country" className="form-label">Country</label>
									<input
										type="text"
										className="form-control"
										id="country"
										name="country"
										value={formData.country}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="mb-3 col-md-6">
									<label htmlFor="state" className="form-label">State</label>
									<input
										type="text"
										className="form-control"
										id="state"
										name="state"
										value={formData.state}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="mb-3 col-md-6">
									<label htmlFor="city" className="form-label">City</label>
									<input
										type="text"
										className="form-control"
										id="city"
										name="city"
										value={formData.city}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="mb-3 col-md-6">
									<label htmlFor="zipCode" className="form-label">Zip Code</label>
									<input
										type="text"
										className="form-control"
										id="zipCode"
										name="zipCode"
										value={formData.zipCode}
										onChange={handleChange}
										required
									/>
								</div>
							</div>
						</form>
					</div>

					{/* Order Summary */}
					<div className="col-md-4">
						<h3 className={`${styles.orderheading} mb-4`}>Order Summary</h3>
						{/* Product Image */}
						<div className={styles.productimage}>
							<img className="img-fluid" src="img/products/blue.webp" alt="Amethyst Gemstone Bracelet" />
						</div>
						<ul className={`${styles.listsummery} list-group`}>
							<li className="list-group-item">
								<strong>Product</strong>: Blue Sapphire 5 Carat
							</li>
							<li className="list-group-item">
								<strong>Price</strong>: ₹4900
							</li>
							<li className="list-group-item">
								<strong>Quantity</strong>:
								<button
									type="button"
									onClick={() => handleQuantityChange('decrease')}
									className={`${styles.button} btn btn-outline-dark`}>
									-
								</button>
								<span className={styles.quantity}>{quantity}</span>
								<button
									type="button"
									onClick={() => handleQuantityChange('increase')}
									className={`${styles.button} btn btn-outline-dark`}>
									+
								</button>
							</li>
							<li className="list-group-item">
								<strong>Total Amount</strong>: ₹{(4900 * quantity).toFixed(2)}
							</li>
						</ul>

						<div className={styles.checkoutBtns}>

							<button type="button" className={`${styles.checkBtn} btn btn-dark`}>
								Checkout Now
							</button>

						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default ProductCheckout;
