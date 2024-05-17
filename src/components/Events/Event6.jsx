import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { events } from '../../utils/DataEvent';
import { motion } from "framer-motion";

const Event6 = () => {
  const [index, setIndex] = useState(0);

  const eventNumber6 = events.find(event => event.EventNumber === "6");

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
    afterChange: (current) => {
      setIndex(current); // Update the index state with the current slide index
    }
  };

  return (
    <div className="container">
      <div className="slide-container">

      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        
        >

        <Slider {...settings}>
          {eventNumber6.images.map((image, index) => (
            <div key={index} className="event-card">
              <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                  <img src={image.src} alt="" className="card-img" />
                </div>
              </div>             
            </div>
          ))}
        </Slider>
        <div className="event-card-content">
          <h2 className="event-title">{eventNumber6.Title}</h2>
          <div className="event-description-container">
            <p className="event-description">{eventNumber6.Description}</p>
            <p className="event-narrative">{eventNumber6.Narrative}</p>
            <p className="event-date">{eventNumber6.Date}</p>
          </div>
        </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Event6;
