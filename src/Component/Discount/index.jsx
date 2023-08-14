import React from "react";
import './style.css'



export const Discount = () => {
  return (
    <div className="discount-container">
      <div className="discount-one">
        <img src="media/burger1.jpeg" alt="Burger" />
        <h1>25% <br /> Discount</h1>
        <div className="octagram">
          <p className="price">$10</p>
        </div>
      </div>
      <div>
        <div className="discount-two">
          <img src="media/waffles.png" alt="Waffles" />
          <div className="octagram-two">
          <p className="price">$9.16</p>
        </div>
        <div className="save">
            <div><p>Save 20%</p></div>
           
        </div>
        </div>

        <div className="discount-three">
          <img src="media/torti.png" alt="Torti" />
          <div className="text">
            <h1 style={{color:" #E30B5C"}}>Tortilla Wrap Tacos</h1>
            <p style={{color:" #E30B5C"}}>Get Your Order Fresh</p>
          </div>
          <div className="discount-off">
            <div><p>15% Off</p></div>
        </div>
        </div>
      </div>
    </div>
  );
};
