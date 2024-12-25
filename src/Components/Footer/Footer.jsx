import './Footer.css'
import React from "react"
import { UilInstagram, UilFacebook, UilGithub } from '@iconscout/react-unicons';
import Wave from "../../img/wave.png"

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt=""/>
            <div className="f-content">
                <span>caongocthien1902@gmail.com</span>
                <div className="f-icons">
                    <a href="https://github.com/ngocthien19" target="_blank">
                        <UilGithub color='white' size='3rem' />
                        
                    </a>
                    <a href="https://www.linkedin.com/in/thi%C3%AAn-ng%E1%BB%8Dc-4b65742b6/" target="_blank">
                        <UilFacebook color='white' size='3rem' />
                    </a>
                    <a href="https://www.instagram.com/_ngthien192/" target="_blank">
                        <UilInstagram color='white' size='3rem' />
                    </a>             
                </div>
            </div>
        </div>
    )
}

export default Footer