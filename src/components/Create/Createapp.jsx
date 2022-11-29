import React, { useState }  from 'react';
import '../style/index.css'
import './createapp.css';

import Titleapp from './Titleapp';

//npm install styled-components


const Createapp = () => {
  const [state, setState] = useState({
    name: '',
    description: '',
    type: '',
    upload: '',
  });
  

  const handleChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    // Send State
    event.preventDefault();
    alert(state);
  };

  return (
    <>
      <div>
        <Titleapp />
      </div>
        <div className='app'>
          <form onSubmit={handleSubmit}>
            <div className='form-input' id='form1'>
              <label>Company name</label>
              <input type="text" name='name' value={state.name} onChange={handleChange} />
            </div>

            <div className='form-input' id='form'>
              <label>Description</label>
              <input type="text" name='description' value={state.description} onChange={handleChange} />
            </div>

            <div className='form-input' id='form'>
              <label>App Type</label>
              <input type="text" name='type' value={state.type} onChange={handleChange} />
            </div>

            <div className='form-input' id='form'>
              <label>Upload Image</label>
              <input type="" name='upload' value={state.upload} onChange={handleChange} />
            </div>

            <div className='form-input'>
              <label></label>
              <button type='submit' className='but'>Create</button>
            </div>
          </form>
        </div>
      </>
  );
};

export default Createapp;
