import React, { useState, useEffect } from 'react';
import { Modal, Button,notification, DatePicker } from 'antd';
import {Form,Container,Badge} from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import {useForm } from "react-hook-form";
import moment from 'moment';
import { getReservas, updateReserva, addReserva, getReservasByIdHabitacion, getHabitaciones,cleanStateFechaReservas, getUsuarios } from '../../../Redux/actions/actions';
import { SmileOutlined, MehOutlined } from '@ant-design/icons';




const ModalReservas = ({ open, onCancel, isEdit, initialValues}) => {
  const dispatch = useDispatch();
  let disabledDates = useSelector((state) => state.reservas.fechasReservas);
  const habitaciones = useSelector((state) => state.habitaciones.habitaciones);
  const usuarios = useSelector((state) => state.usuarios.usuarios);
  const [fechaEntrada, setFechaEntrada] = useState(null);
  const [fechaSalida, setFechaSalida] = useState(null);
  
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
    setValue('numero_reserva', initialValues.numero_reserva || '');
    setValue('usuario', initialValues.usuario || '');
    setValue('habitacion', initialValues.habitacion || '');
    setFechaEntrada(moment(initialValues.fecha_entrada , 'DD/MM/YYYY') || null);
    setFechaSalida(moment(initialValues.fecha_salida,'DD/MM/YYYY') || null);
    }
  }

  useEffect(() => {
    dispatch(getHabitaciones());
    dispatch(getUsuarios());
  }, [dispatch]);


  useEffect(() => {
    reset()
    setFechaEntrada(null);
    setFechaSalida(null);
    dispatch(cleanStateFechaReservas());
    if (isEdit) {
      setTitle('Editar Reserva');
      setSubmitText('Actualizar Reserva');
      cargarDatosProducto();
      dispatch(getReservasByIdHabitacion(initialValues.habitacion));
    } else {
      setTitle('Crear Reserva');
      setSubmitText('Crear Reserva');
    }
  }, [isEdit, initialValues]);

  const onSubmit = async (values) => {
    values.fecha_entrada = fechaEntrada.format('DD/MM/YYYY');
    values.fecha_salida = fechaSalida.format('DD/MM/YYYY');
    
      if (!isEdit) {
        try{
          const response = await dispatch(addReserva(values));
          if(response){
            openNotification(' Reserva creada',true);
          }else{
            openNotification('Hubo un problema',false);
          }
          await finish();
        } catch(err){
          openNotification( 'Hubo un problema',false);
        }
      } else {
        try{
          const response= await dispatch(updateReserva(initialValues._id, values));
          if(response){
            openNotification('Reserva actualizada',true);
          }else{
            openNotification('Hubo un problema',false);
          }
          await finish();
        }catch(err){
          openNotification('Hubo un problema',false);
        }
      }  
  };

  const finish =  () => {  
    onCancel();
    dispatch(getReservas());
    setValue('habitacion', '');
  }

  const openNotification = ( message, icon) => {
    notification.success({
      message: icon ? 'La operación se realizo con éxito' : 'Hubo un problema!',
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

  const validarReservasEnRango = () => {
    if(isEdit && moment(fechaEntrada,'DD/MM/YYYY').isSame(moment(initialValues.fecha_entrada,'DD/MM/YYYY')) && moment(fechaSalida,'DD/MM/YYYY').isSame(moment(initialValues.fecha_salida,'DD/MM/YYYY'))){
      return false;
    }
    if (fechaEntrada && fechaSalida) {
      const startDate = fechaEntrada.clone().startOf('day');
      const endDate = fechaSalida.clone().endOf('day');
      const reservasEnRango = disabledDates.filter((fecha) => {
        const reservaDate = moment(fecha, 'DD/MM/YYYY');
        return reservaDate.isBetween(startDate, endDate, null, '[]');
      });
  
      if (reservasEnRango.length > 0) {
        openNotification('No se puede reservar en el rango de fechas seleccionado', false);
        return true;
      }
    }
    return false;
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
          <Form.Label>Habitación*</Form.Label>
          <Form.Select
            {...register("habitacion", {
              required: "El número de habitacion de habitación es obligatorio",
            })}
            onChange={(e) => {
              const habitacionId = e.target.value;
              dispatch(getReservasByIdHabitacion(habitacionId));
            }}
          >
            <option value="">Seleccione una opcion</option>
            {habitaciones.map((habitacion) => (
              <option key={habitacion._id} value={habitacion._id}>
                {habitacion.numero}
              </option>
            ))
            }
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
            <option value="">Seleccione una opcion</option>
            {usuarios.map((usuario) => (
              <option key={usuario._id} value={usuario._id}>
                {usuario.nombre} {usuario.apellido}
              </option>
            ))
            }
          </Form.Select>
          <Form.Text className="text-danger">{errors.usuario?.message}</Form.Text>
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
          <DatePicker
            disabledDate={(current) => disabledDates.includes(current.format('DD/MM/YYYY')) ||
              current < moment().startOf('day')}
            style={{ width: '100%' }}
            format="DD/MM/YYYY"
            placeholder="Seleccione una fecha"
            name='fechaEntrada'
            value={fechaEntrada}
            onChange={(date) => setFechaEntrada(date)}
            required
          />
          {!fechaEntrada && (
            <Form.Text className="text-danger">
              La fecha de entrada es obligatoria
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFechaSalida">
          <Form.Label>Fecha de Salida*</Form.Label>
          <DatePicker
            disabledDate={(current) => disabledDates.includes(current.format('DD/MM/YYYY')) ||
              current < moment().startOf('day')}
            style={{ width: '100%' }}
            format="DD/MM/YYYY"
            placeholder="Seleccione una fecha"
            value={fechaSalida}
            onChange={(date) => setFechaSalida(date)}
            name='fechaSalida'
            required
          />
          {
            !fechaSalida && (
              <Form.Text className="text-danger">
                La fecha de salida es obligatoria
              </Form.Text>
            )
          }
          {fechaEntrada && fechaSalida && fechaEntrada.isAfter(fechaSalida) && (
            <Form.Text className="text-danger">
              La fecha de entrada no puede ser mayor que la fecha de salida
            </Form.Text>
          )}
          {fechaEntrada && fechaEntrada.isSame(moment(), 'day') && (
            <Form.Text className="text-danger">
              No se puede reservar para la fecha de hoy
            </Form.Text>
          )}
          {validarReservasEnRango() && (
            <Form.Text className="text-danger">
              No se puede reservar en el rango de fechas seleccionado
            </Form.Text>
          )}
        </Form.Group>

        <Button type="primary" htmlType="submit">
            {submitText}
          </Button>
      </Form>
    </Modal>
  );
};

export default ModalReservas;