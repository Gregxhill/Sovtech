import React from 'react'
import GregPortrait from '../../Assets/GregPortrait.jpg'
import MainStyles from './Main-Styles.css'

//Exports the first header component
const Main = () => {
    return (
        <div className="main-section">
           <div className="main-left">
               <h1>Hi, <br/> I'm Greg!</h1>
           </div>
           <div className="main-right">
               <div className="main-right-image">
               <img src={GregPortrait} alt="greg"/>
               </div>
           </div>
            
        </div>
    )
}

export default Main
