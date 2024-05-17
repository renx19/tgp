import React from 'react';
import Footer from './Footer';
import '../styles/Home.css'
import '../styles/button.css'
import { motion } from "framer-motion";
import coverImage from "../assets/c1.jpg";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='container'>
 
       <div className='content'>
        
         <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
           
          >

              <div className="home-con">
                <h1>TAYHI CHAPTER</h1>
              </div>
          
           </motion.div>
        

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
                
            <div className='home-text'>
              <div className="text-content">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                    }}
                   
                    >
                    <h1>Tayhi Chapter Tau Gamma Phi </h1>

                </motion.div>

                    <h2>Tayhi Chapter Tau Gamma Phi, a non-profit fraternity organization based in the Philippines,
                       embodies the essence of brotherhood and service. Committed to fostering unity and integrity among its members.</h2>
                        <button className='button'> 
                          <Link to="/about"> 
                            Learn More 
                          </Link> 
                        </button>
                     </div>

                    
                    <div className="image-content">
                      <img src={coverImage} alt="pic-goruo" />
                    </div>

                </div>

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
                <Footer/>
              </motion.div>

    </div>
  );
}

export default Home;
