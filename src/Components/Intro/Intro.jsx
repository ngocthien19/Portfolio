import React from "react"
import Github from "../../img/github.png"
import linkedin from "../../img/linkedin.png"
import instagram from "../../img/instagram.png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import thumbup from "../../img/thumbup.png"
import glassesimoji from "../../img/glassesimoji.png"
import crown from "../../img/crown.png"
import boy from "../../img/boy.png"
import { themeContext } from "../../Context"
import { useContext } from "react"
import { motion } from "framer-motion"

import './Intro.css'

const Intro = () => {

    const transition = {duration : 2, type : 'spring'}

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode    

    return (
        <div>
            <div className="intro" id='Navbar'>
                <div className="intro-left">
                    <h1 className="intro-title" style={{color: darkMode ? 'white' : ''}}>Hy! I Am</h1>
                    <span className="intro-strong">Ngọc Thiên</span>
                    <p className="intro-desc">
                        Frontend Developer with high level of experience in web designing and development, producting the Quality work
                    </p>
                    <button className="button intro-btn">Hire me</button>
                    <div className="intro-social">
                        <a href="https://github.com/ngocthien19" target="_blank">
                            <img className="intro-img" src={Github} alt=""></img>
                        </a>
                        <a href="https://www.linkedin.com/in/thi%C3%AAn-ng%E1%BB%8Dc-4b65742b6/" target="_blank">
                            <img className="intro-img" src={linkedin} alt=""></img>
                        </a>
                        <a href="https://www.instagram.com/_ngthien192/" target="_blank">
                            <img className="intro-img" src={instagram} alt=""></img>
                        </a>
                    </div>
                </div>
                <div className="intro-right">
                    <img className="intro-vector1" src={Vector1} alt=""></img>
                    <img className="intro-vector2" src={Vector2} alt=""></img>
                    <img className="intro-boy" src={boy} alt=""></img>
                    <motion.img 
                        className="intro-icon" 
                        src={glassesimoji} 
                        alt="" 
                        initial={{left: '-40%'}}
                        whileInView={{left: '-20%'}}
                        transition={transition}
                    />
                    <motion.div className="intro-box box-1"
                        initial={{right: '-12%', top: '0%'}}
                        whileInView={{right: '-5%', top: '0%'}}
                        transition={transition}
                    >
                        <img className="intro-i" src={crown}></img>
                        <span className="intro-description">Web Developer</span>
                    </motion.div>
                    <motion.div className="intro-box box-2"
                        initial={{left: '5%', bottom: '-2%'}}
                        whileInView={{left: '5%', bottom: '7%'}}
                        transition={transition}
                    >
                        <img className="intro-i" src={thumbup}></img>
                        <span className="intro-description">Best Design Award</span>
                    </motion.div>
                    <div className="blur-1"></div>
                    <div className="blur-2"></div>
                </div>
            </div>
        </div>
    )
}   
export default Intro