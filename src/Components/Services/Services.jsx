import './Services.css'
import Blog from './Blog'
import React from 'react'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import { motion } from "framer-motion"

const Services = () => {
    const transition = {duration : 2, type : 'spring'}
    return (
        <div className='services' id='Services'>
            <div className='awesome'>
                <h1 className='services-title'>My Awesome</h1>
                <span className='services-strong'>services</span>
                <p className='services-desc'>Lorem ispum is simpley dummy text of printing of printing Lorem 
                    <br />
                    ispum is simpley dummy text of printing</p>
                <button className='button services-btn'>Download CV</button>
                <div className='blur-blue'></div>
            </div>

            <div className='cards'>
                <div style={{left : "14rem"}}
                >
                    <Blog
                        emoji={Glasses}
                        title="Design"
                        desc="Figma, Sketch, Photoshop, Adobe, Adobe xd"
                        button="Learn more"
                    />
                </div>
                <div style={{top: "12rem", left: "-4rem"}}
                >
                    <Blog
                        emoji={HeartEmoji}
                        title="Developer"
                        desc="Html, Css, Javascript, React, Tyscript, NodeJS"
                        button="Learn more"
                    />
                </div>
                <div style={{top: "19rem", left: "12rem"}}
                >
                    <Blog
                        emoji={Humble}
                        title="UI/UX"
                        desc="Lorem ispum dumpy text are usually use in section where we need some random text"
                        button="Learn more"
                    />
                </div>
                <div className='blur-purple'></div>
            </div>
        </div>
    )
}

export default Services