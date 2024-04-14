import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getHabitacion, addReserva } from "../Redux/actions/actions";

const Detalle = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams(); 
  const habitaciones = useSelector((state) => state.habitaciones.habitaciones);
  const [habitacionActual, setHabitacionActual] = useState(null);
  const [indiceHabitacion, setIndiceHabitacion] = useState(null);

  useEffect(() => {
    dispatch(getHabitacion(id)); 
  }, [dispatch, id]);

  useEffect(() => {
    const index = habitaciones.findIndex(
      (habitacion) => habitacion._id === id 
    );
    if (index !== -1) {
      setHabitacionActual(habitaciones[index]);
      setIndiceHabitacion(index);
    }
  }, [habitaciones, id]);

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

  const handleAlquilar = async () => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        history.push("/login");
        return;
      }

      const reserva = {
        habitacion: habitacionActual._id,
        usuario: "",
        fechaInicio: new Date(),
        fechaFin: new Date(),
      };
      reserva.fechaInicio = reserva.fechaInicio.toISOString();
      reserva.fechaFin = reserva.fechaFin.toISOString();

      await dispatch(addReserva(reserva));

      setHabitacionActual({
        ...habitacionActual,
        disponibilidad: "no disponible",
      });

      alert("¡Habitación alquilada con éxito!");
    } catch (error) {
      console.error("Error al alquilar la habitación:", error);
      alert(
        "Hubo un error al intentar alquilar la habitación. Por favor, inténtalo de nuevo más tarde."
      );
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

          <button
            onClick={handleSiguiente}
            disabled={indiceHabitacion === habitaciones.length - 1}
          >
            Siguiente
          </button>
          <button onClick={handleAnterior} disabled={indiceHabitacion === 0}>
            Anterior
          </button>
          <button
            onClick={handleAlquilar}
            disabled={habitacionActual.disponibilidad !== "disponible"}
          >
            Alquilar
          </button>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Detalle;
