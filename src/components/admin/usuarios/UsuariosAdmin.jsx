import React,{ useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsuarios, deleteUsuario, createUsuario, updateUsuario } from './redux/actions/actions';
import NavAdmin from '../NavAdmin'
import '../admin.css'

const UsuariosAdmin = () => {
  const usuarios = useSelector(state => state.usuarios.usuarios);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsuarios());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    fecha_nacimiento: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createUsuario(formData));
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      password: '',
      fecha_nacimiento: ''
    });
  };

  const handleDelete = id => {
    dispatch(deleteUsuario(id));
  };

  const handleUpdate = (id, usuario) => {
    dispatch(updateUsuario(id, usuario));
  };

  return (
    <div>
      <NavAdmin/>
      <h1>Panel de Administrador de Usuarios</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" />
        <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} placeholder="Apellido" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Contraseña" />
        <input type="date" name="fecha_nacimiento" value={formData.fecha_nacimiento} onChange={handleChange} placeholder="Fecha de nacimiento" />
        <button type="submit">Agregar Usuario</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Fecha de Nacimiento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario._id}>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellido}</td>
              <td>{usuario.email}</td>
              <td>{usuario.fecha_nacimiento}</td>
              <td>
                <button onClick={() => handleUpdate(usuario._id, { nombre: 'Nuevo Nombre' })}>Actualizar</button>
                <button onClick={() => handleDelete(usuario._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsuariosAdmin