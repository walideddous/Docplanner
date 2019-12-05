import React from 'react';
import '../Components/introduction.css';

function Introduction (props){
    return(
        <div>
        <div class="slogonexplication">
            <img class="slogan" src="https://www.docplanner.com/img/sygnet.png" srcset="https://www.docplanner.com/img/sygnet.png 1x, https://www.docplanner.com/img/sygnet@2x.png 2x" />
            <h1>Making the healthcare experience more human</h1>
        </div>
        <div className="patientsdoctors">{props.paragraphe.map(el => <p className={el.class} >{el.p}</p>)}
        </div>
        </div>
    )
}
export default Introduction;