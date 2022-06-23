import React from "react"
import logo from "../images/airbnb-logo.webp"
export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--logo" alt="nav logo" />
        </nav>
    )
}