import './education.css'
import ExperienceBlock from '../../container/experienceBlock/ExperienceBlock';

const educationData =[
    {
        heading: "University of North Texas",
        date: "August 2014 - December 2018", 
        subheading: "Bachelor of Science: Computer Science",
        bodyItems: [
            "GPA: 3.0"
            ]
    },
];

const Education = () =>{
    return(
        <div className='Education__main' id="education">
            <hr/>
            <h1 className='Education__heading'>EDUCATION</h1>
            <div  className='Education__block'>
                {educationData.map((item, index) =>(
                    <ExperienceBlock heading={item.heading} date={item.date} subheading={item.subheading} bodyItems={item.bodyItems} key={item.heading + index}/>
                )
            )}
            </div>
        </div>
    )
}

export default Education