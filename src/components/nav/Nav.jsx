import React from "react";
import "./Nav.css";
import TextField from "@mui/material/TextField";
import logo from "../../assets/img/logo.svg";
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navBody">
      <img src={logo} alt="" />
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
            <NavLink to="/companys"><button class="link"> Top 10 </button></NavLink>
            
          </li>
          <li class="item">
            <NavLink to="/"><button class="link">Create new </button></NavLink>
          </li>
          <li class="item">
            <NavLink to="/"><p class="linkDos">About us</p></NavLink>
            <p class="linkDos">Contact</p>
            <p class="linkDos">Legal</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
