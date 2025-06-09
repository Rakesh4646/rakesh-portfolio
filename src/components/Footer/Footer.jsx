import { Link } from "react-router-dom";
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaMobileScreen } from 'react-icons/fa6'
import "./Footer.scss"

function Footer() {
    return (
        <>
            <footer className='footer-wrap'>
                <div className="container footer-grid">
                    <div className="footer-col">
                        <h4>About Rakesh Gupta</h4>
                        <p>Rakesh Gupta is a frontend developer with a passion for building user-centric, responsive web apps using React.</p>
                    </div>
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/skills">Skills</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Get In Touch</h4>
                        <ul>
                            <li>
                                <span>
                                    <FaEnvelope />
                                </span>
                                <a href="mailto:rakeshgupta274021@gmail.com" target='_blank'>rakeshgupta274021@gmail.com</a>
                            </li>
                            <li>
                                <span>
                                    <FaMobileScreen />
                                </span>
                                <a href="tel:+918879479679" target='_blank'>+91 88794 79679</a>
                            </li>
                            <li>
                                <span>
                                    <FaMapMarkerAlt />
                                </span>
                                <a href="https://maps.app.goo.gl/SpY1VBeLT54rrxNcA" target='_blank'>Andheri East, Mumbai-93</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom container">
                    <p>© {new Date().getFullYear()} Rakesh Gupta. All rights reserved.</p>
                </div>

            </footer>
        </>
    )
}

export default Footer