import React from "react"
import katie_img from "../images/katie.png"
import star from "../images/star.png"
export default function Card() {
    return (
       <div className="card-container">
            <div className="card">
                <div className="card-status">SOLD OUT</div>
                <img className="card-image" src= {katie_img}/>
                <div className="card-info">
                    <p className="card-rating-info">
                    <span><img className="card-rating-star" src={star}/> 5.0 (6)</span> · USA
                    </p>
                    <p className="card-title">Life lessons with Katie Zaferes</p>
                    <p> <span className="card-price">From $136 </span>/ person</p>
                </div>
            </div>
        </div>
    )
}