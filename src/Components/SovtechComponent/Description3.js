import React from 'react'
import Sovtech from '../../Assets/Sovtech.png'
import DescriptionStyles from './Description3-Styles.css'

//exports a component with a description/title and an image
const Description3 = () => {
    return (
        <div className="main-section" id="description-main-section">
           <div className="description-left" >
                <div className="description-text">
               <h1>I love what SovTech is doing and would be honoured to be a part of it</h1>
               </div>
           </div>
           <div className="description-right">
               <div className="main-right-image">
               <img src={Sovtech} alt="greg"/>
               </div>
           </div>
            
        </div>
    )
}

export default Description3
