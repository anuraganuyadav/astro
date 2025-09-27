import React, { useState } from 'react';
import styles from "../css/productenquerymodal.module.css";

function ProductEnqueryModal({ onClose }) {
	const [formData, setFormData] = useState({
		product_name: '',
		name: '',
		number: '',
		email: '',
		propertyType: '',
		message: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Implement form submission logic
		console.log('Form Data Submitted:', formData);
		onClose(); // Close modal after submission
	};

	return (
		<>
			<div className={styles.modalEnqueryOverlay}>
				<div className={styles.modalEnqueryContent}>
					<span
						className={styles.closeEnqueryModal}
						onClick={onClose}
						aria-label="Close Enquiry Modal"
					>
						&times;
					</span>
					<h2 className={styles.enqueryheading}> Enquiry Now </h2>
					<form className={styles.enqueryform} onSubmit={handleSubmit}>

						<input
							type="text"
							id="product_name"
							name="product_name"
							value={formData.product_name}
							onChange={handleChange}
							placeholder="Amethyst Gemstone, Katela Stone, Oval Shape"
							className={styles.enqueryinput}
							aria-label=""
							disabled
						/>

						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Enter your Name"
							required
							className={styles.enqueryinput}
							aria-label="Your Name"
						/>
						<input
							type="text"
							id="number"
							name="number"
							value={formData.number}
							onChange={handleChange}
							placeholder="Enter your Mobile No."
							required
							className={styles.enqueryinput}
							maxLength={10}
							pattern="\d{10}"
							title="Please enter a valid 10-digit mobile number."
							aria-label="Mobile Number"
						/>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Enter your Email Id"
							required
							className={styles.enqueryinput}
							aria-label="Email Address"
						/>
						{/* <select
							id="propertyType"
							name="propertyType"
							value={formData.propertyType}
							onChange={handleChange}
							required
							className={styles.enqueryselect}
							aria-label="Select Package Type"
						>
							<option value="" disabled>Select Package Type</option>
							<option value="International">International</option>
							<option value="Domestic">Domestic</option>
						</select> */}
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							rows="5"
							placeholder="Enter your Message"
							required
							className={styles.enquerytextarea}
							aria-label="Message"
						></textarea>
						<button type="submit" className={styles.enquerysubmitButton}>
							Submit
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default ProductEnqueryModal;
