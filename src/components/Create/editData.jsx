import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import '../style/top.css';
import './addapp.css';
import '../../index.css';
import { Button, ButAdd, ButEdit, ButDelete, ButCancel } from '../style/buttons.js';

// llamamos a la API
const url="http://localhost:3000/posts/";


class crudEmpresas extends Component {
state={
  data:[],
  Insertar: false,
  modalEliminar: false,
  form:{
    id: '',
    nombre: '',
    logo: '',
    ranking: '',
    comentario: ''
  }
}

// utilizamos CRUD para poder hacer la función de crear, editar o eliminar
empresasGet=()=>{
axios.get(url).then(response=>{
  this.setState({data: response.data});
}).catch(error=>{
  console.log(error.message);
})
}

empresasPost=async()=>{
  delete this.state.form.id;
  await axios.post(url,this.state.form).then(response=>{
    this.Insertar();
    this.empresasGet();
  }).catch(error=>{
    console.log(error.message);
  })
}

empresasPut=()=>{
  axios.put(url+this.state.form.id, this.state.form).then(response=>{
    this.Insertar();
    this.empresasGet();
  })
}

empresasDelete=()=>{
  axios.delete(url+this.state.form.id).then(response=>{
    this.setState({modalEliminar: false});
    this.empresasGet();
  })
}

// con esta función insertamos el CRUD
Insertar=()=>{
  this.setState({Insertar: !this.state.Insertar});
}

// creamos una variable const para llamar los atributos al form
seleccionarEmpresa=(empresa)=>{
  this.setState({
    form: {
      id: empresa.id,
      nombre: empresa.nombre,
      logo: empresa.logo,
      ranking: empresa.ranking,
      comentario: empresa.comentario
    }
  })
}

// esta función es para establecer un nuevo estado para el input
handleChange=async e=>{
e.persist();
await this.setState({
  form:{
    ...this.state.form,
    [e.target.name]: e.target.value
  }
});
console.log(this.state.form);
}

  componentDidMount() {
    this.empresasGet();
  }
  
// creamos una tabla con las apps disponibles en el json
  render(){
    const {form}=this.state;
  return (
    <div className="App">
      <Button className="btn btn" onClick={()=>{this.setState({form: null, comentario: 'insertar'}); this.Insertar()}}>Add App</Button>
        <table className="table table-2">
          <thead>
            <tr className="Apps">
              <th className='id-empresa'>ID</th>
              <th className='nombre-empresa'>Name</th>
              <th className='logo-empresa'>Logo</th>
              <th className='estrellas-empresa'>Ranking</th>
              <th className='comentario-empresa'>Comment</th>
              <th className='buttons-modificar'>Edit/Delete</th>
            </tr>
          </thead>
          <tbody className='tabla-crear-nueva-app'>
            {this.state.data.map(empresa=>{
            return(
              <tr className='tr-contenido'>
                <td className='id-empresa'>{empresa.id}</td>
                <td className='nombre-empresa'>{empresa.nombre}</td>
                <td className='logo-empresa'><img className='img-create' src={empresa.logo}  /></td>
                <td className='estrellas-empresa'>{empresa.ranking}</td>
                <td className='comentario-empresa'>{empresa.comentario}</td>
                <td>
                <ButEdit className="btn btn" onClick={()=>{this.seleccionarEmpresa(empresa); this.Insertar()}}><FontAwesomeIcon icon={faEdit}/></ButEdit>
                {"   "}
                <ButDelete className="btn btn" id="btndel" onClick={()=>{this.seleccionarEmpresa(empresa); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></ButDelete>
                </td>
              </tr>
            )
            })}
          </tbody>
        </table>

{/* con bootstrap reformulamos un form/modal para crear una nueva app */}
    <Modal isOpen={this.state.Insertar}>
      <ModalHeader className="form" style={{display: 'block'}}>
        <div className='formhead'>
          <h3 className='title'>Create your app</h3>
          <ButEdit className="btn btn" id="x" onClick={()=>this.Insertar()}>x</ButEdit>
        </div>
      </ModalHeader>

      <ModalBody className="form">
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
            <br />
          <label htmlFor="nombre">Name</label>
          <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form?form.nombre: ''}/>
            <br />
          <label htmlFor="nombre">Logo</label>
          <input className="form-control" type="text" name="logo" id="logo" onChange={this.handleChange} value={form?form.logo: ''}/>
            <br />
          <label htmlFor="ranking">Ranking</label>
          <input className="form-control" type="text" name="ranking" id="ranking" onChange={this.handleChange} value={form?form.ranking:''}/>
            <br />
          <label htmlFor="ranking">Comment</label>
          <input className="form-control" type="text" name="comentario" id="comentario" onChange={this.handleChange} value={form?form.comentario:''}/>
        </div>
      </ModalBody>

      <ModalFooter className="form">
        {this.state.comentario =='insertar'?
          <ButAdd className="btn btn" onClick={()=>this.empresasPost()}>
          Add
          </ButAdd>: 
          <ButAdd className="btn btn" onClick={()=>this.empresasPut()}>
          Actualizar
          </ButAdd>
        }
          <ButCancel className="btn btn" onClick={()=>this.Insertar()}>Cancel</ButCancel>
      </ModalFooter>
    </Modal>

    <Modal isOpen={this.state.modalEliminar}>
      <ModalBody>
        Are you sure you want to delete this company <strong>{form && form.nombre}</strong>? 
      </ModalBody>

      <ModalFooter>
        <button className="btn btn" onClick={()=>this.empresasDelete()}>Yes</button>
        <button className="btn btn" onClick={()=>this.setState({modalEliminar: false})}>No</button>
      </ModalFooter>
    </Modal>
    </div>
  );
}
}
export default crudEmpresas;
