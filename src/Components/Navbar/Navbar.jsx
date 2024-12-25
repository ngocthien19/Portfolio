import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {
    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>SynDy</div>
                <Toggle />
            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                            <li className='n-item'>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true} >
                            <li className='n-item'>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true} >
                            <li className='n-item'>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true} >
                            <li className='n-item'>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonials' smooth={true}>
                            <li className='n-item'>Testimonials</li>
                        </Link>                     
                    </ul>
                </div>
                <button className='button btn_action'>
                    Contact
                </button>
            </div>
        </div>
    )
}

export default Navbar