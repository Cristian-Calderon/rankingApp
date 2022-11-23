import React from 'react'
import './companys.css'
import imgexample from '../../imgc/imgexample.png'
import { StarPuntation } from '../startpuntation/StarPuntation'

export const Companys = () => {
  return (
    <div className='companys'>
      <div className='container'>
        <div className='description-companys'>
          <img src={imgexample} alt="pag" />
          <div>
            <p>Name:</p>
            <p></p>
            <p>Type:</p>
            <p></p>
            <p>Description:</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi excepturi necessitatibus omnis quibusdam earum tempore maxime quaerat temporibus illo. Voluptatum tempore temporibus ut quisquam repudiandae, doloribus ullam voluptas provident architecto.</p>
          </div>
        </div>
        <StarPuntation></StarPuntation>
        <div className='parragraph-comment'>
          <p>Comments</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aut, dolore aperiam accusamus vitae beatae odit officiis accusantium iure quas minus, nesciunt repellat quos a exercitationem illum ipsa nobis consectetur!</p>
        </div>
        <div className='container-comment'>
          <input type="text" placeholder='Leave a comment ...'/>
        </div>
      </div>

    </div>
  )
}
