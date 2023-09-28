import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>You got the nice convos, we got the awesome drinks.</h1>
            <p>Add super taste to your life by joining the #drinkylife movement. Get the perfect drink to make your day.</p>
            <Link to="drinks">Find your drink</Link>
        </div>
    )
};