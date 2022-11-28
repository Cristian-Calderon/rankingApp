import React from 'react'
import '../../styles/top.css'
import {Link} from "react-router-dom"
import NavBar from '../../nav/Nav'





export const Worst2 = () => {
  return (
    <div>
      <div><NavBar/></div>
       <div>
         <h2 className='h-1-top-apps'>Worst Apps</h2>
       </div>
       <p className='tap'>Tap each one for more details</p>
       <p className='click'>Click each one for more details</p>
       <div className='top-container'>
           <div className='best-apps'></div>
           <div className='best-apps'></div>
           <div className='best-apps'></div>
           <div className='best-apps'></div>
           <div className='best-apps'></div>
           <div className='best-apps'></div>
           <div className='best-apps'></div>
           <div className='best-apps'></div>
     </div>
     <div>
     <Link to="/Worst"><button className='next-top-apps'>Back</button></Link>
     </div>
    </div>
  )
}

export default Worst2