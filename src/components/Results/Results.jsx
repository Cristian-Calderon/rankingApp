import React from 'react';
import '../style/Results.css';
import Logo from '../assets/images/amazon.png';



const Results = () => {
  return (
    <div className='results'>
      <div class = "container">
      <div className ="title">
        <div className = "logo">
        <img src = {Logo} alt="" />
       </div>
       <div className = "name">
          <h2>Amazon</h2>
       </div>
      </div>
      <div className ="description">
        <p>Amazon.com Inc (Amazon) is an online retailer and web service provider. The company provides products such as apparel, auto and industrial items, beauty and health products, electronics, grocery, books, games, jewellery, kids and baby products, movies, music, sports goods, toys, tools and other related products.</p>
      </div>
      <div className = "raiting">
           <h4>Stars</h4>
      </div> 
    </div>
    </div>
    
  )
}

export default Results;

