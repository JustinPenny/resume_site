import './experienceBlock.css'

// This data is being passed in from Experience.jsx
// I'm planning on splitting the data into its own file as to not be so large
const ExperienceBlock = ({title, employmentDuration, company, experienceItems}) =>{
    return(
        <div className='ExperienceBlock__main'>
            <h3 className='ExperienceBlock__title'>
                {title}
            </h3>
            <div className='ExperienceBlock__employmentDuration'>
                <span className='ExperienceBlock__employmentDuration-text'>
                    {employmentDuration}
                </span>
            </div>
            <div className='ExperienceBlock__company'>
                {company}
            </div>
            <div className='ExperienceBlock__experienceItems'> 
                <ul>
                    {experienceItems.map((item) =>(
                        <li key={item}>{item}</li>
                    ))} 
                </ul>
            </div>
        </div>
    )
}

export default ExperienceBlock