import React from 'react'
import MernStack from '../../Assets/MernStack.png'
import DescriptionStyles from './Description2-Styles.css'

//exports a component with a description/title and an image
const Description2 = () => {
    return (
        <div className="main-section" id="description-main-section">
           <div className="description-left" >
                <div className="description-text">
               <h1>Tech is an exciting field with huge potential <br/> I love learning about tech and how to use it to solve real world challenges</h1>
               </div>
           </div>
           <div className="description-right">
               <div className="main-right-image">
               <img src={MernStack} alt="greg"/>
               </div>
           </div>
            
        </div>
    )
}

export default Description2
