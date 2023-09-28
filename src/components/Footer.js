import React from "react"
import {FaLocationArrow} from "react-icons/fa6"
import {HiMail} from "react-icons/hi"
import {BiSolidPhone} from "react-icons/bi"

export default function Footer() {
    return (
        <footer>
        <div className="info">
            <HiMail /><p> drinky@gmail.com</p>
            <BiSolidPhone /><p> +1 999 999 9999</p>
            <FaLocationArrow /><p> 160 W 82nd St, New York, NY 10024, USA</p>
        </div>
        <p>
        &#169; 2023 Drinky
        </p>
        </footer>
    )
}