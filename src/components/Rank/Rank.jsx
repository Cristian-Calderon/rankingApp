import React, { useState, useEffect } from 'react';
import './rank.css';
import {Link} from "react-router-dom";
import { Button } from '../style/buttons.js';

export const Rank = () => {

// declaramos una variable para ver el estado actual y una función que lo actualiza
  const [posts, setPosts] = useState([]);

// nos permite acceder a la información que contiene el json
  useEffect(() => {
    fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((data) => setPosts(data))
  }, []);
  console.log(posts);

// recorremos el json y le pedimos que nos devuelva la información en un contenedor
  return (
    <div className="container">
      <div className="rank">
      {posts.map((variable) => {
        if(variable.ranking.length > 8){
          return (
            <div className="rank-padding" key={variable.id}>
              <div className="rank-img">
                <div className="img-log">
                  <img src={variable.logo} alt="logo" />
                </div>

                <div className="img-name">
                  <p>{variable.nombre}</p>
                </div>
              </div>

              <div className="description">
                <p><span>Coment: </span>{variable.comentario}</p>
              </div>

              <div className="stars">
                <p>{variable.ranking}</p>
              </div>
            </div>
          );
        }
      })}
      </div>
      <div className='btn-next-back'>
        <Link to="/" className="now-join"><Button className='next-top-apps'>Back</Button></Link>
      </div>
    </div>
  );
};

export default Rank;