import React from "react";
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faPlayCircle, faTruck, faLeaf, faShippingFast } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div>
          <h4 style={{fontSize:"50px", fontFamily:"'ubuntu',sans serif"}}>All Fast Food is <br></br>
          Available at Foodish</h4>
          <div class="thumbnail">
            <img src="/media/nyeliep.jpg" alt="Delicious Food" />
            <p>We Are Just A Click Away When You <br></br>Crave For Delicious Fast Food</p>
          </div>

          <div className="buttons">
            <button className="buy-btn">
              <FontAwesomeIcon style={{color:"#F4BB44",paddingRight:"3px"}} icon={faBagShopping} />
                 Buy Now
            </button>
            <button className="play-btn">
              <FontAwesomeIcon style={{color:"#F4BB44",paddingRight:"3px"}} icon={faPlayCircle} />
              How To Order
            </button>
          </div>
        </div>
        <div className="home-img">
          <img src="/media/sandwich-clipart.png" alt="Sandwich" />
        </div>
      </div>
     
      <div className="services">
        <div>
          <FontAwesomeIcon icon={faShippingFast} className="icons"/>
          <h5>Fast Delivery</h5>
          <p>The food will be Delivered To Your Home Within 1-2 Hours Of Your Ordering</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faLeaf} className="icons" />
          <h5>Fresh Food</h5>
          <p>Your Food Will Be delivered 100% Fresh To Your Home. We Do Not Deliver Stale Food</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faTruck} className="icons"/>
          <h5>Free Delivery</h5>
          <p>Your Food Delivery Is Absolutely Free. No Cost, Just Order And Enjoy</p>
        </div>
      </div>

</div>
  );
};
