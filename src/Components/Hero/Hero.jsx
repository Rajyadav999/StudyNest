import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
function Hero () {
    return (
        /*id is like giving a name tag to an element. 
         When you click on a navbar link, react-scroll looks for the element with that exact id and scrolls to it
         {id='hero'} inside the div below don't use {}.*/
        <div className="Hero container"> {/* here we had used unique className so no need for id just use this className for linkin*/}
            <div className="hero-text">
                <h1>We Ensure better education for a better world</h1>
                <p>Our cutting-edge curriculum is designed to empower students
                   with the knownledge,skills, and experiences needed to excel in
                   the dynamic field of education</p>
                   <button className='btn'>Explore more <img src={dark_arrow}/> </button>
            </div>
        </div>
    );
}

export default Hero;