import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getHabitacion } from '../Redux/actions/actions';

const Detalle = ({ habitacionId }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const habitaciones = useSelector(state => state.habitaciones.habitaciones);
    const [habitacionActual, setHabitacionActual] = useState(null);
    const [indiceHabitacion, setIndiceHabitacion] = useState(null);
  
    useEffect(() => {
      dispatch(getHabitacion(habitacionId));
    }, [dispatch, habitacionId]);
  
    useEffect(() => {
      const index = habitaciones.findIndex(habitacion => habitacion._id === habitacionId);
      if (index !== -1) {
        setHabitacionActual(habitaciones[index]);
        setIndiceHabitacion(index);
      }
    }, [habitaciones, habitacionId]);
  
    const handleSiguiente = () => {
      const siguienteIndex = indiceHabitacion + 1;
      if (siguienteIndex < habitaciones.length) {
        const siguienteId = habitaciones[siguienteIndex]._id;
        history.push(`/habitacion/${siguienteId}`);
      }
    };
  
    const handleAnterior = () => {
      const anteriorIndex = indiceHabitacion - 1;
      if (anteriorIndex >= 0) {
        const anteriorId = habitaciones[anteriorIndex]._id;
        history.push(`/habitacion/${anteriorId}`);
      }
    };
  return (
<div>
      {habitacionActual ? (
        <div>
          <h2>Detalles de la habitación</h2>
          <p>Número: {habitacionActual.numero}</p>
          <p>Tipo: {habitacionActual.tipo}</p>
          <p>Precio: {habitacionActual.precio}</p>
          <p>Disponibilidad: {habitacionActual.disponibilidad}</p>
          <img src={habitacionActual.imagen} alt="Imagen de la habitación" />
          <p>Descripción: {habitacionActual.descripcion}</p>

          <button onClick={handleSiguiente} disabled={indiceHabitacion === habitaciones.length - 1}>
            Siguiente
          </button>
          <button onClick={handleAnterior} disabled={indiceHabitacion === 0}>
            Anterior
          </button>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Detalle
