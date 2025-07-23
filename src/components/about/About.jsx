import './about.css'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

const About = () =>{
    return(
        <div className="about__container"  id="about">
            <h1 className="about__name-section">Justin
                <span className="gradient__text"> Penny</span>
            </h1>
            <div className='about__sub-heading'>
                <a className="gradient__text about__email" href="mailto:name@email.com">justincpenny@hotmail.com</a>
            </div>
            <div className='about__body'>  
            I'm a: <span className="gradient__text tracking-in-expand"id='cycle'></span>
            </div>
            <div className='about__links'>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/justin-penny-b34703150/">
                    <img className="flaticon" src={linkedin} alt="linkedin icon" title="Linkedin"></img>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/JustinPenny" title="Github">
                    <img className="flaticon" src={github} alt="github icon"></img>
                </a>
            </div>
            <h3 className="about__resume">
            <a href="../../assets/justinResume.pdf" download="Justin_Penny_Resume">Click HERE to Download My Resume!</a>
            </h3>
            

        </div>
    )
}

export default About