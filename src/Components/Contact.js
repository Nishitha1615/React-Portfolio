import React,{useRef} from 'react'
import "./Styles/contact.css"
// import resume from "../Assest/Nishitha-Resume.pdf";
import email from "../Assest/email.png"
// import phone from "../pictures/phone-call.png"
// import location from "../pictures/location.png"
import emailjs from "emailjs-com"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { dark } from '@mui/material/styles/createPalette'
import useMediaQuery from '@mui/material/useMediaQuery';


function Contatct() {
    const matches = useMediaQuery('(min-width:600px)');
    const notify = () => toast('✅Message Sent', {
        position: "bottom-left",
        autoClose:  5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: dark,
        }); 

     const form =useRef();
    function sendEmail(e){
        
       e.preventDefault();
       emailjs.sendForm("service_7tykcpy","template_2kivuss",e.target,"RW7gYanElV1auoOS7").then(res=>{
        console.log(res);
       }).catch(err=>{
        console.log(err);
       });
       e.target.reset();
    }


    return (
        <div className='contact' id='Contact'>{` ${matches}`}
            <div className='contact-box'>
            <div className='glass'>
                <h2 className='contactheading'>Contact</h2>
                
                <form className='row' onSubmit={sendEmail} ref={form}>
                    <label className='labels'>Name: </label>
                    <input type="text" name='name' className="form-control"   /><p></p>
                    <label className='labels'>Email: </label>
                    <input type="email" name="user_email" className="form-control"   /><p></p>
                    <label className='labels message'></label><p></p>
                    <textarea name='message' rows="4" className='form-control'  /><p></p>
                    <input type="submit" onClick={notify} value="send" className="form-control btn" />

                </form>
            </div>
            <div className='blob5'></div>
            {/* <div><h2 className='meet'>There's my College</h2></div> */}
            {/* <iframe class="gmap_iframe" className='map' src="https://maps.google.com/maps?width=452&amp;height=400&amp;hl=en&amp;q=IIITM&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> */}

            <iframe  id="gmap" className='map' style={{height:"533px",width:"64.6%",marginBottom:"23.7rem",marginLeft:"29.9rem"}} src="https://maps.google.com/maps?q=Jaymuni layout,Venkatala,Yelahanka&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            <div className='contact-details'>
                <img  className='contact-img' alt='' />+91-8660805742 
                <img src={email} className='contact-img' alt='' />nishitham0@gmail.com 
                <img  className='contact-img' alt='' />Bangalore, Karnataka<p>
                
                <a href='https://www.linkedin.com/in/nishitha-mohan' target="blank"><LinkedInIcon className="contact-img" /></a>
                <a href='https://github.com/Nishitha1615' target="blank"><GitHubIcon className="contact-img" /></a>
                
                
                </p>

            </div>
            </div>
            <ToastContainer />
            </div>
    )
}

export default Contatct