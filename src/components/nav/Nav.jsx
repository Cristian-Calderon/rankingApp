import React from "react";
import "./Nav.css";
import TextField from "@mui/material/TextField";
import logo from "../../assets/img/logo.svg";
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navBody">
      <img src={logo} alt="" />
      <div className="menuDesktop">
        <div className="linkDesktop">
<<<<<<< HEAD
          <NavLink className='linTres' to="/"><div class="linTres">Home</div></NavLink> 
          <NavLink className='linTres' to="/rank"><div class="linTres"> Top 10 </div></NavLink>
          <NavLink className='linTres'to="/createapp"><div class="linTres">Create new </div></NavLink>
          <NavLink className='linTres' to="/About"><p class="linTres">About us</p></NavLink>
        </div>
=======
      <NavLink className='linTres' to="/"><div class="linTres">Home</div></NavLink> 
      <NavLink className='linTres' to="/rank"><div class="linTres"> Top 10 </div></NavLink>
      <NavLink className='linTres'to="/createapp"><div class="linTres">Create new </div></NavLink>
      <NavLink className='linTres'to="/comparation"><div class="linTres">Company Comparator</div></NavLink>
      <NavLink className='linTres' to="/About"><p class="linTres">About us</p></NavLink>
      </div>
>>>>>>> 4cce555bd8a7862adf5d0ac24ec41c7e0f37c1fc
      </div>

      <div className="menuBurger">
<<<<<<< HEAD
        <input type="checkbox" id="navi-toggle" class="checkbox" />
        <label for="navi-toggle" class="button">
          <span class="icon">&nbsp;</span>
        </label>
        <div class="background">&nbsp;</div>
          <nav class="nav">
            <ul class="list">
              <div className="search">
                <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Search"/>
              </div>
              <li class="item">
                <NavLink to="/"><button class="link">Home</button></NavLink> 
              </li>

              <li class="item">
                <NavLink to="/rank"><button class="link"> Top 10 </button></NavLink>
              </li>

              <li class="item">
                <NavLink to="/createapp"><button class="link">Create new </button></NavLink>
              </li>

              <li class="item">
                <NavLink to="/About"><button className="link" class="link">About us</button></NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
=======
      <input type="checkbox" id="navi-toggle" class="checkbox" />
      <label for="navi-toggle" class="button">
        <span class="icon">&nbsp;</span>
      </label>
      <div class="background">&nbsp;</div>
      <nav class="nav">
        <ul class="list">
            
          
          <li class="item">
            <NavLink to="/"><button class="link">Home</button></NavLink> 
          </li>
          <li class="item">
            <NavLink to="/rank"><button class="link"> Top 10 </button></NavLink>
            
          </li>
          <li class="item">
            <NavLink to="/createapp"><button class="link">Create new </button></NavLink>
          </li>
          <li class="item">
            <NavLink to="/About"><button className="link" class="link">About us</button></NavLink>
          </li>
        </ul>
      </nav>
     </div>
    </div>
>>>>>>> 4cce555bd8a7862adf5d0ac24ec41c7e0f37c1fc
  );
};

export default NavBar;
