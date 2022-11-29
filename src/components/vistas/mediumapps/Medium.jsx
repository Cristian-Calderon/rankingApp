import React from 'react'
import '../../styles/top.css'
import {Link} from "react-router-dom"
import imagen3 from '../../../images/Telegram_logo.svg.png';





export const Medium = () => {
  return (
    <div>
      <div><h2 className='h-1-top-apps'>Medium Apps</h2>
      </div>
      <p className='tap'>Tap each one for more details</p>
       <p className='click'>Click each one for more details</p>
       <div className='top-container'>
           <div className='best-apps'>
           <img src={imagen3} className="logo-twit" />
           </div>
           <div className='best-apps'></div>
           <div className='best-apps'></div>
           <div className='best-apps'></div>
           <div className='best-apps'></div>
           <div className='best-apps'></div>
           <div className='best-apps'></div>
           <div className='best-apps'></div>
     </div>
     <div>
     <Link to="/Medium2" className="now-join"><button className='next-top-apps'>Next</button></Link>
     </div>
    </div>
  )
}

export default Medium
