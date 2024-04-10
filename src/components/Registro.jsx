import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registroUsuario } from '../Redux/actions/actions';
import { Form, Button } from 'react-bootstrap';

const Registro = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const error = useSelector(state => state.usuario.error);
  
    const handleRegistro = async () => {
      dispatch(registroUsuario({ email, password, nombre, apellido }));
    };
  
    return (
      <div>
        <h2>Registro</h2>
        <Form>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </Form.Group>
  
          <Form.Group controlId="formApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
          </Form.Group>
  
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
  
          <Form.Group controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
  
          {error && <p>Error: {error}</p>}
          <Button variant="primary" onClick={handleRegistro}>Registrar</Button>
        </Form>
      </div>
    );
}

export default Registro
