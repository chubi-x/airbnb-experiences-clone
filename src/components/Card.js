import React from "react"
import star from "../images/star.png"

export default function Card(props) {
    const item = props.item;
    let badgeText;
    if (item.openSpots ===0) badgeText = 'Sold out'
    else if(item.location ==="Online") badgeText = "online"

    return (
       <div>
            <div className="card">
               { badgeText && <div className="card-status">{badgeText}</div>}
                <img className="card-image" src= {process.env.PUBLIC_URL + "images/"+ item.coverImg} alt="experience"/>
                <div className="card-info">
                    <p className="card-rating-info">
                    <span>
                        <img className="card-rating-star" src={star} alt="star rating"/> {item.stats.rating} ({item.stats.reviewCount})</span>
                         · {item.location}
                    </p>
                    <p className="card-title">{item.title}</p>
                    <p> <span className="card-price">From ${item.price} </span>/ person</p>
                </div>
            </div>
        </div>
    )
}