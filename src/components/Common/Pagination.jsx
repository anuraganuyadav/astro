import React from 'react';
import styles from '../css/pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	const handlePageChange = (page) => {
		if (page >= 1 && page <= totalPages) {
			onPageChange(page);
		}
	};

	const pageNumbers = [];
	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	return (
		<div className={styles.pagination}>
			<button
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className={styles.pageBtn}
			>
				Prev
			</button>
			{pageNumbers.map((page) => (
				<button
					key={page}
					onClick={() => handlePageChange(page)}
					className={`${styles.pageBtn} ${currentPage === page ? styles.active : ''}`}
				>
					{page}
				</button>
			))}
			<button
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className={styles.pageBtn}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
