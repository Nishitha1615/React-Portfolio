import React from 'react'
import "./Styles/Skills.css"
import "./Styles/Skill.css"
import Skill from './Skill'
import useMediaQuery from '@mui/material/useMediaQuery';
const Skills = () => {
  const matches = useMediaQuery('(min-width:600px)');
  
  return (
    <div className='skills' id="skills" >{`${matches}`}
      <div className='ski'>
                <span >S</span>
                <span >K</span>
                <span >I</span>
                <span >L</span>
                <span >L</span>
                <span >S</span>
                <div className='blob3'  ></div>
            </div>
            
            <div>
            <Skill/>
            </div>
            
    </div>
    
    
  )
}

export default Skills
