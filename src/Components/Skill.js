import React from 'react'
import "./Styles/Skill.css"
import "../Components/Styles/App.scss";
import {Tooltip} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
const { Icons } = require("../Data/data.js")

const Skill = () => {
    const matches = useMediaQuery('(min-width:600px)');
  const IconItem = (props) =>
        <div className="skillpic" draggable={true}>
            <Tooltip title={props.name} >
                <div>{React.createElement(props.icon, props.options,props.iconstyle)}</div>
            </Tooltip>
        </div>
  return (


    <div className='myskills' id='About'>{`${matches}`}
    {/* <StarfieldAnimation
        style={{
            position: "absolute",
            width: "100%",
            height: "100%"
        }}
        numParticles={800}
        particleSpeed={0}
        dx={0.000000001} // x speed of stars in px/frame, default 0.05
        dy={0.000000001}
    /> */}

    {/* <div className='ski'>
        <span  >S</span>
        <span >K</span>
        <span >I</span>
        <span >L</span>
        <span >L</span>
        <span >S</span>
        <div className='blob3'  ></div>
    </div> */}
    <div className='skillimage'id='skills' >
        <div className="mysection" >
            {Icons.map((language, index) =>
                language.icon &&
                <IconItem
                    key={index}
                    icon={language.icon}
                    options={language.options}
                    iconstyle={language.iconstyle}
                    name={language.name}
                    description={language.description}
                ></IconItem>)
            }
        </div>

    </div>
    <div className='afterlogo1'></div>


</div>


//     <section class="section">
//   <div class="wall">
//     <div class="v-boxes">
//       <div class="box">
//         <span class="tooltip">CSS</span>
//         <div class="box-face">
//           <div class="box-text"><i class="fab fa-css3-alt"></i></div>
//         </div>
//         <div class="box-back">
//           <div class="box-text">
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fas fa-star-half-alt"></i>
//           </div>
//         </div>
//       </div>
//       <div class="box">
//         <span class="tooltip">JavaScript</span>
//         <div class="box-face">
//           <div class="box-text"><i class="fab fa-js-square"></i></div>
//         </div>
//         <div class="box-back">
//           <div class="box-text">
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="far fa-star"></i>
//           </div>
//         </div>        
//       </div>
//       <div class="box">
//         <span class="tooltip">BootStrap</span>
//         <div class="box-face">
//           <div class="box-text">
//           <i class="fa-brands fa-bootstrap"></i>
//           </div>
//         </div>
//         <div class="box-back">
//           <div class="box-text">
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fas fa-star-half-alt"></i>
//           </div>
//         </div>
//       </div>
//       <div class="box">
//         <span class="tooltip">React</span>
//         <div class="box-face">
//           <div class="box-text"><i class="fa-brands fa-react"></i></div>
//         </div>
//         <div class="box-back">
//           <div class="box-text">
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="far fa-star"></i>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="v-boxes second">
//       <div class="box">
//         <span class="tooltip">HTML</span>
//         <div class="box-face">
//           <div class="box-text"><i class="fa-brands fa-html5"></i></div>
//         </div>
//         <div class="box-back">
//           <div class="box-text">
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="far fa-star"></i>
//           </div>
//         </div>
//       </div>
//       <div class="box">
//         <span class="tooltip">Express JS</span>
//         <div class="box-face">
//           <div class="box-text"><img width="48" height="48" color="white"  src="https://img.icons8.com/color/48/express-js.png" alt="express-js"/></div>
//         </div>
//         <div class="box-back">
//           <div class="box-text">
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fas fa-star-half-alt"></i>
//           </div>
//         </div>
//       </div>
//       <div class="box">
//         <span class="tooltip">NodeJs</span>
//         <div class="box-face">
//           <div class="box-text"><i class="fab fa-node-js"></i></div>
//         </div>
//         <div class="box-back">
//           <div class="box-text">
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fas fa-star-half-alt"></i>
//             <i class="far fa-star"></i>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="v-boxes third">
//       <div class="box">
//         <span class="tooltip">MongoDB</span>
//         <div class="box-face">
//           <div class="box-text">
//           <i class="fa-solid fa-database"></i>
//           </div>
//         </div>
//         <div class="box-back">
//           <div class="box-text">
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fas fa-star-half-alt"></i>
//             <i class="far fa-star"></i>
//           </div>
//         </div>
//       </div>
//       <div class="box">
//         <span class="tooltip">VueNative</span>
//         <div class="box-face">
//           <div class="box-text"><img src="https://vue-native.io/images/logo.png" alt=""/></div>
//         </div>
//         <div class="box-back">
//           <div class="box-text">
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fas fa-star-half-alt"></i>
//             <i class="far fa-star"></i>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="v-boxes forth">
//       <div class="box link">
//         <div class="box-face">
//           <div class="box-text"><i class="fab fa-github-alt"></i></div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
  )
}

export default Skill

