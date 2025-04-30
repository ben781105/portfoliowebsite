import React from 'react'
import './contact.css'
import {motion as Motion} from 'framer-motion'
function Contact() {
  return (
    <div className='contact' id='contact'>
      <h1>Contact</h1>
      <p>lets get in touch and build something together, i would <span style={{color: '#e2f87b'}}>love</span> to hear from you</p>
      <hr />
      <div className='contact-details'>
        <span>
            <p>Email</p>
            <sub>benardleno78@gmail</sub>
        </span>
        <span>
            <p>Address</p>
            <sub>Entebbe, Uganda</sub>
        </span>
        <span>
            <p>Phone</p>
            <sub>+256 708 693 920</sub>
        </span>
      </div>
      <form
  action="https://formsubmit.co/benardleno78@gmail.com"
  method="POST"
  onSubmit={(e) => {
    const form = e.target;
    const nextInput = form.querySelector('input[name="_next"]');

    // Dynamically set redirect URL based on host
    if (window.location.hostname === "localhost") {
      nextInput.value = "http://localhost:5173/thank-you";
    } else {
      nextInput.value = "https://portfoliowebsite-0agg.onrender.com/thank-you";
    }
  }}
>
  <div className="inputs">
    <input type="text" name="name" placeholder="Your name" required />
    <input type="email" name="email" placeholder="Your email" required />
  </div>

  <textarea name="message" placeholder="Tell me about your project" required></textarea>

  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="" />

  <Motion.button
    type="submit"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.95 }}
  >
    Send message
  </Motion.button>

  <sub>* Your details will be kept private and will not be shared.</sub>
</form>



    </div>
  )
}

export default Contact
