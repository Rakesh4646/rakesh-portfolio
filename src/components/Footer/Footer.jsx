import { Link } from "react-router-dom"
import "./Footer.scss"

function Footer() {
    return (
        <>
            <footer className='footer-wrap'>
                <div className="container footer-grid">
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li>
                                <p>Email: <a href="mailto:rakeshgupta274021@gmail.com">rakeshgupta274021@gmail.com</a></p>
                            </li>
                            <li>
                                <p>Phone: <a href="tel:+918879479679">+91 88794 79679</a></p>
                            </li>
                        </ul>
                        {/* <button onClick={toggleDarkMode} className="toggle-theme">
                            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
                        </button> */}
                    </div>
                    <div className="footer-col">
                        <h4>Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/skills">Skills</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>About</h4>
                        <p>Rakesh Gupta is a frontend developer with a passion for building user-centric, responsive web apps using React.</p>
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