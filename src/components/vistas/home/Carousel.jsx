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
    <Carousel activeIndex={index} onSelect={handleSelect}>
              {posts.map((post) => {
          return(
      <Carousel.Item>
          <img src={post.logo} 
            className="d-block w-100 img-carousel"
            alt="Second slide"
          />
        <Carousel.Caption>
          <div key={post.id} className='best-apps'>
            <a href={`/companys/${post.id}`}>{post.nombre}</a><br />
            <span>{post.ranking}</span>
          </div>
        </Carousel.Caption> 
      </Carousel.Item>
                )
              })}
              
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default ControlledCarousel;