import './experience.css'
import ExperienceBlock from '../../container/experienceBlock/ExperienceBlock';


// I would like to move this data into ExperienceData.jsx but i'm having trouble with the export/import
const experienceData =[
    {
        heading: "Quality Engineer",
        date: "June 2022 - Current", 
        subheading: "Bellese Technologies",
        bodyItems: [
            "Ensured quality of UI, API, Database, and AWS backend for a web application",
            "Automated UI testing using Cypress to cover smoke and regression testin",
            "Created a robust test suite using TestRails which drove down production bugs",
            "Set accurate capacity estimates by tracking work through Jira",
            "Implemented QA practices at all stages of the SDLC",
            "Improved process and captured vital work aspects through Confluence",
            "Established better cross-team communication through sync meetings to apply best practices"
            ]
    },
    
    {
        heading: "Engineer II",
        date: "March 2020 - June 2022", 
        subheading: "Dish Technologies",
        bodyItems: [
            "Worked jointly with Data Solutions to maintain a working data pipeline in AWS",
            "Mentored new programmers in practical automation to reduce workload",
            "Performed regression testing and code reviews to locate causes of defects",
            "Wrote test cases to drive down rate of missed bugs into live production",
            "Used Python and Selenium Framework to write and execute automation testing"
            ]
    },

    {
        heading: "Systems QA Engineer",
        date: "February 2019 - December 2019", 
        subheading: "Amazon Robotics",
        bodyItems: [
            "Maintained and operated a prototype robotic cell through development into alpha phases",
            "Performed Software and Hardware testing and implemented fixes where appropriate",
            "Collaborated with task owners and local administration to ensure project meets deadlines"
            ]
    },
        {
        heading: "Auto Tech",
        date: "March 2018 - November 2018", 
        subheading: "Geek Squad Auto",
        bodyItems: [
            "Provide solutions for enhancement of any vehicle sound systems",
            "Integrate vehicles with aftermarket cameras, GPS, accessories, and lighting",
            "Complete custom solutions for vehicles typically considered outside of normal aftermarket production",
            "Train sales floor staff on key features of new auto accessories"
            ]
    },
];

const Experience = () =>{
    return(
        <div className='Experience__main' id="experience">
            <hr/>
            <h1 className='Experience__heading'>EXPERIENCE</h1>
            <div  className='Experience__block'>
                {experienceData.map((item, index) =>(
                    <ExperienceBlock heading={item.heading} date={item.date} subheading={item.subheading} bodyItems={item.bodyItems} key={item.heading + index}/>
                )
            )}
            </div>
        </div>
    )
}

export default Experience