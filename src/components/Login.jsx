import React , { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUsuario } from '../Redux/actions/actions';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [input, setInput] = useState({
      email: '',
      password: '',
    });
    const [errors, setErrors] = useState({});
    const error = useSelector(state => state.usuarios.error);


    function validate(input) {
      let errors = {};
      if(!input.email) {
        errors.email = 'El email es requerido';
      } else if (!/\S+@\S+\.\S+/.test(input.email)) {
        errors.email = 'El email es inválido';
      } else if (!input.password) {
        errors.password = 'La contraseña es requerida';
      } else if (input.password.length < 5) {
        errors.password = 'La contraseña debe tener al menos 5 caracteres';
      }

      return errors;
    }

    function handleChange(e) {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
      setErrors(
        validate({
          ...input,
          [e.target.name]: e.target.value,
        })
      );
    }
  
    const handleLogin = async () => {
      try {
        const response = await dispatch(loginUsuario(input.email, input.password));
        if (response.token) {
            sessionStorage.setItem('token', response.token);
            navigate('/')
        } else {
            throw new Error('Credenciales inválidas');
        }
    } catch (error) {
        alert("Ocurrió un error al iniciar sesión: " + error.message);
    }
    };
    return (
      <div className='mainContainer py-4'>
        <h2 className='ms-2'>Login</h2>
        <Form className='d-flex flex-column justify-content-center align-items-center text-center py-4 '>
          <Form.Group controlId="formEmail" className='w-75 my-3 input'>
            <Form.Label>Email</Form.Label>
            <Form.Control required className={errors.email ? "danger" : "input"} type="text" placeholder="Email" value={input.email} name='email' onChange={(e) => handleChange(e)} />
            {errors.email && <p className="danger__error">{errors.email}</p>}
          </Form.Group>
  
          <Form.Group controlId="formPassword" className='w-75 my-3 input'>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control required name='password' type="password" className={errors.email ? "danger" : "input"} placeholder="Contraseña" value={input.password} onChange={(e) => handleChange(e)} />
            {errors.password && <p className="danger__error">{errors.password}</p>}
          </Form.Group>
  
          {error && <p className='danger__error'>Error: {error}</p>}
          <Button variant="primary" onClick={handleLogin}>Iniciar sesión</Button>
        </Form>
      </div>
    );
}

export default Login
