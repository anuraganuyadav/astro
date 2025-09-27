
import React from 'react';

const CommonEnquery = ({ onEnqueryClick }) => {
	return (
		<>
			<div>
				<div className="horizontally-enquery-container">
					<a href="#" className="horizontally-enquery-btn" onClick={onEnqueryClick}>
						Enquery Now
					</a>
				</div>
			</div>
		</>
	);
};

export default CommonEnquery;




// import React, { useState } from 'react';
// import HeaderEnquery from '../Modal/HeaderEnquery';


// const CommonEnquery = () => {

// 	const [isEnqueryModalOpen, setEnqueryModalOpen] = useState(false); // Track modal state

// 	// Handle Enquiry button click
// 	const handleEnqueryClick = () => {
// 		setEnqueryModalOpen(true); // Open modal on Enquiry button click
// 	};

// 	// Handle Enquiry modal close
// 	const handleEnqueryCloseModal = () => {
// 		setEnqueryModalOpen(false); // Close modal
// 	};

// 	return (
// 		<>
// 			<div>
// 				<div className="horizontally-enquery-container">
// 					<a href="#" className="horizontally-enquery-btn" onClick={handleEnqueryClick} >
// 						Appointment Now
// 					</a>
// 				</div>

// 			</div>

// 			{isEnqueryModalOpen && <HeaderEnquery onClose={handleEnqueryCloseModal} />}



// 		</>
// 	)
// }

// export default CommonEnquery


