import "./Home.css"
import Typewriter from "typewriter-effect";
import { Email, Phone } from '@material-ui/icons'
import GitHubIcon from '@material-ui/icons/GitHub'
import profile from "../../../src/assets/image/resume_shahraiz_ali.pdf"
// import LinkedInIcon from '@material-ui/icons/LinkedIn'

function Home()
{

    return(

        <section className="section home center">
         <h1>
          Hi, I am <span className='about__name'>SHAHRAIZ ALI</span>
        </h1>
    
      <h2 className="typer"> 
        <Typewriter options={{strings:["A Mern Stack  Developer"],
        autoStart:true,loop:true,deleteSpeed:50}}/>
      </h2> 


        <p id="des">Adaptable and responsible web developer capable of writing production ready code using HTML, CSS, JavaScript,
         React.Js on the front-end and NodeJs and MongoDB on the back-end to build single-page applications.</p>
  
 
       <section id="social">
          <a href="https://github.com/shahraiz109/Ali-Bhai.git" target="_blank" aria-label='github' className='link link--icon'> <GitHubIcon /> </a>
         
         {/* <a href="https://www.linkedin.com/in/rishunayak/" target="_blank" aria-label='linkedin' className='link link--icon'> <LinkedInIcon /> </a> */}
         
         <a href='mailto:shahraizali232@gmail.com' aria-label="email" className='link link--icon'> <Email/> </a>

         <a href='tel:+923176284209' aria-label="phone" className='link link--icon'> <Phone/> </a>
    
      </section>
     
   
        <a href={`${profile}`} target="_blank" id="resumeButton">
            <span type='button' className='btn btn--outline'>  Resume </span>
          </a>
   
    </section>)
}

export default Home