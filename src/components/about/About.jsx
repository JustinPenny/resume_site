import './about.css'

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

            </div>
        </div>
    )
}

export default About