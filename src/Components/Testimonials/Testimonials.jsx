import './Testimonials.css'
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import profilePic1 from "../../img/profile1.jpg"
import profilePic2 from "../../img/profile2.jpg"
import profilePic3 from "../../img/profile3.jpg"
import profilePic4 from "../../img/profile4.jpg"
import { Pagination } from 'swiper/modules'
import { themeContext } from "../../Context"
import { useContext } from "react"
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    const clients = [
        {
            img: profilePic1,
            review: `John is one of the most hardworking students I’ve ever met. 
                    He always dedicates his time to studying, even when others are relaxing. 
                    His determination to understand every detail of a subject is truly inspiring. Thanks to his efforts, 
                    his academic achievements always stand out.`,
            name: "Ant"
        },
        {
            img: profilePic2,
            review: `I admire John's ability to break down complex concepts into smaller, manageable parts.
                    His positive attitude and supportive nature make him a great mentor. 
                    His dedication to learning and his unwavering commitment to his goals have always been a great asset to me.`,
            name: "Thomas"
        },
        {
            img: profilePic3,
            review: `Anna’s dedication to her studies is remarkable. She often spends hours at the library, 
                    reviewing and refining her knowledge. Her ability to stay focused and organized is what sets her apart. 
                    Her commitment to excellence motivates everyone around her to work harder.`,
            name: "Tomi"
        },
        {
            img: profilePic4,
            review: `Mike is a great example of persistence and diligence. 
                    Even when he faces challenges in his studies, he never gives up. He seeks help when needed, 
                    showing his willingness to improve. 
                    His hard work has paid off in excellent results and a deeper understanding of his subjects.`,
            name: "Chengist"
        },
    ]
    return (
        <div className="t-wrapper" id='Testimonials'>
            <div className="t-heading">
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span>From me...</span>
                <div className="t-blur1"></div>
                <div className="t-blur2"></div>
            </div>

            {/* Slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='testimonial' >
                                <img src={client.img} alt="Client" />
                                <div className="t-text">
                                    <p style={{color : darkMode ? 'white' : ''}}>{client.review}</p>
                                    <span>– {client.name}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Testimonials