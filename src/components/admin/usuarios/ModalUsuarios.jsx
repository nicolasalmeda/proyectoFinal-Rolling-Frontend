import React, { useState, useEffect } from 'react';
import { Modal, Button,notification } from 'antd';
import {Form} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { getUsuarios, createUsuario, updateUsuario } from '../../../Redux/actions/actions';
import { SmileOutlined, MehOutlined } from '@ant-design/icons';




const ModalUsuarios = ({ open, onCancel, isEdit, initialValues}) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();


  const [title, setTitle] = useState('');
  const [submitText, setSubmitText] = useState('');

  const cargarDatosUsuario =  () => {
    if (initialValues){
    setValue('email', initialValues.email || '');
    setValue('nombre', initialValues.nombre || '');
    setValue('password', initialValues.password || '');
    setValue('apellido', initialValues.apellido || '');
    setValue('fecha_nacimiento', initialValues.fecha_nacimiento || '');
    setValue('rol', initialValues.rol || '');
    }
  }

  useEffect(() => {
    reset()
    if (isEdit) {
      setTitle('Editar usuario');
      setSubmitText('Actualizar usuario');
      cargarDatosUsuario();
    } else {
      setTitle('Crear usuario');
      setSubmitText('Crear usuario');
    }
  }, [isEdit, initialValues]);

  const onSubmit = async (values) => {
    try{
      if (!isEdit) {
        await dispatch(createUsuario(values));
        openNotification(' Usuario creado',true);
      } else {
        await dispatch(updateUsuario(initialValues._id, values));
        openNotification('Usuario actualizado',true);
      }
      await finish();
    } catch(err){
      openNotification( 'Hubo un problema',false);
    }
  };

  const finish =  () => {  
    onCancel();
    dispatch(getUsuarios());
  }

  const openNotification = ( message, icon) => {
    notification.success({
      message: `${message}!`,
      description:
      `El ${message} correctamente`,
      icon: (
        icon ? <SmileOutlined
          style={{
            color: '#00dc00',
          }} /> : 
          <MehOutlined
          style={{
            color: '#ff0000',
          }}
        />
      ),
    });
  };

  return (
    <Modal
      open={open}
      title={title}
      okText={submitText}
      onCancel={onCancel}
      footer={null}
    >
      <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formNombreUsuario">
          <Form.Label>Nombre*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Juan"
            {...register("nombre", {
              required: "El nombre del usuario es obligatorio",
              minLength: {
                value: 3,
                message: "Debe ingresar como mínimo 3 caracter",
              },
              maxLength: {
                value: 30,
                message: "Debe ingresar como máximo 30 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombre?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formApellUsuario">
          <Form.Label>Apellido*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Martinez"
            {...register("apellido", {
              required: "El apellido del usuario es obligatorio",
              minLength: {
                value: 3,
                message: "Debe ingresar como mínimo 3 caracter",
              },
              maxLength: {
                value: 30,
                message: "Debe ingresar como máximo 30 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.apellido?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formEmail">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ej: ejemplo@email.com"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: { value:/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i,
              message: "Debe ingresar un email valido",
                        },
              minLength: {
                value: 10,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 40,
                message: "Debe ingresar como maximo 30 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        {!isEdit && (
          <Form.Group className="mb-3" controlId="formNombreUsuario">
          <Form.Label>Contraseña*</Form.Label>
          <Form.Control
            type="password"
            placeholder="**********"
            {...register("password", {
              required: "La contraseña del usuario es obligatorio",
              minLength: {
                value: 3,
                message: "Debe ingresar como mínimo 5 caracter",
              },
              maxLength: {
                value: 30,
                message: "Debe ingresar como máximo 30 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.password?.message}
          </Form.Text>
        </Form.Group>
        )}
        
        <Form.Group className="mb-3" controlId="formTipo">
          <Form.Label>Rol*</Form.Label>
          <Form.Select
            {...register("rol", {
              required: "El Rol de usuario es obligatorio",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value={true}>Administrador</option>
            <option value={false}>Cliente</option>      
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.rol?.message}
          </Form.Text>
        </Form.Group>                
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Fecha de Nacimiento*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: DD/MM/AAAA"
            {...register("fecha_nacimiento", {
              required: "La fecha es obligatorio",
              pattern: {
                value: /^\d{1,2}\/\d{1,2}\/\d{4}$/g,
                message: "El formato de la fecha ingresada no es válido",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Button type="primary" htmlType="submit">
            {submitText}
          </Button>
      </Form>
    </Modal>
  );
};

export default ModalUsuarios;