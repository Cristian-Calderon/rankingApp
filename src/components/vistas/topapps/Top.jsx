import React from 'react'
import '../../styles/top.css'
import {Link} from "react-router-dom"
import imagen2 from '../../../images/twit.png';
import InputSearch from './inputSearch'




export const Top = () => {
  return (
    
    <div>
       <div><h2 className='h-1-top-apps'>Top apps</h2></div>
       <p className='tap'>Tap each one for more details</p>
       <p className='click'>Click each one for more details</p>
       <InputSearch/>
      
     <div>
     <Link to="/Top2" className="now-join"><button className='next-top-apps'>Next</button></Link>
     </div>
    </div>
  )
}

export default Top
