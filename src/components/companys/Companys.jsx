import React from 'react'
import '../style/companys.css'
import imgexample from '../../assets/img/imgexample.png'
import { StarPuntation } from '../startpuntation/StarPuntation'
import Stars from "../ratingStars/Stars"; 
import CommentBox from "../ratingStars/CommentBox"; 

export const Companys = () => {
  return (
    <div className='companys'>
      <div className='container'>
        <div className='description-companys'>
          <img src={imgexample} alt="pag" />
          <div className='pding'>
            <p>Name:</p>
            <p></p>
            <p>Type:</p>
            <p></p>
            <p>Description:</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi excepturi necessitatibus omnis quibusdam earum tempore maxime quaerat temporibus illo. Voluptatum tempore temporibus ut quisquam repudiandae, doloribus ullam voluptas provident architecto.</p>
          </div>
        </div>
        <div className='star-cont'>
        <Stars/> 
        </div>
        <div className='parragraph-comment'>
        <CommentBox/>
        </div>
      </div>
    </div>
  )
}
