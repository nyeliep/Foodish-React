import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";

 export const Footer = () => {
  return (

    <footer className="footer">
     
      <div className="footer-section">
        
        <div className="footer-logo">
         <h4>Foodish</h4>
         <small>Continue Foodish 2023 all rights reserved</small>
        </div>

        <div className="footer-logo">
         <h4>Follow Us on</h4>
         <div className="social-icons-container">
      <a href="#" className="social-icon">
        <FontAwesomeIcon icon={faPinterest} />
      </a>
      <a href="#" className="social-icon">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="#" className="social-icon">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="#" className="social-icon">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    
    </div>
        </div>

      </div>

      <div className="footer-section">
        <h4>Menu</h4>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Offers</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
         
        </ul>
      </div>

      <div className="footer-section">
        <h4>Information</h4>
        <ul>
        <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Quality</a>
          </li>
          <li>
            <a href="#">Make a Choice</a>
          </li>
          <li>
            <a href="#">Salad With Veggies</a>
          </li>
          <li>
            <a href="#">Fast Delivery</a>
          </li>
          <li>
            <a href="#">Subscribe</a>
          </li>
      
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact Us</h4>
        <ul>
         <li>
            <a href="#">Tel: +254000034278</a>
          </li>
          <li>
            <a href="#">info@Foodish.com</a>
          </li>
          <li>
            <a href="#">1234,Nairobi,Kenya</a>
          </li>
          </ul>
          
      </div>


    </footer>
  );
};