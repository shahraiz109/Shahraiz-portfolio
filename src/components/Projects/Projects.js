import {FaReact} from "react-icons/fa"
import {SiCss3,SiHtml5} from "react-icons/si"
import {TbApi} from "react-icons/tb"
import {IoLogoJavascript} from "react-icons/io"

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


import '../ProjectContainer/ProjectContainer.css'
import './Projects.css'
import project1 from "../../assets/image/project1.png"
import project2 from "../../assets/image/project2.jpg"
import project3 from "../../assets/image/project3.jpg"
import admin1 from "../../assets/image/admin1.jpg"
import admin2 from "../../assets/image/admin2.jpg"
import dev1 from "../../assets/image/dev1.jpg"
import dev2 from "../../assets/image/dev2.jpg"


function Projects()
{
  


  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title about_project' >Projects</h2>

{/* <-------------------------------------------------1 start-------------------------------------------> */}

    <div className='project' id='project'>

      <div>
         <Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={project1} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={project2} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={project3} alt="Image 2"/>
           </SplideSlide>

        </Splide>
      </div>
   
     <div>

        <h3 className="about_project">FITCLUB</h3>

        <p className='project__description'>
          In this project you can grt information about fittness.I complete this project in 6 days.
        </p>

   
        <ul className='project__stack' >
       
          <li className='project__stack-item' id='stacks'>
            <SiHtml5 size={40} />
             <IoLogoJavascript size={40} />
            <SiCss3 size={40}/>
            <TbApi size={50}/>
          </li>
      
        </ul>


   
   


      <div id='b'>
            <a href="https://serene-longma-ffd8c2.netlify.app"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


            <a href="https://github.com/shahraiz109/jim-project.git" target="_blank" >
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>

  
  </div> 


  </div>

{/* <-------------------------------------------------1 end-------------------------------------------> */}




{/* <-------------------------------------------------2 start-------------------------------------------> */}

<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={admin1} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={admin2} alt="Image 2"/>
           </SplideSlide>

           {/* <SplideSlide>
           <img src="https://media.discordapp.net/attachments/702481980025077853/1034502334878851162/unknown.png?width=1375&height=676" alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://media.discordapp.net/attachments/702481980025077853/1034502449890856960/unknown.png?width=1375&height=676" alt="Image 2"/>
           </SplideSlide> */}


        </Splide>
</div>

<div>

  <h3 className="about_project">Admin Project</h3>

  <p className='project__description'>
   In this project you can see about the earning. Earning ratio is shown in graph.Overview is also show at bottom.I complete this project in 3 days  
  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>

    </li>

  </ul>


   <div id='b'>
            <a href="https://admin-project-first.netlify.app"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


            <a href="https://github.com/shahraiz109/Admin-project.git"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>


</div> 


</div>

{/* <-------------------------------------------------2 end-------------------------------------------> */}



{/* <-------------------------------------------------3 start-------------------------------------------> */}

<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={dev1} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={dev2} alt="Image 2"/>
           </SplideSlide>

           {/* <SplideSlide>
           <img src="https://media.discordapp.net/attachments/702481980025077853/1034509195871002674/unknown.png?width=1375&height=676" alt="Image 2"/>
           </SplideSlide> */}

        </Splide>
</div>

<div>

  <h3 className="about_project">Web Development</h3>

  <p className='project__description'>
   This is project about the intro of web development.I complete this project in 2 days 
  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>

    </li>

  </ul>


   <div id='b'>
            <a href="https://visionary-squirrel-aa13b1.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


            <a href="https://github.com/shahraiz109/react-first-project.git"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>


</div> 


</div>

{/* <-------------------------------------------------3 end-------------------------------------------> */}



    </section>
  )
}

export default Projects
