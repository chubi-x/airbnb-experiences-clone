import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import { experiences } from "./data/experiences"
export default function App() {
            
    return (
        <div>
            <Navbar />
            <Hero />
            {
                experiences.map((item)=>(
                    <Card
                        key = {item}
                        title= {item.title}
                        price= {item.price}
                        image = {item.image}
                        country = {item.country}
                        rating = {item.rating}
                        noOfRatings = {item.noOfRatings}
                        status = {item.status}

                 />))
                
            }
            <Card />
        </div>
    )
}