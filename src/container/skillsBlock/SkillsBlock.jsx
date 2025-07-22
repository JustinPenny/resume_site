import './skillsBlock.css'

const SkillsBlock = ({heading, skills}) => {
    return (
                <div className='SkillsBlock__main'>
            <h3 className='SkillsBlock__heading'>
                {heading}
            </h3>
            <div className='SkillsBlock__body'> 
                <ul>
                    {skills.map((item) =>(
                        <li key={item}>{item}</li>
                    ))} 
                </ul>
            </div>
        </div>
    )
}

export default SkillsBlock