import './projects.css'

const Projcets = () =>{
    return(
        <div className="Projects__main" id="projects">
        <hr/>
        <h1 className='Projects__heading'>PROJECTS</h1>
            <div  className='Projects__block'>
                <div className="Projects__cosmetic">
                    Cosmetic Projects
                </div>
                <div className="Projects__functional">
                    Functional Projects
                </div>
                <div className="Projects__wip">
                    Projects in progress / experimental
                </div>
            </div>
        </div>
    )
}

export default Projcets