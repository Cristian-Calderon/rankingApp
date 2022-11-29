import React from 'react'
import '../../styles/top.css'
import {Link} from "react-router-dom"
import imagen4 from '../../../images/Facebook_icon.svg.png';





export const Worst = () => {
  return (
    <div>
       <div>
         <h2 className='h-1-top-apps'>Worst Apps</h2>
       </div>
       <p className='tap'>Tap each one for more details</p>
       <p className='click'>Click each one for more details</p>
       <div className='top-container'>
           <div className='best-apps'>
           <img src={imagen4} className="logo-twit" />
           </div>
           <div className='best-apps'></div>
           <div className='best-apps'></div>
           <div className='best-apps'></div>
           <div className='best-apps'></div>
           <div className='best-apps'></div>
           <div className='best-apps'></div>
           <div className='best-apps'></div>
     </div>
     <div className='btn-next-back'>
     <Link to="/Worst2" className="now-join"><button className='next-top-apps'>Next</button></Link>
     </div>
    </div>
  )
}

export default Worst
