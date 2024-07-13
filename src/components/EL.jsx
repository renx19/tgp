import React, { useState } from 'react';
import EventCard from '../components/event';
import Footer from '../scenes/Footer';
import { motion } from 'framer-motion';
import '../styles/Events.css';
import { events } from '../utils/DataEvent';  // Import your event data

function EventList() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEvents = events.filter((event) =>
    event.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.id.toString().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="body-container">
    <div className="el-con">
      <div className="search-con">
        <input
          type="text"
          placeholder="Search Events by ID or Title"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-boxx"
        />
        </div>
      <div className="el2-con">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div className="event-container" key={event.id}> {/* Use event.id as the key */}
              <EventCard event={event} />
            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}
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
}

export default EventList;
