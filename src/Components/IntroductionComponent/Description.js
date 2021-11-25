import React from 'react'
import UJLogo from '../../Assets/UJLogo.jpg'
import DescriptionStyles from './Description-Styles.css'

//exports a component with a description/title and an image
const Description = () => {
    return (
        <div className="main-section" id="description-main-section">
           <div className="description-left" >
                <div className="description-text">
               <h1>I'm a tech enthusiast with <br/> 2 degrees in Information Management. <br/> <br/>
               I'm a creative individual and spend my free time playing around with photography and 
               videography</h1>
               </div>
           </div>
           <div className="description-right">
               <div className="main-right-image">
               <img src={UJLogo} alt="greg"/>
               </div>
           </div>
            
        </div>
    )
}

export default Description
