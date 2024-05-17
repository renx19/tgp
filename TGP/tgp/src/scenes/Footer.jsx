import React from 'react';
import { IoIosCall, IoMdContract } from "react-icons/io";
import { FaMapLocation, FaTiktok } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import { TbClockHour4 } from "react-icons/tb";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa6';
import { CiMemoPad } from "react-icons/ci";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { FaQuestion } from "react-icons/fa";
import '../styles/contact.css';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <div className="foot-con">
      <div className="footer-container">
        <div className="ul-container">
          <ul className='ul-con'>
            <li>
              <FaMapLocation /> Tayhi Tabaco City, Albay
            </li>
            <li>
              <IoIosMailUnread /> tayhichapter@gmail.com
            </li>
            <li>
              <IoIosCall /> 0960-403-3887
            </li>
            <li>
              <TbClockHour4 /> 8am-5pm
            </li>
          </ul>
        </div>

        <div className='text-muted'>
          <ul className='social-con'>
            <li><a href="https://www.facebook.com/profile.php?id=100079133156344" target="_blank" rel="noopener noreferrer"><FaFacebook className='soc-icon' /></a></li>
            <li><FaInstagram className='soc-icon' /></li>
            <li><FaTiktok className='soc-icon' /></li>
            <li><FaTwitter className='soc-icon' /></li>
            <li><FaYoutube className='soc-icon' /></li>
          </ul>
          <p className="">
            &copy; {new Date().getFullYear()} Tayhi Chapter Tau Gamma. All rights reserved.
          </p>
        </div>

        <div className='terms-container'>
          <ul className='terms-con'>
            <li className="swap-item">
              <Link to="/footer#terms"><CiMemoPad /> Terms and Conditions</Link>
            </li>
            <li className="swap-item">
              <Link to="/footer#privacy"><MdOutlinePrivacyTip /> Privacy Policy</Link>
            </li>
            <li className="swap-item">
              <Link to="/contact"><IoMdContact /> Contact Us</Link>
            </li>
            <li className="swap-item">
              <Link to="/footer#faq"><FaQuestion /> FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
