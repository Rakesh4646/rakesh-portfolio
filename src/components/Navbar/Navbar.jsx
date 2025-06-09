import { Link } from "react-router-dom";
import "./Navbar.scss";

let logoImage = '/assets/images/logo.png';

function Navbar() {
  return (
    <>
      <section className='navbar-wrap'>
        <nav className="container navbar">
          <div><Link to="/"><img src={logoImage} alt="logoImage" /></Link></div>
          <ul className='navbar-list'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
          </ul>
        </nav>
      </section>
    </>
  )
}

export default Navbar