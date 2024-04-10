import React , { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUsuario } from '../Redux/actions/actions';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const error = useSelector(state => state.usuario.error);
  
    const handleLogin = async () => {
      dispatch(loginUsuario(email, password));
    };
  
    return (
      <div>
        <h2>Login</h2>
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
  
          <Form.Group controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
  
          {error && <p>Error: {error}</p>}
          <Button variant="primary" onClick={handleLogin}>Iniciar sesión</Button>
        </Form>
      </div>
    );
}

export default Login
