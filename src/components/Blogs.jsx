import React, { useState } from 'react';
import styles from './css/blogs.module.css';
import Footer from './Common/Footer';
import Navbar from './Common/Navbar';
import Pagination from './Common/Pagination';
import blogs from './js/blogsData';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 4;
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  // Latest 3 articles
  const latestArticles = [...blogs].reverse().slice(0, 3);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />

      <div className={`${styles.productherobanner} container-xxl py-5 bg-dark mb-5`}>
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start"></div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img className="img-fluid" src="img/heroimg.webp" alt="Hero" />
            </div>
          </div>
        </div>
      </div>

      <section className={styles.sectionblogwrap}>
        <div>
          <h2 className={`${styles.articlesheading} text-center`}>Articles</h2>
          <p className="container">
            Astrologer Vivek Tiwari’s articles provide deep insights into Astrology, Vastu, and Numerology with practical guidance for everyday life.
          </p>
        </div>

        <div className="container">
          <div className="row">
            {/* Left side - Blog cards */}
            <div className="col-lg-9">
              <div className="row">
                {currentPosts.map((post) => (
                  <div key={post.slug} className="col-lg-3 col-md-6 mb-5">
                    <div className="blog-item">
                      <div className={`${styles.blogimg} blog-thumb`}>
                        <img src={post.imgSrc} alt={post.title} className="img-fluid" />
                      </div>
                      <div className={`${styles.blogbord} blog-item-content`}>
                        <div className="blog-item-meta mb-3 mt-4">
                          <span className="text-muted text-capitalize mr-3">
                            <i className="icofont-comment mr-2"></i>{post.views}
                          </span>
                          <span className="text-black text-capitalize mr-3">
                            <i className="icofont-calendar mr-1"></i> {post.date}
                          </span>
                        </div>
                        <h3 className={styles.blogsname}>{post.title}</h3>
                        <Link to={`/blog/${post.slug}`} className="btn btn-main btn-icon btn-round-full">
                          Read More <i className="icofont-simple-right ml-2"></i>
                        </Link>
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

            {/* Right side - Latest Articles */}
            <div className="col-lg-3">
              <div className="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
                <div className="sidebar-widget latest-post mb-3">
                  <h5>Latest Articles</h5>
                  {latestArticles.map((article) => (
                    <div className="py-2" key={article.slug}>
                      {/* <span className="text-sm text-muted">{article.date}</span> */}
                      <h6 className="my-2">
                        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                      </h6>
                    </div>
                  ))}
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
