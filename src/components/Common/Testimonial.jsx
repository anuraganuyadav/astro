import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../css/testimonial.module.css";
import commonStyles from "../css/common.module.css";
// Example of reviews data (replace with real data)
const reviews = [
    {
        text: "This service is fantastic! I saw immediate results and couldn't be happier with the outcome.",
        name: "John Doe",
        profession: "Software Developer",
        image: "img/testimonial-1.jpg", // Replace with actual image paths
    },
    {
        text: "Amazing experience, the team was so professional and delivered on time. Highly recommend!",
        name: "Jane Smith",
        profession: "Graphic Designer",
        image: "img/testimonial-2.jpg",
    },
    {
        text: "Great value for money. The attention to detail was outstanding, and I felt truly supported recommend.",
        name: "Michael Johnson",
        profession: "Marketing Manager",
        image: "img/testimonial-3.jpg",
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
        autoplay: true, // Enable auto-scroll
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
                        As the name indicates, Temples Hub one stop solution provider for all your pilgrimage/ temple tour needs. We provide unmatched temples tour packages like Chardham Packages, South India Temple Tours, Ooty Tours etc. Find our most popular packages below and book as per your choice.
                    </p>
                </div>

                <div className={styles.testimonialgrid}>
                    <Slider {...settings}>
                        {reviews.map((review, index) => (
                            <div className="testimonial" key={index}>
                                <div className="testimonial-item bg-transparent border rounded p-4">
                                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                    <p>{review.text}</p>
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="img-fluid flex-shrink-0 rounded-circle"
                                            src={review.image}
                                            style={{ width: '50px', height: '50px' }}
                                            alt={review.name}
                                        />
                                        <div className="ps-3">
                                            <h5 className="mb-1">{review.name}</h5>
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
