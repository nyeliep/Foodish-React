import React from "react";
import './style.css';
import MenuItem from "../../Atom/MenuItem";

export const Menu = () => {
  return (
    <div style={{marginTop:"5%"}}>
      <div style={{marginLeft:"11%" }}>
        <h1>
          Our <span style={{ color: "#E30B5C" }}>Regular</span> Menu
        </h1>
      </div>
      <div className="header">
        <p>These Are Our Regular Menus. You Can Order Anything You Like.</p>
        <button className="see-all">See All</button>
      </div>

      <div className="menu-item-container">
        <MenuItem imageUrl="/media/chicken-burger.jpeg" name="Chicken Burger" ratings={4.5} price={7.99} />
        <MenuItem imageUrl="/media/chicken-pizza.jpeg" name="Margherita Pizza" ratings={4.8} price={12.99} />
        <MenuItem imageUrl="/media/drumsticks.jpeg" name="Margherita Pizza" ratings={4.8} price={12.99} />
        <MenuItem imageUrl="/media/grilled-sandwich.jpeg" name="Margherita Pizza" ratings={4.8} price={12.99} />
        <MenuItem imageUrl="/media/tacos.jpeg" name="Margherita Pizza" ratings={4.8} price={12.99} />
        <MenuItem imageUrl="/media/ramen.jpeg" name="Margherita Pizza" ratings={4.8} price={12.99} />
    
      </div>

    </div>
  );
};


