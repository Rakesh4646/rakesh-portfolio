import './Banner.scss';

let bannerImage = '/assets/images/banner-image.png';

function Banner() {
    return (
        <>
            <section className="banner-wrap">
                <div className="container banner-sides">
                    <div className="banner-left">
                        <h1 className='banner-heading'>Hello, I'm <br />Rakesh Gupta</h1>
                        <p className="banner-subheading">I'm Front-End Developer with 3+ years of experience in React and modern web development, specializing in creating
                            reusable components, managing state with React Hooks, and integrating APIs. Skilled in responsive design to ensure
                            seamless user experiences across devices. Strong problem-solving abilities and a focus on performance optimization</p>
                        <button>Say Hello!</button>
                    </div>
                    <div className="banner-right">
                        <img src={bannerImage} alt="banner image" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner