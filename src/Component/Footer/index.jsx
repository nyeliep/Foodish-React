import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white" style={{ backgroundColor: "#F3CFC6" }}>
      <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col space-y-4">
          <div className="footer-logo">
            <h4 className="text-lg font-semibold">Foodish</h4>
            <small className="text-gray-400 font-light">Continue Foodish 2023 all rights reserved</small>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="footer-logo">
            <h4 className="text-lg font-semibold">Follow Us on</h4>
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

        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-semibold">Menu</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Offers</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Services</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">About Us</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-semibold">Information</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Menu</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Quality</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Make a Choice</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Salad With Veggies</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Fast Delivery</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Subscribe</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Tel: +254000034278</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">info@Foodish.com</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">1234, Nairobi, Kenya</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
             