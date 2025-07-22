import './experienceBlock.css'

// This data is being passed in from Experience.jsx
// I'm planning on splitting the data into its own file as to not be so large
const ExperienceBlock = ({heading, date, subheading, bodyItems}) =>{
    return(
        <div className='ExperienceBlock__main'>
            <h3 className='ExperienceBlock__heading'>
                {heading}
            </h3>
            <div className='ExperienceBlock__date'>
                <span className='ExperienceBlock__date-text'>
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