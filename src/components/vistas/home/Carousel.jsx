import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";
import '../../styles/top.css'

function ControlledCarousel() {
  // const url = axios.create({
  //   baseURL: "http://localhost:3000/posts"
  // });


  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((data) => setPosts(data))
  }, []);
  console.log(posts);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    
    <Carousel className="carousel-main"  activeIndex={index} onSelect={handleSelect} variant='dark'>
              {posts.map((post) => {
                if(post.ranking.length > 6){                
          return(
      <Carousel.Item>
          <img src={post.logo} 
            className="d-block img-carousel w-100"
            alt="Second slide"
          />

          <br/>
        <Carousel.Caption className="best-apps-2">
          <div key={post.id} className='best-apps-2'>
            <a className="link-carousel" href={`/companys/${post.id}`}>{post.nombre}</a><br />


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