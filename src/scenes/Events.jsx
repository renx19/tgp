import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Events.css';
import { events1 } from '../utils/Data';
import { motion } from "framer-motion";
import { Link} from 'react-router-dom';


const Events = () => {
  const [index, setIndex] = useState(0);


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

  // Function to filter out only the first image for each event number

  return (
    <div className="body-container">
          <div className="event-con">
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
          {events1.map((events1, index) => (
            <div key={index} className="card-con">
              <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                  <img src={events1.src} alt="" className="card-img" />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">{events1.Title}</h2>
                <div className="description-container">
                  <p className="description">{events1.Description}</p>
                </div>
                <Link to ='/el'> 
                <button className="button-events">Learn More</button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
        </motion.div>
       
      </div>
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
     
      </motion.div>
      </div>
    </div>
      
  );
};

export default Events;
