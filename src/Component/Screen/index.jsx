import React from "react";
import { Navbar } from "../Navigation";
import { Home } from "../Home";
import { Footer } from "../Footer";
import { Categories } from "../Categories";
import { Menu } from "../Menu";
import { Discount } from "../Discount";



export const Screen =()=>{
    return(
        <div>
            <Navbar/>
            <Home/>
            <Categories/>
            <Menu/>
            <Discount/>
            <Footer/>
        
        </div>
    )
}