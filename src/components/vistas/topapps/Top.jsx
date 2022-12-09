import React from 'react';
import '../../style/top.css';
import {Link} from "react-router-dom";
// import InputSearch from './inputSearch'
import FilterTop from './Top2';
import { Button } from '../../style/buttons.js';


export const Top = () => {
  return (
    <div>
      <div><h2 className='h-1-top-apps'>Top apps</h2></div>
        <p className='tap'>Tap each one for more details</p>
        <p className='click'>Click each one for more details</p>
          <FilterTop/>
      <div className='btn-next-back'>
        <Link to="/" className="now-join"><Button className='next-top-apps'>Back</Button></Link>
      </div>
    </div>
  );
}

export default Top;
