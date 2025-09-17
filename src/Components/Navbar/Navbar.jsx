import './Navbar.css'
import React from 'react'
import logo from '../../assets/logo.png'

function Navbar () {
    return (
    <nav className="container">
      <img src = {logo}  alt="" className="logo"/>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className="btn">Contact Us</button></li>
        </ul>
    </nav>
    );
}
export default Navbar;