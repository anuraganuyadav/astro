import React from "react";
import { Link, useParams } from "react-router-dom";

import styles from "./css/detailsblogs.module.css";
import Footer from "./Common/Footer";
import Navbar from "./Common/Navbar";
import blogs from "./js/blogsData";
import PopularServices from "./Common/PopularServices";
import ServicesVT from "./ServicesVT";

const DetailsBlogs = () => {
  const { slug } = useParams();

  // Slug ke basis par blog find karo
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <h2 className="text-center py-5">Blog not found!</h2>;
  }

  return (
    <>
      <Navbar />

      <div className={`${styles.detailsblogbaneer} container-xxl py-5 bg-dark mb-5`}>
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start"></div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img className="img-fluid" src={blog.imgSrc} alt={blog.title} />
            </div>
          </div>
        </div>
      </div>

      <section className={styles.sectionblogwrap}>
        <div>
          <h2 className={`${styles.articlesheading} text-center`}>{blog.title}</h2>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-12 mb-5">
                  <div className="blog-item">
                    {/* <div className={`${styles.blogimg} mb-3`}>
                      <img className="img-fluid" src={blog.imgSrc} alt={blog.title} />
                    </div> */}
                    <div className={styles.blogContent}>
                      {/* description HTML render karne ke liye */}
                      <div dangerouslySetInnerHTML={{ __html: blog.description }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related blogs */}
            <div className="col-lg-3">
              <div className="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
                <div className="sidebar-widget latest-post mb-3">
                  <h5>Related Articles</h5>
                  {blogs
                    .filter((b) => b.id !== blog.id)
                    .slice(0, 3)
                    .map((related) => (
                      <div className="py-2" key={related.id}>
                        {/* <span className="text-sm text-muted">03 Mar 2018</span> */}
                        <h6 className="my-2">
                          <Link to={`/blog/${related.slug}`}>{related.title}</Link>
                        </h6>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PopularServices></PopularServices>
      <ServicesVT></ServicesVT>
      <Footer />
    </>
  );
};

export default DetailsBlogs;
