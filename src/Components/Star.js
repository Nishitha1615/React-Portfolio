import React from 'react'
import "../Components/Styles/App.scss"
import useMediaQuery from '@mui/material/useMediaQuery';
export const Star = () => {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <div>{` ${matches}`}
     
<div class="page-bg"></div>

<div class="animation-wrapper">
  <div class="particle particle-1"></div>
  <div class="particle particle-2"></div>
  <div class="particle particle-3"></div>
  <div class="particle particle-4"></div>
</div>


{/* <div class="afterlogo"></div>
<div id="title">
  <span>
    PURE CSS
  </span>
  <br />
  <span>
    PARALLAX PIXEL STARS
  </span>
</div> */}

    </div>
  )
}
