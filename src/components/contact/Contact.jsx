import React, {useContext, useRef, useState} from 'react'
import './Contact.css'
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import emailjs from 'emailjs-com'
import { themeContext } from '../../context'

const Contact = () => {
    const formRef = useRef();
    const [done,setDone] = useState(false);
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs 
        .sendForm( 
            "service_i45882l", 
            "template_amahqvb",
            formRef.current, 
            "FR-fCeUaEH95XZsxQ",
            )
        .then(
            (result) => {
                console.log(result.text);
                setDone(true)
            },
            (error) => {
                console.log(error.text)
            }
        )

    }

  return (
    <div className='c'>
        <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" /> +94 71 361 3974
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" /> sucharith.dasun@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" /> No 64,Kamelwatta, Aluthapola, Dunagaha.
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. Always available for freelancing
                        if the right project comes along to me. 
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name="user_email" />
                        <textarea placeholder="Message" name="message" rows="5"></textarea>
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Contact