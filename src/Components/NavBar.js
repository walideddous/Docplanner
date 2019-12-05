import React from 'react';
import '../Components/NavBar.css';
import logo from '../Components/logodocplannergroup.svg';


function Navbar(props) {
    return (
        <div className="header">
            <img className="logo-docplanner" src={logo} />
            <ul className="aboutcareerdepartment">
            {props.navbarmenu.map(el=>
                <li className={el.class}>
                {el.title}
                {el.submenu &&
                    <ul className="drop-down">
                        {el.submenu.map(el => <li>{el}</li> )}
                    </ul>}
                    </li>)}
                
            </ul>
        </div>

    )

}

export default Navbar;