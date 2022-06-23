import React from "react"
import photogrid from "../images/photogrid.png"
export default function Hero() {
    return (
        <section className="hero">
        <figure className="hero--container">
            <img src={photogrid} className="hero--photo" alt="hero photo"/>
        </figure>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}