import React, { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import './Contact.css'
const Contact = () => {
    const form = useRef()

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_fq03o7d', 'template_soqkud8', form.current, {
            publicKey: 'rhkUfv1i3leww3Mqp',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            form.current.reset();
            setDone(true)
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <div className="contact-form">
            <div className="c-left">
                <div className="awesome">
                    <span className="title">Get in touch</span>
                    <br />
                    <span className="desc">Contact me</span>
                    <div className="blur-blue"></div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="input" placeholder="Name" />
                    <input type="email" name="user_email" className="input" placeholder="Email" />
                    <textarea name="message" placeholder="Message" className="textarea" />
                    <button type="submit" className="button btn-action">Send</button>
                    <span className="done">
                        {done && "Thanks for contact in me"}
                    </span>
                    <div className="blur-pur"></div>
                </form>
            </div>
        </div>
    )
}

export default Contact  