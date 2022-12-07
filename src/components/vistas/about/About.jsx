import React from 'react'
import '../../styles/about.css'


export const About = () => {
  return (
    <div>
      <div className='about-container'>
      <div className='about'>
       <h2>About Us</h2>
       <p>We're students from Factoria F5's Fullstack Bootcamp</p>
       <p>To develope this project we use <b>Scrum</b> and <b>Agile</b> methodologies. We organize the tasks and roles using <b>Trello.</b></p>
       <p>We started this project from the design using <b>Figma,</b> to the code using VScode.</p>
       <h2>Developer's Contact</h2>
       <a href="https://github.com/Cristian-Calderon" target="_blank"><button className='btn-dev-cont'>Cristian Calderón</button></a><br />
       <a href="https://github.com/Francisco-Aguirr" target="_blank"><button className='btn-dev-cont'>Francisco Aguirre</button></a><br />
       <a href="https://github.com/IngridB-afk" target="_blank"><button className='btn-dev-cont'>Ingrid Barrachina</button></a><br />
       <a href="https://github.com/AlejoR27" target="_blank"><button className='btn-dev-cont'>Alejandro Buritíca</button></a><br />
       <a href="https://github.com/ecp12" target="_blank"><button className='btn-dev-cont'>Erick Crespin</button></a>
       <hr/>
       <p class="copyright-text">Copyright &copy; Barcelona 2022.
            </p>
      </div>
      </div>
    </div>
  )
}
export default About
