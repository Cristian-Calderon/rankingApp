import React from 'react'
import '../../styles/home.css'
import {Link} from "react-router-dom"
import imagen from '../../../images/logoranking-removebg-preview(1).png';
export const Home = () => {
  return (
    <div className='init-div'>
          <div className="head-div"></div>
          <div className='decorative-div'>
            <img src={imagen} className="logo-home" />
          </div>
          <h3 className='welcome'>Welcome to RankingApp</h3>
          <p className='where'>Where do you want to go first?</p>
          <div>
          <Link to="/Top"><button className="btn-apps">Top Apps</button></Link><br />
          <Link to="/Medium"><button className="btn-apps">Medium Apps</button></Link><br />
          <Link to="/Worst"><button className="btn-apps">Worst Apps</button></Link>
          </div>
          <div className='circle-1'></div>
          <div className='circle-2'></div>
    </div>
  )
}
 export default Home