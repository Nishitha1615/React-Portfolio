import React from 'react';
import Typical from 'react-typical'
// import { FrontPage } from './FrontPage';
import './Common.css';
import photo from "../Assest/photo.jpeg";
import useMediaQuery from '@mui/material/useMediaQuery';
const Home = () => {
  const matches = useMediaQuery('(min-width:600px)');
    console.log('Home')
  return (
    



<div className='home writer' id='homepage'>{`${matches}`}
        <h4>Hi, I'm Nishitha,<div className='typing'>A <Typical className="typing"
          loop={Infinity}
          wrapper="b"
          steps={[
            "Full Stack Developer", 1000,
            "",1000
          ]}
        />
        </div>
         <div className='afterlogo '></div>
        </h4>
      </div>
  //      {/* <div className='afterlogo '></div>  */}
     
   
  //  {/* <img className='profilepic' src={photo} alt='Nishitha pic'></img> */}
  //  {/* <FrontPage/> */}

  )
}

export default Home

  