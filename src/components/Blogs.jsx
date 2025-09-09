import React, { useState } from 'react';
import styles from './css/blogs.module.css';
import Footer from './Common/Footer';
import Navbar from './Common/Navbar';
import Pagination from './Common/Pagination';
import blogs from './js/blogsData';


const Blogs = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Pagination logic
    const postsPerPage = 3;
    const totalPosts = blogs.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    // Get blogs for the current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

    // Scroll to top on page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);

        // Scroll to the top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Navbar />
            <div className={`${styles.productherobanner} container-xxl py-5 bg-dark mb-5`}>
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


            <section className={styles.sectionblogwrap}>
                <div>
                    <h2 className={`${styles.articlesheading} text-center`}> Articles</h2>
                    <p className='container'>
                        As the name indicates, Temples Hub one stop solution provider for all your pilgrimage/ temple tour needs. We provide unmatched temples tour packages like Chardham Packages, South India Temple Tours, Ooty Tours etc. Find our most popular packages below and book as per your choice.
                    </p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row">
                                {currentPosts.map((post, index) => (
                                    <div key={index} className="col-lg-3 col-md-6 mb-5">
                                        <div className="blog-item">
                                            <div className={`${styles.blogimg} blog-thumb`}>
                                                <img src={post.image} alt="" className="img-fluid" />
                                            </div>
                                            <div className={`${styles.blogbord} blog-item-content`}>
                                                <div className="blog-item-meta mb-3 mt-4">
                                                    <span className="text-muted text-capitalize mr-3"><i className="icofont-comment mr-2"></i>{post.views}</span>
                                                    <span className="text-black text-capitalize mr-3"><i className="icofont-calendar mr-1"></i> {post.date}</span>
                                                </div>
                                                <h3 className={styles.blogsname}>{post.title}</h3>
                                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                                                <a href="blog-single.html" target="_blank" className="btn btn-main btn-icon btn-round-full">Read More <i className="icofont-simple-right ml-2"></i></a>
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

                        <div className="col-lg-3">
                            <div className="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
                                <div className="sidebar-widget latest-post mb-3">
                                    <h5>Latest Articles</h5>
                                    <div className="py-2">
                                        <span className="text-sm text-muted">03 Mar 2018</span>
                                        <h6 className="my-2"><a href="#">Thoughtful living in Los Angeles</a></h6>
                                    </div>
                                    <div className="py-2">
                                        <span className="text-sm text-muted">03 Mar 2018</span>
                                        <h6 className="my-2"><a href="#">Thoughtful living in Los Angeles</a></h6>
                                    </div>
                                    <div className="py-2">
                                        <span className="text-sm text-muted">03 Mar 2018</span>
                                        <h6 className="my-2"><a href="#">Thoughtful living in Los Angeles</a></h6>
                                    </div>
                                    <div className="py-2">
                                        <span className="text-sm text-muted">03 Mar 2018</span>
                                        <h6 className="my-2"><a href="#">Thoughtful living in Los Angeles</a></h6>
                                    </div>
                                </div>
                                <div className="sidebar-widget category mb-3">
                                    <h5 className="mb-4">Categories</h5>
                                    <ul className="list-unstyled">
                                        <li className="align-items-center"><a href="#">Astrology</a><span>(14)</span></li>
                                        <li className="align-items-center"><a href="#">Numerology</a><span>(2)</span></li>
                                        <li className="align-items-center"><a href="#">Spiritual-Healing</a><span>(14)</span></li>
                                        <li className="align-items-center"><a href="#">Vastu-Sastra</a><span>(2)</span></li>
                                        <li className="align-items-center"><a href="#"> meditation</a><span>(14)</span></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Blogs;
