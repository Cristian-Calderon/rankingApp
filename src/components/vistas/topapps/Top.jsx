import React from 'react'
import '../../styles/top.css'
import {Link} from "react-router-dom"
import imagen2 from '../../../images/twit.png';
import Empresas from "../../../empresas.json";





export const Top = () => {
  return (
    
    <div>
  

       <div><h2 className='h-1-top-apps'>Top apps</h2></div>
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
     <div className='btn-next-back'>
     <Link to="/Top2"><button className='next-top-apps'>Next</button></Link>
     </div>
    </div>
  

  );
}

export default Top
