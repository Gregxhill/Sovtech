import React from 'react'
import LinkedIn from '../../Assets/LinkedIn.png'
import GitHub from '../../Assets/GitHub.png'
import SocialsStyles from './Socials-Styles.css'

//exports a component with a title and social icon buttons
const Socials = () => {
    return (
        <div className="socials-main-section">
            <div className="title"> <h2>My Socials</h2></div>
            <div className="icons">
                <div className="icon">
                    <a href="https://www.linkedin.com/in/gregory-hill-webdvlpr/">
                        <img src={LinkedIn} alt="linkedin"/>
                    </a>
                </div>
                <div className="icon">
                    <a href="https://www.github.com/Gregxhill">
                        <img src={GitHub} alt="linkedin"/>
                    </a>
                </div>
            </div>
            
            
           
        </div>
    )
}

export default Socials
