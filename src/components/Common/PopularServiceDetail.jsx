import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../css/servicesdetails.module.css";
import popularServicesData from "../js/popularServicesData"; // correct path
import AppoinmentEnquery from "./AppoinmentEnquery";
import PopularServices from "./PopularServices";
// import popularServicesData from "../popularServicesData";

const PopularServiceDetail = () => {
	// Extract category and subcategory from URL params
	const { category } = useParams();

	// Filter data based on category and subcategory
	const filteredData = popularServicesData.filter(
  (service) => service.link.toLowerCase() === `/service-details/${category.toLowerCase()}`
);

	return (
		<>
			<Navbar />

			<div
				className={`${styles.servicedetailbanner} container-xxl py-5 bg-dark mb-5`}
			>
				<div className="container my-5 py-5">
					<div className="row align-items-center g-5">
						<div className="col-lg-6 text-center text-lg-start">
							{/* Add any content here if needed */}
						</div>
						<div className="col-lg-6 text-center text-lg-end overflow-hidden">
							{filteredData.length > 0 && (
								<img
									className="img-fluid"
									src={filteredData[0].imgSrc}
									alt={filteredData[0].altText || "Service Banner"}
								/>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div
					className="col-md-8"
					style={{ marginRight: "15px", marginLeft: "15px" }} >
					{filteredData.map((service, index) => (
						<div className={styles.servicepagecontent1} key={index}>

							<h1 className="">{service.title} </h1>
							{/* <p>
								{service.description}
							</p> */}
							<div
								dangerouslySetInnerHTML={{ __html: filteredData[0].description }}
							></div>


						</div>
					))}
				</div>

				<AppoinmentEnquery></AppoinmentEnquery>
				<PopularServices></PopularServices>

			</div>
	<popularServicesData></popularServicesData>
			<Footer />

			
		</>
	);
};

export default PopularServiceDetail;
