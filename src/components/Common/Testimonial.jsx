import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../css/testimonial.module.css";
import commonStyles from "../css/common.module.css";
// Example of reviews data (replace with real data)
const reviews = [
    {
        text: "Xplore Destiny Astro & Vastu Kendra with Astrologer Vivek Tiwari is truly exceptional!His deep insights and accurate predictions bring clarity and confidence.The personalized guidance is both spiritual and practical life changing experience.Highly recommended for anyone seeking genuine astrological and Vastu solutions.",
        name: "Gaurav Tiwari",
        // profession: "Software Developer",
        // image: "img/testimonial-1.jpg", // Replace with actual image paths
    },
    {
        text: "Perfect astrologer for career related challenges. Gives clear insights on how to work for strengthening career scope in line to stars. 100% recommended.",
        name: "Nitin Dubey",
        // profession: "Graphic Designer",
        // image: "img/testimonial-2.jpg",
    },
    {
        text: "I took a marriage consultation and the prediction was absolutely accurate. Very helpful and trustworthy guidance. Highly recommended!",
        name: "Anurag Kumar Yadav",
        // profession: "Marketing Manager",
        // image: "img/testimonial-3.jpg",
    },
    {
        text: "Was stuck in a big problem. Then suddenly came in contact with Vivek Tiwari Jee, and the way he guided was just fantastic. Problem got Solved day by day.",
        name: "Humrang Foundation",
        // profession: "Marketing Manager",
        // image: "img/testimonial-3.jpg",
    },
    // Add more reviews as needed
];

function Testimonial() {
    const settings = {
        dots: true, // Show dots for navigation
        infinite: true, // Infinite scrolling
        speed: 500, // Transition speed
        slidesToShow: 3, // Show 3 slides at a time
        slidesToScroll: 3, // Scroll one slide at a time
        autoplay: false, // Enable auto-scroll
        autoplaySpeed: 3000, // Auto-scroll speed
        arrows: true, // Show next/prev arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Show 2 slides for medium screens
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, // Show 1 slide for small screens
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="testimonial-area recent-property" id="defaulthh">
            <div className="container">
                <div>
                    <h2 className={`${styles.testimonialheading} text-center`}>Our Clients Say!!!</h2>
                    <p className={`${commonStyles.commonpara} container`}>
                        Prestigious Clients of Astrologer Vivek Tiwari praise his accurate predictions, insightful guidance, and compassionate approach. They value his ability to simplify complex astrological concepts and provide practical solutions for Vastu as well. Many express deep trust and satisfaction, calling him a reliable guide for life’s important decisions.
                    </p>
                </div>

                <div className={styles.testimonialgrid}>
                    <Slider {...settings}>
                        {reviews.map((review, index) => (
                            <div className="testimonial" key={index}>
                               <div className={`${styles.testblg} testimonial-item bg-transparent border rounded p-4`}>
                                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                    <p>{review.text}</p>
                                    <div className="d-flex align-items-center">
                                        {/* <img
                                            className="img-fluid flex-shrink-0 rounded-circle"
                                            src={review.image}
                                            style={{ width: '50px', height: '50px' }}
                                            alt={review.name}
                                        /> */}
                                        <div className="ps-3">
                                            <h5 className={`${styles.testrev} mb-1`}>{review.name}</h5>
                                            <small>{review.profession}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
