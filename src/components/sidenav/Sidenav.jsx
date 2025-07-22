import './sidenav.css'
import profile from '../../assets/profile.jpg'
import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Menu = () =>(
    <>
    <li className='nav-item'>
        <a href="#about">About</a>
    </li>
    <li className='nav-item'>
        <a href="#experience">Experience</a>
    </li>
    <li className='nav-item'>
        <a href="#education">Education</a>
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
    </>
)

const Sidenav = () =>{
    const [toggleMenu, setToggleMenu] = useState(false);
    return(
            <div className='Sidenav gradient__bg'>
                <div className='Sidenav__container'>
                <div className='Sidenav__image'>
                    <a href="#about">
                        <img src={profile} alt="profile"/>
                    </a>
                </div>
                <ul className='Sidenav__list'>
                    <Menu />
                </ul>
        
        
                <div className='Sidebar__nav--toggle'>
                {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
                }

                {/*toggleMenu && -> if menu is toggled and the variable is true, execute block */}
                {toggleMenu && (
                <div className="Sidebar__navbar-menu_container">
                    <div className="Sidebar__navbar-menu_container-links">
                    <Menu />
                    </div>
                </div>
                )
                }
                </div>
                </div>
            </div>
    )
}

export default Sidenav