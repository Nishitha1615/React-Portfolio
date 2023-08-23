import React, { useState } from "react";
import { Link } from "react-scroll";
import "../Components/Styles/App.scss";
import "../Components/Styles/Frontpage.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import Home from "../Components/Home"

const Nav = () => {
  const matches = useMediaQuery('(min-width:600px)');

  const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
  return (
    <div>{` ${matches}`}
      <ul>
        <li>
          <div className=" navbar nav-comp">
            <nav role="navigation" class="primary-navigation">
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                {/* <li>
                <Link className="link" id="home" to="home" activeClass="active"  spy={true} smooth={true} duration={2000} onClick={closeMenu}>NM</Link>
                </li> */}
                
                <li>
                <Link  to= 'about' className="menu" id="home" activeClass="active" offset={-300} smooth={true} duration={1500} onClick={closeMenu}>About</Link>
                </li>
                <li>
                  <Link  to= 'skills' className="menu" id="home" activeClass="active" offset={-820} spy={true} smooth={true} duration={2000} onClick={closeMenu}>Skills</Link>
                </li>
                <li>
                <Link  to= 'project' className="menu" id="home" activeClass="active" offset={-7350} spy={true} smooth={true} duration={2000} onClick={closeMenu}>Project</Link>
                </li>
                <li>
                <Link  to= 'gmap' className="menu" id="home" activeClass="active"  spy={true} smooth={true} duration={2000} onClick={closeMenu}>Contact</Link>
                </li>
              </ul>
            </nav>

            {/* <Link spy={true} smooth={true} offset={50} duration={500} className="section-1">
            About
          </Link> 

          <Link  spy={true} smooth={true} offset={50} duration={500} className="section-item">
           Home
          </Link> */}
          </div>
        </li>
        
      </ul>
      <span className="logoname">
      <Link className="link" id="home" to="homepage" activeClass="active"  spy={true} offset={-700} smooth={true} duration={2000} onClick={closeMenu} style={{"margin-bottom":"41.6rem",fontSize:"1.5rem",'font-family': 'Qwitcher Grypen, cursive',color:"#ea50bc"}}>NM</Link>
      </span>

      {/* <nav role="navigation" class="primary-navigation">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Work &dtrif;</a>
      <ul class="dropdown">
        <li><a href="#">Web Development</a></li>
        <li><a href="#">Web Design</a></li>
        <li><a href="#">Illustration</a></li>
        <li><a href="#">Iconography</a></li>
      </ul>
    </li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav> */}

      {/* <li><a href="#">Home</a></li>
          <li><a href="#">Work &dtrif;</a>
            
          </li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li> */}
          {/* <Home/> */}
    </div>

    
  );
};

export default Nav;
