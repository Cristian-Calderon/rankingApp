import React from 'react'
import '../../styles/top.css'
import {Link} from "react-router-dom"
// import InputSearch from './inputSearch'
import FilterTop from './Top2'




export const Top = () => {
  return (
    
    <div>
  

       <div><h2 className='h-1-top-apps'>Top apps</h2></div>
       <p className='tap'>Tap each one for more details</p>
       <p className='click'>Click each one for more details</p>
       <FilterTop/>
<<<<<<< HEAD
=======
       <div className='btn-next-back'>
       <Link to="/Top2" className="now-join"><button className='next-top-apps'>Next</button></Link>
       </div>
>>>>>>> ae974ab190b81d93afd3a8b6107d5bbcfb1b30b5
    </div>
  

  );
}

export default Top
