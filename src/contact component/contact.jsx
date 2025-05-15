import React, { useRef } from 'react';
import './contact.css';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { motion as Motion } from 'framer-motion';
import FadeInWhenVisible from '../Motion';

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_v6jgaft',
      'template_iy0mg7r',
      form.current,
      'CGU1gVYcWvXKW0_td'
    )
    .then(() => {
      toast.success('Message sent successfully!');
      form.current.reset();
    })
    .catch(() => {
      toast.error('Failed to send message. Please try again.');
    });
  };

  return (
    <div className='contact' id='contact'>
      <FadeInWhenVisible><h1>Contact</h1></FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <p>lets get in touch and build something together, i would <span style={{color: '#e2f87b'}}>love</span> to hear from you</p>
      </FadeInWhenVisible>
      <hr />
      <FadeInWhenVisible variant='scaleUp' delay={0.7}>
        <form ref={form} onSubmit={handleSubmit}>
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
      </FadeInWhenVisible>
    </div>
  );
}

export default Contact;
