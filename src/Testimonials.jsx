import { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./Testimonials.css";

const reviews = [
  {
    name: "Travis Barker",
    role: "CEO, TechCorp",
    feedback:
      "This company provided outstanding IT support for our business. Their work in cloud computing and cybersecurity made a huge difference. The team was responsive and professional throughout the process. Highly recommended!",
  },
  {
    name: "Ethan Reynolds",
    role: "HR Manager, Innovate Solutions",
    feedback:
      "Their approach to software development is top-notch. They understood our business needs and provided an innovative solution. Communication was smooth, and deadlines were always met. A reliable IT partner!",
  },
  {
    name: "Sophia Müller",
    role: "Vice President, StartupHub",
    feedback:
      "We needed a custom software solution, and they delivered beyond expectations. Their developers are highly skilled and always open to feedback. The final product was smooth, user-friendly, and exactly what we wanted.",
  },
  {
    name: "Sam Bobley",
    role: "Founder, Optomi",
    feedback:
      "Exceptional service! The IT consultants were knowledgeable and helped us optimize our infrastructure. Our system runs faster and more efficiently now. We will definitely work with them again in the future.",
  },
  {
    name: "Olivia Carter",
    role: "CEO, Ocrolus",
    feedback:
      "We had an issue with our database management, and their team fixed it in no time. They also provided excellent training for our staff to prevent future issues. Very professional and great at what they do!",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false, // Disable arrow buttons
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const Reviews = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState({ name: "", feedback: "" });

  const handleOpenModal = (review) => {
    setSelectedFeedback(review);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedFeedback({ name: "", feedback: "" });
  };

  return (
    <section className="reviews-section">
      <h2 className="reviews-heading">
        Here's what <span className="highlight">others</span> say about us
      </h2>
      <div className="reviews-container">
        <Slider {...settings}>
          {reviews.map((review, index) => {
            const words = review.feedback.split(" ");
            const truncatedFeedback =
              words.length > 30 ? words.slice(0, 30).join(" ") + "..." : review.feedback;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                
                className="review-card h-[290px] !flex flex-col  justify-between items-end "
              >
                <div>

                <p
                  className="review-feedback"
                  onClick={() => handleOpenModal(review)}
                  style={{ cursor: words.length > 30 ? "pointer" : "default" }}
                  >
                  &quot;{truncatedFeedback}&quot;
                </p>
                  </div>
                  <div>
                <h3 className="review-name">{review.name}</h3>
                <p className="review-role">{review.role}</p>
                  </div>
              </motion.div>
            );
          })}
        </Slider>
      </div>

      {/* Material UI Dialog for Full Feedback */}
      <Dialog open={modalOpen} onClose={handleCloseModal} fullWidth maxWidth="sm">
        <DialogTitle>
          {selectedFeedback.name}
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <p>{selectedFeedback.feedback}</p>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Reviews;
