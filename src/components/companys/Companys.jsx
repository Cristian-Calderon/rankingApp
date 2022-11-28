import React from 'react'
import '../style/companys.css'
import imgexample from '../../assets/img/imgexample.png'
import { StarPuntation } from '../startpuntation/StarPuntation'

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
        <StarPuntation></StarPuntation>
        </div>
        <div className='parragraph-comment'>
          <p>Comments</p>
          <p className='pding'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aut, dolore aperiam accusamus vitae beatae odit officiis accusantium iure quas minus, nesciunt repellat quos a exercitationem illum ipsa nobis consectetur!</p>
        </div>
        <div className='container-comment'>
          <input className='comment-text' type="text" placeholder='Leave a comment ...'/>
        </div>
      </div>
    </div>
  )
}
