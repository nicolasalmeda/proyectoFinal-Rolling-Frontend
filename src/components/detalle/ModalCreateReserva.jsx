import React, { useState, useEffect } from 'react';
import { Modal, Button,notification } from 'antd';
import {Form,Container,Badge} from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import moment from 'moment';
import { getReservas, updateReserva, addReserva, getReservasByIdHabitacion,cleanStateFechaReservas } from '../../Redux/actions/actions';
import { SmileOutlined, MehOutlined } from '@ant-design/icons';




const ModalCreateReserva = ({ open, onCancel, initialValues}) => {
  const dispatch = useDispatch();
  let disabledDates = useSelector((state) => state.reservas.fechasReservas);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues
  } = useForm();


  const [title, setTitle] = useState('');
  const [submitText, setSubmitText] = useState('');

  const cargarDatosProducto =  () => {
    if (initialValues){
    setValue('numero_reserva', initialValues.numero_reserva || Math.floor(Math.random() * 100));
    setValue('usuario', initialValues.usuario || '');
    setValue('habitacion', initialValues.habitacion || '');    
    }
  }



  useEffect(() => {
    reset()
    dispatch(cleanStateFechaReservas());
    setTitle('Crear Reserva');
    setSubmitText('Crear Reserva');
    cargarDatosProducto();
    dispatch(getReservasByIdHabitacion(initialValues.habitacion));
  
  }, [initialValues]);

  const onSubmit = async (values) => {
    try{
        await dispatch(addReserva(values));
        openNotification(' Reserva creada',true);
      await finish();
    } catch(err){
      openNotification( 'Hubo un problema',false);
    }
  };

  const finish =  () => {  
    onCancel();
    dispatch(getReservas());
    setValue('habitacion', '');
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


  const isDateDisabledEntrada = (dateString) => {
    const date = moment(dateString, 'DD/MM/YYYY').format('DD/MM/YYYY');
    const result = disabledDates.includes(date);
    
      if (result) {
        return false;
      }else{
        return true;
    } 
  }

  const isDateDisabledSalida = (dateString) => {
    const date = moment(dateString, 'DD/MM/YYYY').format('DD/MM/YYYY');
    const result = disabledDates.includes(date);
      if (result) {
        return false;
      }else{
        return true;
      }
  }

  return (
    <Modal
      open={open}
      title={title}
      okText={submitText}
      onCancel={onCancel}
      footer={null}
    >
      <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreReserva">
          <Form.Label>Número*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 25"
            {...register("numero_reserva", {
              required: "El numero de la reserva es obligatorio",
              min: {
                value: 1,
                message: "Debe ingresar como minimo 1 caracter",
              },
              max: {
                value: 99999999,
                message: "Debe ingresar como maximo 8 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.numero_reserva?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTipo">
          <Form.Label>Habitación N°*</Form.Label>
          <Form.Select
            {...register("habitacion", {
              required: "El número de habitacion de habitación es obligatorio",
            })}
            onChange={(e) => {
              const habitacionId = e.target.value;
              dispatch(getReservasByIdHabitacion(habitacionId));
            }}
          >
            <option value={initialValues.habitacion}>{initialValues.habitacion_numero}</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.habitacion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Usuario*</Form.Label>
          <Form.Select
            {...register("usuario", {
              required: "El usuario es obligatorio",
            })}
          >
            <option value={initialValues.usuario}>{initialValues.usuario}</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.usuario?.message}
            </Form.Text>
        </Form.Group>
          <Form.Group className="mb-3 mt-3" controlId="formReser">
          <Form.Label>Fechas Reservadas</Form.Label>
          <Container fluid className="d-flex justify-content-center flex-wrap">
            {disabledDates.length > 0 && disabledDates.map((date, index) => (
              <Badge key={index} pill bg="danger" className="m-1">
                {date}
              </Badge>
            ))}
          </Container>
          </Form.Group>
        <Form.Group className="mb-3" controlId="formFechaIngreso">
          <Form.Label>Fecha de Ingreso*</Form.Label>
          <Form.Control
            type='text'
            placeholder="DD/MM/YYYY"
            {...register("fecha_entrada", {
              required: "La fecha de ingreso es obligatoria",
              pattern:{
                value: /^\d{1,2}\/\d{1,2}\/\d{4}$/g,
                message: "El formato de la fecha ingresada no es válido"
              },
              validate: {
                notGreaterThanSalida: value => {
                  const entrada = moment(value, 'DD/MM/YYYY');
                  const salida = moment(getValues('fecha_salida'), 'DD/MM/YYYY');
                  return entrada.isSameOrBefore(salida) || "La fecha de ingreso debe ser anterior o igual a la fecha de salida";
                },
                notPastThanToday: value => {
                  const today = moment();
                  const entrada = moment(value, 'DD/MM/YYYY');
                  return entrada.isSameOrAfter(today) || "La fecha de ingreso debe ser igual o posterior a la fecha actual";
                },
                dateDisabled: value => isDateDisabledEntrada(value) || "La fecha ingresada ya está reservada"
              }
            })}
          />
          <Form.Text className="text-danger">
            {errors.fecha_entrada?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFechaSalida">
          <Form.Label>Fecha de Salida*</Form.Label>
          <Form.Control
            type="text"
            placeholder="DD/MM/YYYY"
            {...register("fecha_salida", {
              required: "La fecha de salida es obligatoria",
              pattern:{
                value: /^\d{1,2}\/\d{1,2}\/\d{4}$/g,
                message: "El formato de la fecha ingresada no es válido"
              },
              validate: {
                dateDisabled: value => isDateDisabledSalida(value) || "La fecha ingresada ya está reservada"
              }
            })}
          />
          <Form.Text className="text-danger">
            {errors.fecha_salida?.message}
          </Form.Text>
        </Form.Group>

        <Button type="primary" htmlType="submit">
            {submitText}
          </Button>
      </Form>
    </Modal>
  );
};

export default ModalCreateReserva;