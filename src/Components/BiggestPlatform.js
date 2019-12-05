import React from 'react';
import '../Components/BiggestPlatform.css';

function BiggestPlatform (props){
    return (
        <div className="stats-performance">
            <div className="part1">
                <p class="titrehealthcare">The world's biggest healthcare platform</p>
                <p class="parahealthcare">We work from 6 officers all over the world, bringing Docplanner Group to life in almost 20 countries </p>
            </div>
            <div className="part2">{props.platform1.map(el =>
                <div className="stats-leader">
                    <img src={el.image} />
                    <h3>{el.titre}</h3>
                    <p>{el.paragraphe}</p>
                </div>)}
            </div>
            <div className="part3">{props.platform2.map(el =>
                <div className="stats-leader">
                        <img src={el.image} />
                        <h3>{el.titre}</h3>
                        <p>{el.paragraphe}</p>
                </div>)}
            </div>
        </div>
    )

} 
export default BiggestPlatform;