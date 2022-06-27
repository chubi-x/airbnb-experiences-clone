import React from "react"
import star from "../images/star.png"

export default function Card(props) {
    return (
       <div>
            <div className="card">
                <div className="card-status">{props.openSpots == 0 ? 'SOLD OUT' : 'AVAILABLE'}</div>
                <img className="card-image" src= {process.env.PUBLIC_URL + "images/"+ props.image} alt="experience"/>
                <div className="card-info">
                    <p className="card-rating-info">
                    <span><img className="card-rating-star" src={star} alt="star rating"/> {props.rating} ({props.reviews})</span> · {props.location}
                    </p>
                    <p className="card-title">{props.title}</p>
                    <p> <span className="card-price">From ${props.price} </span>/ person</p>
                </div>
            </div>
        </div>
    )
}