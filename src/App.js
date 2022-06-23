import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import {experiences} from './data/experiences'
export default function App() {
            
    return (
        <div>
            <Navbar />
            <Hero />
            {
                React.Children.toArray(
                    experiences.map((item)=>(
                        <Card
                        title = {item.title}
                        price =  {item.price}
                        rating = {item.rating}
                        noOfRatings = {item.noOfRatings}
                        status = {item.status}
                        image = {item.image}
                        country= {item.country}

                    />
                    ))
                )
            }
            
        </div>
    )
}