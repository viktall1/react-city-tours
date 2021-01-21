import React, { useState } from 'react'
import "./Tour.scss";


export default function Tour({ tour, removeTour }) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <article className="tour">
            <div className="img-container">
                <img width="200" src={tour.img} alt="img" />

                <span onClick={() => {removeTour(tour.id)}} className="close-btn">
                    <i className="fa fa-window-close" />
                </span> </div>
            <div className="tour-info">
                <h3>{tour.city}</h3>
                <h4>{tour.name}</h4>
                <h5>
                    info
        <span onClick={() => setShowInfo(!showInfo)}><i className="fas fa-caret-square-down"></i></span>
                </h5>
                <p>
                    {showInfo && tour.info}
                </p>            </div>
        </article>
    )
}
