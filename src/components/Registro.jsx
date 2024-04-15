import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUsuario } from '../Redux/actions/actions'; 
import { Form, Button } from 'react-bootstrap';

const Registro = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.usuarios.error);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nombre: '',
    apellido: '',
    fecha_nacimiento: ''
  });

  function validate(input) {
    let errors = {};
    if (!input.nombre) {
      errors.nombre = 'El nombre es requerido';
    }

    if (!input.apellido) {
      errors.apellido = 'El apellido es requerido';
    }

    if (!input.email) {
      errors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      errors.email = 'El email es inválido';
    }

    if (!input.password) {
      errors.password = 'La contraseña es requerida';
    } else if (input.password.length < 5) {
      errors.password = 'La contraseña debe tener al menos 5 caracteres';
    }

    if (!input.fecha_nacimiento) {
      errors.fecha_nacimiento = 'La fecha de nacimiento es requerida';
    }

    return errors;
  }

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors(
      validate({
        ...formData,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleRegistro = async () => {
    try {
      dispatch(createUsuario(formData));
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      alert('Hubo un error al intentar registrar el usuario. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div className='mainContainer py-4'>
      <h2 className='ms-2'>Registro</h2>
      <Form className='d-flex flex-column justify-content-center align-items-center text-center py-4 '>
        <Form.Group controlId="formNombre" className='w-75 my-3 input'>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} className={errors.nombre ? "danger" : "input"} />
          {errors.nombre && <p className="danger__error">{errors.nombre}</p>}
        </Form.Group>

        <Form.Group controlId="formApellido" className='w-75 my-3 input'>
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} className={errors.apellido ? "danger" : "input"} />
          {errors.apellido && <p className="danger__error">{errors.apellido}</p>}
        </Form.Group>

        <Form.Group controlId="formEmail" className='w-75 my-3 input'>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className={errors.email ? "danger" : "input"} />
          {errors.email && <p className="danger__error">{errors.email}</p>}
        </Form.Group>

        <Form.Group controlId="formPassword" className='w-75 my-3 input'>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} className={errors.password ? "danger" : "input"} />
          {errors.password && <p className="danger__error">{errors.password}</p>}
        </Form.Group>

        <Form.Group controlId="formFechaNacimiento" className='w-75 my-3 input'>
          <Form.Label>Fecha de Nacimiento</Form.Label>
          <Form.Control type="date" name="fecha_nacimiento" value={formData.fecha_nacimiento} onChange={handleChange} className={errors.fecha_nacimiento ? "danger" : "input"} />
          {errors.fecha_nacimiento && <p className="danger__error">{errors.fecha_nacimiento}</p>}
        </Form.Group>

        {error && <p className='danger__error'>Error: {error}</p>}
        <Button variant="primary" onClick={handleRegistro} className='my-4 btn__submit'>Registrar</Button>
      </Form>
    </div>
  );

}

export default Registro;