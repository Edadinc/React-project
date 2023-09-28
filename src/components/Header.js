import React from "react"
import { Link, NavLink } from "react-router-dom"
import {FaCocktail} from "react-icons/fa"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <header>
            <Link className="site-logo" to="/"><FaCocktail/>DRINKY</Link>
            <nav>
                <NavLink 
                    to="/about"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink 
                    to="/drinks"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Drinks
                </NavLink>
                <NavLink 
                    to="/contact"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Contact Us
                </NavLink>
            </nav>
        </header>
    )
}