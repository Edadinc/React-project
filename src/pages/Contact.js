import React from "react"
import { useState} from "react";

export default function Contact() {
    const [data, setData] = useState({name:"", email:"", phone:"", message:""});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]:value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
     <form method="post" onSubmit={handleSubmit}>
        <h1> Contact <span>Here</span></h1>
        <input type="text" name="name" id="" placeholder="Enter your name" onChange={handleChange} value={data.name}/>
        <input type="email" name="email" id="" placeholder="example@gmail.com" onChange={handleChange} value={data.email}/>
        <input type="phone" name="phone" id="" placeholder="Enter your phone number" onChange={handleChange} value={data.phone}/>
        <textarea name="message" id="" cols="20" rows="5" placeholder="Please type here" onChange={handleChange} value={data.message}/>
        <button type="submit">SEND</button>
     </form>
        
    );
}