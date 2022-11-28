import React from "react";
import "../nav/Nav.css";
import TextField from "@mui/material/TextField";
import logo from "../../assets/img/logo.svg";
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
                label="Search"

              />
            </div>
          
          <li class="item">
            <button class="link">Home</button>
          </li>
          <li class="item">
            <button class="link"> Top 10 </button>
          </li>
          <li class="item">
            <button class="link">Create new </button>
          </li>
          <li class="item">
            <p class="linkDos">About us</p>
            <p class="linkDos">Contact</p>
            <p class="linkDos">Legal</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
