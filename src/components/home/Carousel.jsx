import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../style/top.css'

function ControlledCarousel() {

// declaramos una variable para ver el estado actual y una función que lo actualiza
  const [posts, setPosts] = useState([]);

// nos permite acceder a la información que contiene el json
  useEffect(() => {
    fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((data) => setPosts(data))
  }, []);
  console.log(posts);

// con esta constante activamos el carousel de bootstrap-react
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

// recorremos el json y le pedimos que nos devuelva la información en el carousel
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant='dark'>
        {posts.map((post) => {
          if(post.ranking.length > 6){                
            return(
              <Carousel.Item>
                <img src={post.logo} 
                className="d-block img-carousel"
                alt="Second slide"
                />
                <Carousel.Caption>
                  <div key={post.id} className=''>
                    <a href={`/companys/${post.id}`}>{post.nombre}</a><br />
                    <span>{post.ranking}</span>
                  </div>
                </Carousel.Caption> 
              </Carousel.Item>
            )
          }
        })}
    </Carousel>
  );
}

export default ControlledCarousel;