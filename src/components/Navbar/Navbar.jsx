import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <section className='navbar-wrap'>
        <nav className="container navbar">
          <div><Link to="/">Rakesh Gupta</Link></div>
          <ul className='navbar-list'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </section>
    </>
  )
}

export default Navbar