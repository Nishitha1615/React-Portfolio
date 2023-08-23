import React from 'react'
import "../Components/Styles/Frontpage.css"
import useMediaQuery from '@mui/material/useMediaQuery';
export const FrontPage = () => {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <div>{`${matches}`}
    <div className='container'>
    <div className='ball-1'></div>
            <div className='ball-2'></div>
            <div className='ball-3'></div>
        <div className='box'>
            
        </div>
    </div>
    </div>
  )
}
