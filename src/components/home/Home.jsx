import React from 'react';
import './home.css';
import {Link} from "react-router-dom";
import Carousel from './Carousel';
import { Button } from '../style/buttons.js';

export const Home = () => {
  return (
    <div>
      <div className='init-div'>
        <div className='home-div bg-animado-blue'>
          <h2 className='welcome'>Welcome to RankingApp</h2>
            <div className='decorative-divi'></div>
            <div className='decorative-divi-2'></div>
        </div>
          <p className='where'>Where do you want to go first?</p>

        <Carousel/>

        <div className='btns-apps'>
          <Link to="/Top"><Button className="btn-apps">Top Apps</Button></Link><br />
          <Link to="/Medium"><Button className="btn-apps">Medium Apps</Button></Link><br />
          <Link to="/Worst"><Button className="btn-apps">Worst Apps</Button></Link><br />
        </div>
          <div className='circle-1'></div>
          <div className='circle-2'></div>
      </div>
    </div>
  )
}

export default Home;