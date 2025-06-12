import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { FaMobileScreen } from 'react-icons/fa6'
import './ContactMe.scss'

function ContactMe() {
    return (
        <>
            <section className="contact-me-wrap">
                <div className="container">
                    <h2>Contact Me</h2>
                    <div className="contact-cards">
                        <ul>
                            <li><a href="tel:+918879479679" target='_blank' rel="noreferrer">
                                <span><FaMobileScreen /></span>
                                <p className="contact-name">Call Me</p>
                                <p className="contact-data">+91 88794 79679</p></a>
                            </li>
                            <li><a href="mailto:rakeshgupta274021@gmail.com" target='_blank' rel="noreferrer">
                                <span><FaEnvelope /></span>
                                <p className="contact-name">Mail Us</p>
                                <p className="contact-data">rakeshgupta274021@gmail.com</p></a>
                            </li>
                            <li><a href="https://maps.app.goo.gl/SpY1VBeLT54rrxNcA" target='_blank' rel="noreferrer">
                                <span><FaMapMarkerAlt /></span>
                                <p className="contact-name">Visit Us</p>
                                <p className="contact-data">Andheri East, Mumbai-93</p></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactMe