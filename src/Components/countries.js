import React from 'react';
import '../Components/countries.css';

function Countries (props){
    return (
        <div className="countries">
            {props.countries1.map(el =>
                <div className="carte">
                <img className="imagecountries" srcSet={el.imagesource} ></img>
                <div className="countriesname"> 
                    <p>{el.titre}</p>
                    <input type="button" value={el.value} className="seeopenning"></input>
                </div>
                </div>)}
        </div>
    )
}

export default Countries;