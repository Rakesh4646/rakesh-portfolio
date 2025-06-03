import Slider from 'react-slick';
import './SkillsSection.scss';


const skills = [
    { name: 'HTML5', icon: '/assets/images/logos/HTML5_logo.png' },
    { name: 'CSS3', icon: '/assets/images/logos/CSS3_logo.png' },
    { name: 'JavaScript', icon: '/assets/images/logos/javascript_logo.png' },
    { name: 'React', icon: '/assets/images/logos/react_logo.png' },
    { name: 'SCSS', icon: '/assets/images/logos/scss_logo.png' },
    { name: 'Git', icon: '/assets/images/logos/git.jpg' },
    { name: 'AEM', icon: '/assets/images/logos/aem_logo.png' },
    { name: 'GitHub', icon: '/assets/images/logos/github-logo.png' },
    { name: 'jQuery', icon: '/assets/images/logos/jquery_logo.png' },
];


function SkillsSection() {
    var settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
    };
    return (
        <>
            <section className="skills-section">
                <div className='container'>
                    <h2 className="skills-title">My Skills</h2>
                    <Slider {...settings}>
                        {
                            skills.map(language => {
                                return (
                                    <div className='skill-card'>
                                        <div className="skill-img">
                                            <img src={language.icon} alt="" />
                                        </div>
                                        <h3>{language.name}</h3>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default SkillsSection