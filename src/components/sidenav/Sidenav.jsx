import './sidenav.css'
import profile from '../../assets/profile.jpg'

const sidenav = () =>{
    return(
        <div>
            <div className='sidenav gradient__bg'>
                <div className='sidenav__image'>
                    <a href="#about">
                        <img src={profile} alt="profile"/>
                    </a>
                </div>
                

                    <ul className='sidenav_list'>
                        <li className='nav-item'>
                            <a href="#about">About</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#education">Education</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#experience">Experience</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#skills">Skills</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#projects">Projects</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#interests">Interests</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#info">Info</a>
                        </li>
                    </ul>
            </div>
        </div>
    )
}

export default sidenav