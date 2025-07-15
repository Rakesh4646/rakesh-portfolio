import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import './ContactForm.scss'

function ContactForm() {
    return (
        <>
            <section className="contact-section container">
                <div className="contact-container">
                    <div className="contact-form">
                        <h2>Get in Touch</h2>
                        <form>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <textarea placeholder="Your Message" rows="6" required />
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                    <div className="contact-social">
                        <h3>Message Me</h3>
                        <p>I'd love to hear from you! Fill out the form to send me a message. Also</p>

                        <h3>Follow Me</h3>
                        <ul>
                            <li><a href="https://github.com/Rakesh4646/" target="_blank" rel="noopener noreferrer"><FaGithub
                            /></a></li>
                            <li><a href="https://www.linkedin.com/in/rakesh-gupta-bb8a381b3/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
                            <li><a href="https://www.instagram.com/rakesh___46/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactForm