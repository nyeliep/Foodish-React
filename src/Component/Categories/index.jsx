import React from "react";
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";


export const Categories =()=>{
    return(
        <div style={{marginTop:"5%"}}>
            <div className="header">
                <h1>Best <span style={{color: "#E30B5C"}}>Delivered</span> Categories</h1>
                <p>Here are Some Of Our Best Distributed Categories. If You Want You Can Order From Here</p>
            </div>
            <div className="categories">
                <div>
                    <div className="burger-circle">
                        <div className="burger"> 
                            <img src="/media/burger-clip.png" />
                        </div>
                    </div>
                    <div style={{marginLeft:"25%" }}>
                    <h6>Chicken Burger</h6>
                    <button className="order">Order Now <FontAwesomeIcon style={{fontSize:"14px"}}  icon={faGreaterThan}/></button>
                    </div>
                </div>
                <div>
                    <div className="pizza-circle">
                        <div className="pizza">
                        <img src="/media/mushroom-pizza.png"/>
                        </div>
                    </div>
                    
                    <div style={{marginLeft:"11%" }}>
                    <h6>Chicken Pizza</h6>
                    <button className="order">Order Now <FontAwesomeIcon style={{fontSize:"14px"}} icon={faGreaterThan}/></button>
                    </div>
                </div>
                <div>
                    <div className="fries-circle">
                        <div className="fries">
                        <img src="/media/fries-clipart.png"/>
                        </div>
                    </div>
                   
                    <div style={{marginLeft:"17%" }}>
                    <h6>French Fries</h6>
                    <button className="order">Order Now <FontAwesomeIcon style={{fontSize:"14px"}} icon={faGreaterThan}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}