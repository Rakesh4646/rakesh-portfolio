import { Link } from "react-router-dom"
import "./HomeContact.scss"

function HomeContact() {
    return (
        <>
            <section className="home-contact-wraper">
                <div className="home-contact container">
                    <div>
                        <h3 className="home-contact-heading">Interested in working together?</h3>
                        <p className="hone-contact-subheading">I'm currently open to new opportunities and collaborations.</p>
                    </div>
                    <div className="contact-me-btn">
                        <Link to="/contact">
                            <button>
                                Contact me
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeContact