import './skills.css'
import SkillsBlock from '../../container/skillsBlock/SkillsBlock'

const skillsData = [
    {
        heading: "Brief",
        skills: ["I am a Quality Assurance Specialist with a strong technical and programming backgorund. I adapt fast, learn new technologies even faster, and am an excellent addition to any team. I write clean maintainable code and implement best practices to prevent the introduction of bugs."]
    },
    {
        heading: "Programming Languages",
        skills:["Javascript", "Typescript", "Python", "Java", "SQL", "HTML/CSS (These Count)" ]
    },

    {
        heading: "Tools & Frameworks",
        skills:[ "React", "Angular", "Node js", "Cypress", "Postman", "VScode", "TestRails"]
    },

    {
        heading: "Business / Product",
        skills: [ "Agile/Waterfall", "Jira", "Confluence", "Capacity Planning", "Refinement"]
    },

    {
        heading: "Miscellaneous",
        skills: ["AWS", "Windows/Mac OS", "VCS", "Code Review", "Cross Team Collaboration"]
    }
]

const Skills = () =>{
    return(
        <div className='Skills__main' id="skills">
            <hr/>
            <h1 className='Skills__heading'>SKILLS</h1>
            <div  className='Skills__block'>
                {skillsData.map((item, index) =>(
                    <SkillsBlock heading={item.heading} skills={item.skills} key={item.heading + index}/>
                )
            )}
            </div>
        </div>
    )
}

export default Skills