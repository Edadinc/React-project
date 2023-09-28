import React from "react"
import { Link } from "react-router-dom"

export default function About() {
    return (
     
            <div className="about-container">
            <div className="about-page-content">
                <h1>Don’t think too much when you can relax in our chic cafe.</h1>
                <p>Our mission is to appeal to your taste buds with the amazing drinks we make. Our drinks are fresh and original. (Let us know what your favorite is 😉)</p>
                <p>Our team is full of professionals who know the magic of preparing the specials.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your drink is waiting for you.<br />It is ready to be explored.</h2>
                <Link className="link-button" to="/drinks">Explore our drinks</Link>
            </div>
            </div>
        
    );
}