import { Link } from "react-router-dom"
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 24 24">
                                        <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.5l-8 5-8-5V6l8 5 8-5v2.5z" />
                                    </svg>
                                </span>
                                <a href="mailto:rakeshgupta274021@gmail.com">rakeshgupta274021@gmail.com</a>
                            </li>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 24 24">
                                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.21c1.2.5 2.5.77 3.84.77a1 1 0 011 1v3.5a1 1 0 01-1 1C10.29 22 2 13.71 2 3.5A1 1 0 013 2.5H6.5a1 1 0 011 1c0 1.34.27 2.64.77 3.84a1 1 0 01-.21 1.11l-2.2 2.2z" />
                                    </svg>
                                </span>
                                <a href="tel:+918879479679">+91 88794 79679</a>
                            </li>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 24 24">
                                        <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                                    </svg>
                                </span>
                                <a href="https://maps.app.goo.gl/SpY1VBeLT54rrxNcA">Andheri East, Mumbai-93</a>
                            </li>
                        </ul>
                        {/* <button onClick={toggleDarkMode} className="toggle-theme">
                            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
                        </button> */}
                    </div>
                </div>
                <div className="footer-bottom container">
                    <p>© {new Date().getFullYear()} Rakesh Gupta. All rights reserved.</p>
                    {/* <button className="scroll-top" onClick={scrollToTop}>↑ Top</button> */}
                </div>

            </footer>
        </>
    )
}

export default Footer