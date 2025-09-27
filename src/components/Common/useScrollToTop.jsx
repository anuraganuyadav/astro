// src/hooks/useScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

const useScrollToTop = () => {
	const location = useLocation(); // Get the current location (URL)

	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page on route change
	}, [location]); // The effect runs whenever the location (route) changes
};

export default useScrollToTop;
