import './experienceBlock.css'

// Currently this is being used by the Skills and Education components
const ExperienceBlock = ({heading, date, subheading, bodyItems}) =>{
    return(
        <div className='ExperienceBlock__main'>
            <h3 className='ExperienceBlock__heading'>
                {heading}
            </h3>
            <div className='ExperienceBlock__date'>
                <span className='ExperienceBlock__date-text gradient__text'>
                    {date}
                </span>
            </div>
            <div className='ExperienceBlock__subheading'>
                {subheading}
            </div>
            <div className='ExperienceBlock__body'> 
                <ul>
                    {bodyItems.map((item) =>(
                        <li key={item}>{item}</li>
                    ))} 
                </ul>
            </div>
        </div>
    )
}

export default ExperienceBlock