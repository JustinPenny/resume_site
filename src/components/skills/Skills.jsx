import './skills.css'
import SkillsBlock from '../../container/skillsBlock/SkillsBlock'

const skillsData = [
    {
        heading: "Programming Languages",
        skills:["Javascript", "Typescript", "Python", "Java", ]
    },
    {
        heading: "Tools & Frameworks",
        skills:[ "React", "Cypress", "VScode"]
    }
]

const Skills = () =>{
    return(
        <div className='Skills__main' id="Skills">
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