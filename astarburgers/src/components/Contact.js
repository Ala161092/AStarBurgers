import React from "react";
import { useState } from "react";
import { send } from 'emailjs-com'




const Contact = () => {
    const [successfulMessage, setsuccessfulMessage] = useState('')

    
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    })

    const handleChange = (event) => {
        setToSend({...toSend, [event.target.name]: event.target.value})
    }

    const onSubmit = (event) => {
        event.preventDefault()
        send(
            'service_09hnpa9',
            'template_0a4i31f',
            toSend,
            'user_sBqMaHIyQs01RJo9FTsWG'
        ) 
        .then((response) => {
            setsuccessfulMessage('Success, email has been sent')
            console.log('Success, email has been sent', response.status, response.text)
            
        })
        .catch((error) => {
            setsuccessfulMessage('Error, check all details have been written correctly')
            console.log('Error, check all details have been written correctly', error)
        })
    }


  return (
    <div className="contact-wrapper">
    <div className="form-wrapper" id='contact'>
         <form onSubmit={onSubmit}>
        <h2>Contact Us</h2>
        <p className="left-para">Contact our team if you require any further information regarding events that we can cater for and any personalized quotes.</p>
            <input
            type='text'
            name='from_name'
            placeholder="Enter your name"
            value={toSend.from_name}
            onChange={handleChange}
            required
            />
            <input
            type='text'
            name='to_name'
            placeholder="Enter to name"
            value={toSend.to_name}
            onChange={handleChange}
            />
            <textarea
            type='text'
            name='message'
            placeholder="Enter your Message"
            value={toSend.message}
            onChange={handleChange}
            required
            
            />
            <input
            type='email'
            name='reply_to'
            placeholder="Enter a valid email address"
            value={toSend.reply_to}
            onChange={handleChange}
            required
            />
            
            <button className='submit-btn' type='submit'>Submit!</button>
        <div>
            <p>{successfulMessage}</p>
        </div>
        </form>
        <div className="contact-details">
            <div>
            <ion-icon name="phone-portrait-outline"/>
            <p>+44 02078560391</p>
            </div>
            <div>
            <ion-icon name="mail-outline"/>
            <p>info@astarburgers.com</p>
            </div>
            <div>
            <ion-icon name="logo-instagram"><a href='instagram.com/astarburgers_'/></ion-icon>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact