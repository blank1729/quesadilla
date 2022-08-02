import React from "react";
import './Navbar.css'


function Navbar(){
    // create a array using usestate to list elements that go into the nav-items
    // properties for the nav-items 1.name 2.class-name 3.link
    return(
        <div className="navbar">
            <nav>
                <h2 className="logo">QUESADILLA</h2>
                <ul className="nav-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">About</a></li>
                    <li className="discord">Join Waitlist</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar