import React from "react";
import Footer from './Common/Footer';
import Navbar from './Common/Navbar';
import ServicesVT from "./ServicesVT";
import { Link } from "react-router-dom";
// import styles from ".../../css/termscondition.module.css";

function TermsCondition() {

	return (
		<>
			<Navbar></Navbar>
			<div className="container-xxl position-relative p-0">
				<div className="container-xxl py-5 bg-dark hero-header mb-5">
					<div className="container text-center my-5 pt-5 pb-4">
						<h1 className="display-3 text-white mb-3 animated slideInDown">Terms Condition</h1>
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb justify-content-center text-uppercase">
								<li className="breadcrumb-item"><Link to="/">Home</Link></li>

								<li className="breadcrumb-item text-white active" aria-current="page">Terms Condition</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>


			<section className="">
				<div
					className="content-area recent-property padding-top-40"
					style={{ backgroundColor: "#FFF" }}
				>
					<div className="container">
						<div className="row">
							<div className="serviceLeadingSection">
								{/* <h4>
									<span className="sn blue">1.</span>
									<span className="st blue">Our services</span>
								</h4> */}

								<div className="serviceInfoContainer">
									<h6 className="serviceLead">Acceptance of Terms A clear statement that using the product constitutes agreement to the T&Cs.
										Website is operated by VIVEK KUMAR TIWARI </h6>
									<p className="serviceDetails"><strong style={{ color: "black"}}>1:-  </strong>
										User Obligations Rules for using the product no illegal activity, no harassment, age requirements.
									</p>
									<p className="serviceDetails"><strong style={{ color: "black"}}>2:-  </strong>
										Intellectual Property Defines who owns the content company owns the product; users own their uploaded content, subject to your license.
									</p>
										<p className="serviceDetails"><strong style={{ color: "black"}}>3:-  </strong>
										Limitation of Liability A clause limiting the company's financial and legal responsibility for issues arising from product use.
									</p>
									<p className="serviceDetails"><strong style={{ color: "black"}}>4:-  </strong>

										Warranties and Disclaimers Usually states the product is provided "as is" and disclaims any implied warranties crucial for risk management.
									</p>
									<p className="serviceDetails"><strong style={{ color: "black"}}>5:-  </strong>
										Governing Law & Dispute Resolution Specifies the jurisdiction in India whose laws govern the agreement and how disputes will be settled.
									</p>
									<p className="serviceDetails"><strong style={{ color: "black"}}>6:-  </strong>
										Termination Your right to suspend or terminate a user's account for violating the terms.
									</p>
									<ul>
										<li><strong>Return Policy :</strong> If any return it will be done within 7 working days.</li>
										<li><strong>Refund Policy:</strong> If any refund approved by the company it will take 7 working days to cblackit to your original source account.</li>
										<li><strong>Shipping Policy:</strong>All the products will be deliveblack to your location within 7 working days.</li>

									</ul>
									<div className="secionLine lineColorBlue"></div>
								</div>
								{/* Repeat serviceInfoContainer as needed */}
							</div>

						</div>
					</div>
				</div>
			</section>
			<ServicesVT></ServicesVT>
			<Footer></Footer>
		</>
	);
}

export default TermsCondition;
