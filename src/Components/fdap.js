import React from 'react';
import '../Components/fdap.css';

function Fdap (props){
    
    return (
        <div className="Fdap" >
            {props.doctorPatient.map(el => 
                <div className={el.x}>
                    <p className={el.classtitle}>{el.title}</p>
                    <p className={el.classp}>{el.paragraphe}</p>
                    {el.boutton &&
                        <select className="select"> 
                            <option>{el.boutton}</option>
                            {el.subboutton.map(el =><option>{el}</option>)}
                        </select>
                    }
                    <img className={el.classimage} src={el.imagesource}></img>
                </div>
            )}
        </div>
    )
}

export default Fdap;