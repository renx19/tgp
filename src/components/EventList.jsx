import React, { useState } from 'react';
import Event1 from './Events/Event1';
import Event2 from './Events/Event2';
import Event3 from './Events/Event3';
import Event4 from './Events/Event4';
import Event5 from './Events/Event5';
import Event6 from './Events/Event6';
import Event7 from './Events/Event7';
import Event8 from './Events/Event8';
import Event9 from './Events/Event9';
import Event10 from './Events/Event10';
import Event11 from  './Events/Events11'

import Footer from '../scenes/Footer'
import { motion } from "framer-motion";
import '../styles/Events.css';


// Assume your events are imported dynamically from some source
const eventComponents = [
  { id: 1, component: <Event1 />, title: 'Turnover Ceremony: ΤΓΦ Moy Onrubia Becomes Grand Triskelion'},
  { id: 2, component: <Event2 />, title: 'Organizational Cleanup and Community Engagement' },
  { id: 3, component: <Event3 />, title: 'Bingo Bonanza Fundraiser' },
  { id: 4, component: <Event4 />, title: 'Community Feeding Program for Mayon Evacuees'},
  { id: 5, component: <Event5 />, title: 'Nutrition Month Feeding Program' },
  { id: 6, component: <Event6 />, title: 'Coastal Cleanup for Peñafrancia Fluvial Procession'},
  { id: 7, component: <Event7 />, title: 'Participation in the 55th National Founding Anniversary' },
  { id: 8, component: <Event8 />, title: 'Mangudto Kita'},
  { id: 9, component: <Event9 />, title: 'Brigada Eskwela Participation at Tabaco National High School, Tabaco North Central, and Tabaco South Central Elementary Schools' },
  { id: 10, component: <Event10 />, title: 'Turnover of Canopy Tent to Tau Gamma Phi/Sigma - Tayhi Chapter: Donation from Onrubia Family' },
  { id: 11, component: <Event11 />, title: 'Participation in the 55th National Founding Anniversary' },
];

function EventList() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEvents = eventComponents.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.id.toString().includes(searchTerm.toLowerCase()) // Convert id to string for searching
  );

  return (
    <div className="container">
       <div className="search-con">
      <input
        type="text"
        placeholder="Search Events by ID or Title"
        value={searchTerm}
        onChange={handleSearchChange}
        className='search-boxx'
      />
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <div key={event.id}>{event.component}</div>
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

    <Footer/>
    </motion.div>
    </div>
    
  );
}

export default EventList;
