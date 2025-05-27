import './AboutSection.scss';

let aboutImage = '/assets/images/about-me-img.png';

function AboutSection() {
    return (
        <>
            <section className="about-wrap">
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-content">
                        <div className="about-image">
                            <img src={aboutImage} alt="Rakesh Gupta" />
                        </div>
                        <div className="about-text">
                            <p>
                                I'm Rakesh Gupta, a front-end developer with over 3 years of experience building responsive, scalable web interfaces using React. I enjoy turning complex ideas into simple and intuitive experiences. I'm always learning and improving my skills to create clean and efficient code.
                            </p>
                            <p>
                                My core focus is delivering fast, accessible, and user-friendly websites. I work with modern tools and frameworks including HTML5, CSS3, SCSS, JavaScript (ES6+), React.js, React Hooks, Git, and Adobe Experience Manager (AEM). I'm passionate about crafting clean, component-driven UIs, integrating APIs efficiently, and maintaining code quality through best practices and performance optimization.
                            </p>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default AboutSection