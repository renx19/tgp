import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EventCard = ({ event }) => {
    const settings = {
        lazyload: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ],
       
      };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="event-card">
        <Slider {...settings}>
          {event.images.map((image, index) => (
            <div key={index} className="image-content">
              <span className="overlay"></span>
              <div className="card-image">
                <img src={image.src} alt="" className="card-img" />
              </div>
            </div>
          ))}
        </Slider>
        <div className="event-card-content">
          <h2 className="event-title">{event.Title}</h2>
          <div className="event-description-container">
            <p className="event-description">{event.Description}</p>
            <p className="event-narrative">{event.Narrative }</p>
            <p className="event-date">{event.Month + ' ' + event.Year}</p>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

// PropTypes validation
EventCard.propTypes = {
  event: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Narrative: PropTypes.string.isRequired,
    Month: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default EventCard;
