import React from "react";
import Empresas from "../../empresas.json";
import '../styles/rank.css'

export const Rank = () => {



  return (
    <div className="container">
      <div className="rank">
      {
      Empresas.map((variable) => {
        return (
          <div className="rank-padding" key={variable.id}>
            <div className="rank-img">
              <div className="img-log">
              <img src={variable.Column3} alt="logo" />
              </div>
              <div className="img-name">
              <p>{variable.Column1}</p>
              </div>
            </div>
            <div className="description">
              <p><span>Description: </span>{variable.Column4}</p>
            </div>
            <div className="stars">
              <p>{variable.Column2}</p>
              <p>{variable.Column2.length} Stars</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
    
  );
};