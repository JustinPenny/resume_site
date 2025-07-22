import './experience.css'
import ExperienceBlock from '../../container/ExperienceBlock';


// I would like to move this data into ExperienceData.jsx but i'm having trouble with the export/import
const experienceData =[
    {
        title: "Quality Engineer",
        employmentDuration: "June 2022 - Current", 
        company: "Bellese Technologies",
        experienceItems: [
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
        title: "Engineer II",
        employmentDuration: "March 2020 - June 2022", 
        company: "Dish Technologies",
        experienceItems: [
            "Worked jointly with Data Solutions to maintain a working data pipeline in AWS",
            "Mentored new programmers in practical automation to reduce workload",
            "Performed regression testing and code reviews to locate causes of defects",
            "Wrote test cases to drive down rate of missed bugs into live production",
            "Used Python and Selenium Framework to write and execute automation testing"
            ]
    },

    {
        title: "Systems QA Engineer",
        employmentDuration: "February 2019 - December 2019", 
        company: "Amazon Robotics",
        experienceItems: [
            "Maintained and operated a prototype robotic cell through development into alpha phases",
            "Performed Software and Hardware testing and implemented fixes where appropriate",
            "Collaborated with task owners and local administration to ensure project meets deadlines"
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
                    <ExperienceBlock title={item.title} employmentDuration={item.employmentDuration} company={item.company} experienceItems={item.experienceItems} key={item.title + index}/>
                )
            )}
            </div>
        </div>
    )
}

export default Experience