import React from 'react'
import '../../styles/home.css'
import {Link} from "react-router-dom"
import imagen from '../../../images/logoranking-removebg-preview(1).png';
import NavBar from '../../nav/Nav'


export const Home = () => {
  return (
    <div>
      <div><NavBar/></div>
          <div className='init-div'>
          <div className='home-div bg-animado-blue'>
          <h2 className='welcome'>Welcome to RankingApp</h2>
          <div className='decorative-divi'></div>
          <div className='decorative-divi-2'></div>
          </div>
          <p className='where'>Where do you want to go first?</p>
          <div className='btns-apps'>
          <Link to="/Top"><button className="btn-apps">Top Apps</button></Link><br />
          <Link to="/Medium"><button className="btn-apps">Medium Apps</button></Link><br />
          <Link to="/Worst"><button className="btn-apps">Worst Apps</button></Link>
          </div>
          <div className='circle-1'></div>
          <div className='circle-2'></div>
          </div>
    </div>
  )
}
 export default Home