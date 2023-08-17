import React from 'react';
import './Cards.css'
function Cards(props) {
    return (
        <>
        
            <div className="card mn" style={{ width: '18rem' }}>
                <img src={props.imgsrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title colr">{props.title}</h5>
                    <p className="card-text colr">{props.desc}</p>
                    <a href={props.link} className="btn btn-secondary">Watch Trailer</a>
                </div>
            </div>

            

            

         
        </>
    );
}

export default Cards;
