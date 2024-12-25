import './Works.css'
import React from "react"
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import { themeContext } from "../../Context"
import { useContext } from "react"
import { motion } from "framer-motion"

const Works = () => {
    const transition = {duration : 3, type : 'spring'}
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="works">
            <div className='awesome'>
                <h1 className='services-title'>Works for All these</h1>
                <span className='services-strong'>Brands & Clients</span>
                <p className='services-desc' style={{color: darkMode ? 'white' : ''}}>Lorem ispum is simpley dummy text of printing of printing Lorem 
                    <br />
                    ispum is simpley dummy text of printing
                    <br />
                    ispum is simpley dummy text of printing of printing Lorem 
                    <br />
                    ispum is simpley dummy text
                </p>    
                <button className='button services-btn'>Hire me</button>
                <div className='blur-Blue'></div>
            </div>
            <div className='w-right'>
                <motion.div className='w-mainCircle'
                    initial={{rotate: 45}}
                    whileInView={{rotate: 0}}
                    transition={transition}
                > 
                    <div className='w-secCircle' style={{background : darkMode ? 'white' : ''}}>
                        <img src={Upwork} alt='' />
                    </div>
                    <div className='w-secCircle' style={{background : darkMode ? 'white' : ''}}>
                        <img src={Fiverr} alt='' />
                    </div>
                    <div className='w-secCircle' style={{background : darkMode ? 'white' : ''}}>
                        <img src={Amazon} alt='' />
                    </div>
                    <div className='w-secCircle' style={{background : darkMode ? 'white' : ''}}>
                        <img src={Shopify} alt='' />
                    </div>
                    <div className='w-secCircle' style={{background : darkMode ? 'white' : ''}}>
                        <img src={Facebook} alt='' />
                    </div>
                </motion.div>
                <div className='w-backCircle blueCircle'></div>
                <div className='w-backCircle yellowCircle'></div>
            </div>
        </div>
    )
}

export default Works