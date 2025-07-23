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
                164 Coutnry Gate ln, Summerville, SC, 29485<p/>
                <a className="gradient__text" href="mailto:name@email.com">justincpenny@hotmail.com</a>
            </div>
            <div className='about__body'>
            I am a Quality Assurance Engineer seeking remote employment. 
            With a BA in Computer Science and a wealth of experience working in the Quality Assurance industry, 
            I possess a combination of studied understanding and real world implementation of manual and automated testing. 
            I pride myself on my ability to learn new systems and techniques.
            </div>
            <div className='about__links'>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/justin-penny-b34703150/">
                    <img className="flaticon" src={linkedin} alt="linkedin icon" title="Linkedin"></img>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/JustinPenny" title="Github">
                    <img className="flaticon" src={github} alt="github icon"></img>
                </a>
            </div>
            <a href="../../assets/justinResume.pdf" download="Justin_Penny_Resume">Download the pdf</a>

        </div>
    )
}

export default About