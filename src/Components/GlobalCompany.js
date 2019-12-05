import React from 'react';
import '../Components/GlobalCompany.css';

function GlobalCompany (props){
    return (
        <div className="globalcompany">
        <p className="title">We are a global company with local culture</p>
        <ul className="svg">{props.globale.map(el => 
            <li className="listedepartenaire">{el}</li>)}
        </ul>
        </div>
    )
}
export default GlobalCompany;