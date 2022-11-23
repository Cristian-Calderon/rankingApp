import React from "react";
import "../nav/Nav.css";
import logo from "../../assets/img/logo.svg"
const NavBar = () => {
  return (
     <div className="navBody"><img src={logo} alt="" />
      <input type="checkbox" id="navi-toggle" class="checkbox" />
      <label for="navi-toggle" class="button">
        <span class="icon">&nbsp;</span>
      </label>
      <div class="background">&nbsp;</div>

      <nav class="nav">
        <ul class="list">
          <li class="item">
            {" "}
            <a class="link"> Link 1 </a>{" "}
          </li>
          <li class="item">
            {" "}
            <a class="link"> Link 2 </a>{" "}
          </li>
          <li class="item">
            {" "}
            <a class="link"> Link 4 </a>{" "}
          </li>
          <li class="item">
            {" "}
            <a class="link"> Link 5 </a>{" "}
          </li>
          <li class="item">
            {" "}
            <a class="link"> Link 6 </a>{" "}
          </li>
        </ul>
      </nav>
     </div> 
  );
};

export default NavBar;
