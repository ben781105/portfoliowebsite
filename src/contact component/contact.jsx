import React from 'react'
import './contact.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import {motion as Motion} from 'framer-motion'
function Contact() {
  
const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
 
  const formData = new FormData(form);

  try {
     await axios.post("https://formsubmit.co/ajax/benardleno78@gmail.com",formData, {
   
      headers: {
        Accept: "application/json",
      },
      
    });
   toast.success("Message sent successfully!");
      form.reset();
  
  } catch(error){
    console.error("Error sending message:", error);
    toast.error("Network error. Try again later.");
  }
};

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
      <form onSubmit={handleSubmit}>
  <div className="inputs">
    <input type="text" name="name" placeholder="Your name" required />
    <input type="email" name="email" placeholder="Your email" required />
  </div>

  <textarea name="message" placeholder="Tell me about your project" required></textarea>

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
