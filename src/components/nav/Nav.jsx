import React from "react";
import "../nav/Nav.css";
import TextField from "@mui/material/TextField";
import logo from "../../assets/img/logo.svg";
import {Link} from "react-router-dom"

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
          <Link to="/"><button class="link">Home</button></Link>
          </li>
          <li class="item">
            <button class="link"> Top 10 </button>
          </li>
          <li class="item">
            <button class="link">Create new </button>
          </li>
          <li class="item">
          <Link to="/About" className="link-about"><p class="linkDos">About us</p></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
