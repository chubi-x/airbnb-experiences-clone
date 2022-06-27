import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from './data/data'
export default function App() {
            
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="card-container">
            {
                React.Children.toArray(
                    data.map((item)=>(
                        <Card
                        title = {item.title}
                        price =  {item.price}
                        rating = {item.stats.rating}
                        reviews = {item.stats.reviewCount}
                        image = {item.coverImg}
                        location= {item.location}
                        openSpots = {item.openSpots}
                    />
                    ))
                )
            }
            </div>
            
        </div>
    )
}