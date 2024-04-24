import React, { useState, useEffect } from 'react';
import { Modal, Button,notification } from 'antd';
import {Form} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { addHabitacion,updateHabitacion,getHabitaciones } from '../../../Redux/actions/actions';
import { SmileOutlined, MehOutlined } from '@ant-design/icons';




const ModalHabitaciones = ({ open, onCancel, isEdit, initialValues}) => {
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

  const cargarDatosProducto =  () => {
    if (initialValues){
    setValue('numero', initialValues.numero || '');
    setValue('tipo', initialValues.tipo || '');
    setValue('precio', initialValues.precio || '');
    setValue('imagen', initialValues.imagen || '');
    setValue('disponibilidad', initialValues.disponibilidad || '');
    setValue('descripcion', initialValues.descripcion || '');
    }
  }

  useEffect(() => {
    reset()
    if (isEdit) {
      setTitle('Editar habitación');
      setSubmitText('Actualizar Habitación');
      cargarDatosProducto();
    } else {
      setTitle('Crear habitación');
      setSubmitText('Crear Habitación');
    }
  }, [isEdit, initialValues]);

  const onSubmit = async (values) => {
      if (!isEdit) {
        try{
          const response = await dispatch(addHabitacion(values))
          if(response){
            openNotification('Habitación creada',true);
          }else{
            openNotification('La habitación no se pudo crear',false);
          }
        }catch(error){
          openNotification('La habitación no se pudo crear',false);
        }
      } else {
        try{
          const response = await dispatch(updateHabitacion(initialValues._id, values));
          if(response){
            openNotification('Habitación actualizada',true);
          }else{
            openNotification('La habitación no se pudo actualizar',false);
          }
          await finish();
        }catch(err){
          openNotification('La habitación no se pudo actualizar',false);
        }
      }
      
  };

  const finish =  () => {  
    onCancel();
    dispatch(getHabitaciones());
  }

  const openNotification = ( message, icon) => {
    notification.success({
      message: (
        icon ? 'La operación se realizo con éxito' : 'Hubo un problema!'
      ),
      description:
      `${message}`,
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
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Número*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 25"
            {...register("numero", {
              required: "El numero de la habitación es obligatorio",
              min: {
                value: 1,
                message: "Debe ingresar como minimo 1 caracter",
              },
              max: {
                value: 999,
                message: "Debe ingresar como maximo 4 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.numero?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTipo">
          <Form.Label>Tipo*</Form.Label>
          <Form.Select
            {...register("tipo", {
              required: "El tipo de habitación es obligatorio",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="individual">Individual</option>
            <option value="doble">Doble</option>
            <option value="triple">Triple</option>
            <option value="suite">Suite</option>
            
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.tipo?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 100"
            {...register("precio", {
              required: "El precio es obligatorio",
              min: {
                value: 100,
                message: "Debe ingresar como minimo un monto de $100",
              },
              max: {
                value: 10000,
                message: "Debe ingresar como maximo el monto es de $10000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Disponibilidad*</Form.Label>
          <Form.Select
            {...register("disponibilidad", {
              required: "La disponibilidad es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="disponible">Disponible</option>
            <option value="no disponible">No disponible</option>
            
          </Form.Select>
          <Form.Text className="text-danger">{errors.disponibilidad?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La imagen es obligatorio",
              pattern: {
                value: /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
                message:
                  "Debe ingresar una URL de imagen valida (png|jpg|jpeg|gif|png|svg)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripción *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Habitacion amplia con multiples...."
            as="textarea"
            {...register("descripcion", {
              required: "La descripcion es obligatoria",
              minLength: {
                value: 20,
                message: "Debe ingresar como minimo 20 caracteres",
              },
              maxLength: {
                value: 1000,
                message: "Debe ingresar como maximo 1000 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.descripcion?.message}</Form.Text>
        </Form.Group>

        <Button type="primary" htmlType="submit">
            {submitText}
          </Button>
      </Form>
    </Modal>
  );
};

export default ModalHabitaciones;