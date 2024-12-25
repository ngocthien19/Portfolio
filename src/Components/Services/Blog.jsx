import React from "react"
import { themeContext } from "../../Context"
import { useContext } from "react"
import './Blog.css'
import { motion } from "framer-motion"

const Blog = ({ title, desc, button, emoji }) => {
    const transition = {duration : 2, type : 'spring'}
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <motion.div className="services-blog" style={{background : darkMode ? 'white' : ''}}
            initial={{opacity : 0, x: 70}}
            whileInView={{opacity : 1, x: 0}}
            transition={transition}
        >
            <img src={emoji} alt="" className="blog-img"></img>
            <h2 className="blog-title">{title}</h2>
            <p className="blog-desc">{desc}</p>
            <button className="blog-btn">{button}</button>
        </motion.div>
    )
}

export default Blog