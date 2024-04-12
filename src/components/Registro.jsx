import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUsuario } from '../Redux/actions/actions'; 
import { Form, Button } from 'react-bootstrap';

const Registro = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.usuario.error);

    const [formData, setFormData] = useState({
      email: '',
      password: '',
      nombre: '',
      apellido: ''
    });

    const handleChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegistro = async () => {
      dispatch(createUsuario(formData)); 
    };
  
    return (
      <div>
        <h2>Registro</h2>
        <Form>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />
          </Form.Group>
  
          <Form.Group controlId="formApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} />
          </Form.Group>
  
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          </Form.Group>
  
          <Form.Group controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} />
          </Form.Group>
  
          {error && <p>Error: {error}</p>}
          <Button variant="primary" onClick={handleRegistro}>Registrar</Button>
        </Form>
      </div>
    );
}

export default Registro;