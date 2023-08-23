import React from 'react'
import "./Styles/project.css"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import useMediaQuery from '@mui/material/useMediaQuery';
const Projects = () => {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <div className='projects' id='project'>
      {/* <div className='projectheading'>
        <span >P</span>
        <span >R</span>
        <span >O</span>
        <span >J</span>
        <span >E</span>
        <span >C</span>
        <span >T</span>
        <span >S</span>
      </div> */}
      <div className='blob6'  ></div>
      <div className='timeline'>
        <VerticalTimeline className='line'>
          <VerticalTimelineElement className='vertical-timeline-element--work'
            iconStyle={{ background: "#03bcf4", color: "#fff", boxShadow:"10px 20px 30px blue"  }}
            contentStyle={{background: "linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0))" ,height:"156px"}}
          icon={<img src="https://img.icons8.com/pulsar-color/48/meal.png" alt="" height="50" width="50" />}
          >
            <h3 className='timelineheadingodd'>Find The Meal</h3>
            <p className='timelinecontent'>Developed a Web-App. Which lets you to find the meal Using<br></br>HTML,CSS,JavaScript,API<br></br>which allows you to find the type of dish with ingredents</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element--work'
            iconStyle={{ background: "#db129f", color: "#fff", boxShadow:"-10px 20px 30px #a90578", marginTop:"5rem" }}
            contentStyle={{background: "linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0))",marginTop:"5rem"}}
            icon={<img src="https://img.icons8.com/external-bearicons-glyph-bearicons/2x/external-To-Do-List-reminder-and-to-do-bearicons-glyph-bearicons.png" alt="" height="58" width="50" />}

          >
            <h3 className='timelineheadingeven'>Todo List Website</h3>
            <p className='timelinecontent'>A todolist website that allows user to maintain<br></br>a todolist on various topics simultaneously<br></br>made with Ejs , MongoDB , Node and Express... </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element--work'
            iconStyle={{ background: "#03bcf4", color: "#fff", boxShadow:"10px 20px 30px blue" ,marginTop:"0rem"}}
            contentStyle={{background: "linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0))",marginTop:"10rem"}}
            icon={<img src="https://img.icons8.com/pulsar-color/48/mail.png" alt="" height="58" width="50" margin="20" />}

          >
            <h3 className='timelineheadingodd'>Mail App</h3>
            <p className='timelinecontent'>Mail to send and receive messages. <br></br> made with React, Express, Node, Material UI
 </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element--work'
            iconStyle={{ background: "#db129f", color: "#fff", boxShadow:"-10px 20px 30px #a90578", marginTop:"5rem" }}
            contentStyle={{background: "linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0))",marginTop:"5rem"}}
            icon={<img src="https://img.icons8.com/carbon-copy/100/verified-account.png" alt="" height="58" width="50" />}

          >
            <h3 className='timelineheadingeven'>OAuth</h3>
            <p className='timelinecontent'>An authentication Application using JWT<br></br>made with React, Express, Node, HTML, CSS
</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Projects
