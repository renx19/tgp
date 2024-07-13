import React from 'react';

import '../styles/Home.css'
import '../styles/button.css'
import { motion } from "framer-motion";
import coverImage from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { TbTargetArrow } from "react-icons/tb";
import { IoEyeSharp } from "react-icons/io5";
import TayhiChapter from '../assets/light.jpg'
function Home() {
  return (
    <div className='body-container'>
 
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
                   
                   

                </motion.div>
              
                         
                     <div className="h1-image-content">
                      <div className='tayhi-image-con'>
                      <img src={TayhiChapter} alt="pic-goruo" />
                      </div>
                    </div>
                     </div>


                     <div className="h1-image-content">
                      <img src={coverImage} alt="pic-goruo" />
                    </div>
                  
                </div>

          </motion.div>
        </div>

                      <div className='divider-con'>
    

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

                  <div className='tenets-con'>
                    <div className='tenets'>
                      <div className='Tenet-text-con'>
                        <h1>Tenets</h1>
                        <p><span>Tenet 1:</span> TAU GAMMA PHI is the Triskelions’ Grand Fraternity, my Fraternity, the supreme Fraternity.</p>
                        <p><span>Tenet 2:</span> Primum nil nocere – first of all do not harm, let alone in defense of self, for whatever cause man has come into being, for whatever reason he exists, to wherever he is destined, keen to all living creatures around him, Man is a brother unto man.</p>
                        <p><span>Tenet 3:</span> De gustibus non desputandum est – of likes and dislikes there should be no disputing. Live and let live.</p>
                        <p><span>Tenet 4:</span> Preserve yourself, Brain, Brawn, and Blood.</p>
                        <p><span>Tenet 5:</span> Brothers I shall love and respect their counsel I shall heed.</p>
                        <p><span>Tenet 6:</span> Tayhi Chapter is my alma mater, to cherish and to honor, by its rules be governed and be guided.</p>
                        <p><span>Tenet 7:</span> The Grand Triskelion is righteous, just and strong. He shall be obeyed.</p>
                        <p><span>Tenet 8:</span> A Triskelion is a brother to his fellow Triskelion.</p>
                      </div>
                    </div>
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
                    <div className='conduct-con'> 
                    
                   <div className='code-of-conduct'>
                    <div className='code-text-con'>
                      <h1>THE TRISKELION CODE OF CONDUCT</h1>
                      <p><span className="first-letter">T</span> – Treat others as you would have them treat you.</p>
                      <p><span className="first-letter">R</span> – Rise to defend the name and honor of the Fraternity whenever it is unjustly criticized.</p>
                      <p><span className="first-letter">I</span> – Inform and orient your fellow brothers on every matter you consider vital to the Fraternity.</p>
                      <p><span className="first-letter">S</span> – Salute and address your fellow brothers in the proper manner.</p>
                      <p><span className="first-letter">K</span> – Keep decorum in all fraternity meetings and act accordingly outside the fraternity.</p>
                      <p><span className="first-letter">E</span> – Excel in your chosen field of interest and endeavor.</p>
                      <p><span className="first-letter">L</span> – Live a life of moderation, avoid gluttony, vices and drunkenness.</p>
                      <p><span className="first-letter">I</span> – In your everyday life, take care of what you write, do, of misinterpretation and lasting misunderstanding.</p>
                      <p><span className="first-letter">O</span> – Obey all fraternity rules and regulations, be guided in your daily ventures by the Tenets of the Fraternity.</p>
                      <p><span className="first-letter">N</span> – Never reveal to anyone, not to your family, nor to your friends, the concern of the fraternity.</p>

                      <h2>TRISKELION GRAND FRATERNITY</h2>
                      <h3>TAU GAMMA PHI</h3>
                    </div>
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

                  <div className="prayer-container">
                          <div className='prayer'>
                            <img src="/quote.png" alt="Quote" />
                            <h1>Prayer</h1>
                            <p>
                              TRISKELION PRAYER Almighty God, bless this brotherhood and sisterhood of ours, so that we may succeed in all of its endeavors. Enlighten and strengthen our Governor General,
                              Council’s Chairman, and chapter’s Grand Triskelion so for them to maintain the highest standard of decision making for a better and successful Tau Gamma Phi, 
                              Tau Gamma Sigma, Fraternity and Sorority. Amen
                            </p>
                          </div>
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
                   <div className='home-card-con'>
                      <div className='home-card'>
                        <div className="home-image-content">
                          
                        </div>
                        <TbTargetArrow size={48} className="icon"/>
                        <h3>Mission</h3>
                        <p>To provide holistic services to help brothers excel and become great leaders.</p>
                      </div>
                      <div className='home-card'>
                        <div className="home-image-content">
                        
                        </div>
                        <IoEyeSharp size={48} className="icon"/>
                        <h3>Vision</h3>
                        <p>Produce a great leader upholding excellence in any field.</p>
                      </div>
                     
                      {/* <div className='home-card'>
                        <div className="home-image-content">
                       
                        </div>
                        <IoDiamondSharp size={48} className="icon"/>
                        <h3>Values</h3>
                        <p>To provide holistic services to help brothers excel and become great leaders.</p>
                      </div> */}

                     
                    </div>


              </motion.div>

    </div>
  );
}

export default Home;
