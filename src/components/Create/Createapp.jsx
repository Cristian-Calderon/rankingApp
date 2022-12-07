import React, { useState }  from 'react';
import axios from 'axios';
import '../../index.css';
import './createapp.css';

// creamos una variable const para llamar los atributos al form
const Createapp = () => {
  const [state, setState] = useState({
    name: '',
    description: '',
    type: '',
    upload: '',
  });
  
// esta función es para establecer un nuevo estado para el input
  const handleChange = ({target}) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

// llamamos a la API
  const url = 'https://retoolapi.dev/7GkXxc/data'

// para recibir los datos del form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(url,state);
    console.log(response);
  }

  return (
    <>
      <div>
      <h3>Create your app</h3>
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
