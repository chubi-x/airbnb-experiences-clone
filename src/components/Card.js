import React from "react"
// import katie_img from "../images/katie.png"
import star from "../images/star.png"
export default function Card(props) {
    return (
       <div className="card-container">
            <div className="card">
                <div className="card-status">{props.status}</div>
                <img className="card-image" src={props.image}/>
                <div className="card-info">
                    <p className="card-rating-info">
                    <span><img className="card-rating-star" src={star}/> {props.rating} {`(${props.noOfRatings})`}</span> · {props.country}
                    </p>
                    <p className="card-title">{props.title}</p>
                    <p> <span className="card-price">From ${props.price} </span>/ person</p>
                </div>
            </div>
        </div>
    )
}