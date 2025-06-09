import "./AboutMe.scss"


let resume = '/assets/myFiles/Rakesh_Gupta_Resume.pdf'

function AboutMe() {
    return (
        <>
            <section className="about-me">
                <div className="container">
                    <h2 className="aboutme-heading">About Me</h2>
                    <div className="about-test-wrap">
                        <div className="about-flex">
                            <div className="about-left">
                                <p>
                                    Hi, I’m <strong>Rakesh Gupta</strong>, a passionate Front-End Developer with over <strong>3 years of experience</strong> building responsive, user-friendly, and scalable web interfaces. I specialize in transforming complex design ideas into clean, functional, and visually appealing digital experiences that work seamlessly across all devices and browsers.
                                </p>
                                <p>
                                    I hold a <strong>Master’s degree in Computer Applications (MCA)</strong>, and I’ve worked extensively with front-end technologies like <strong>HTML5, CSS3, SCSS, JavaScript (ES6+), jQuery</strong>, and <strong>React.js</strong>. I also bring experience with <strong>Adobe Experience Manager (AEM)</strong>, where I developed reusable components and collaborated on enterprise-level projects.
                                </p>
                                <p>
                                    In my workflow, I rely on tools like <strong>Figma</strong> for UI collaboration, <strong>Git & GitHub</strong> for version control, and follow agile practices to deliver high-quality solutions. I value writing maintainable code, integrating APIs effectively, and optimizing performance for better user experience.
                                </p>
                            </div>
                            <div className="about-right">
                                <img src="/assets/images/about-image.png" alt="about" />
                            </div>
                        </div>
                        <p>
                            I'm continuously learning and exploring new technologies like <strong>Next.js</strong>, <strong>Framer Motion</strong>, and <strong>web accessibility standards</strong>. I stay up-to-date with modern development practices through tech blogs, online courses, and engaging with the developer community.
                        </p>
                        <p>
                            If you'd like to know anything else about my professional experience or want to discuss your next project with me, please feel free to get in touch!
                            <br />
                            <strong>I’m looking forward to hearing from you!</strong>
                        </p>
                        <p>- <strong>Rakesh Gupta</strong></p>
                        <a href={resume} download target="_blank" rel="noreferrer">Download Resume</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe