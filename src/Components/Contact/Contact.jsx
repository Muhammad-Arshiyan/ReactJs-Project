import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

export const Contact = () => {
  return (
    <div className='contact container'>
        <div className="conatact-col">
            <h3>Send us a message <img src={msg_icon} className="message" /></h3>
            <p>Feel free to reach out through contact from or find our contact imformation below. Your feedback, question, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li className='mb-3'><img src={mail_icon} className="contact-icon" />Contact@Arshiyan</li>
                <li className='mb-3'><img src={phone_icon} className="contact-icon" />+1 123-456-7890</li>
                <li className='mb-3'><img src={location_icon} className="contact-icon" />United Stated Main Road ,7890</li>
                <li></li>
            </ul>
        </div>
        <div className="contact-col">
            <form>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                 <label>Phone Number</label>
                 <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                 <label>Write your messages here</label>
                 <textarea name="message" rows='6' placeholder='Enter your message' ></textarea>
                 <button type='submit' className='dark-btn submit'>Submit now <img src={white_arrow} alt="" /></button>
            </form>

        </div>
    </div>
  )
}
