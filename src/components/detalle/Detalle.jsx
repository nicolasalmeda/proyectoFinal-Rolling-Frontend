import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getHabitaciones} from "../../Redux/actions/actions";
import { Container } from "react-bootstrap";
import ModalCreateReserva from "./ModalCreateReserva";
import { set } from "react-hook-form";


const Detalle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); 
  const habitaciones = useSelector((state) => state.habitaciones.habitaciones);
  const [habitacionActual, setHabitacionActual] = useState(null);
  const [indiceHabitacion, setIndiceHabitacion] = useState(null);
  const [modalVisible, setModalVisible] = useState(false)
  const [reserva, setReserva] = useState({});

  useEffect(() => {
    dispatch(getHabitaciones(id)); 
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
      navigate(`/habitacion/${siguienteId}`);
    }
  };

  const handleAnterior = () => {
    const anteriorIndex = indiceHabitacion - 1;
    if (anteriorIndex >= 0) {
      const anteriorId = habitaciones[anteriorIndex]._id;
      navigate(`/habitacion/${anteriorId}`);
    }
  };

  const showModal = (record) => {
    setModalVisible(true);
  }

  const handleCancel = () =>{
    setModalVisible(false)
  }

console.log(reserva)

  const handleAlquilar = async () => {
      const token = sessionStorage.getItem("token");
      // if (!token) {
      //   navigate("/login");
      //   return;
      // }
    setReserva({
      habitacion: habitacionActual._id,
      habitacion_numero: habitacionActual.numero,
      usuario: "60e4d8b1c8d7f70015c3f5d0",
    });
      showModal();
  };
  return (
    <div className="mainContainer">
      {habitacionActual ? (
        <Container className="d-flex flex-column justify-content-center align-items-center text-center background__color my-4 rounded py-4 shadow">
          <h2 className="text-bold">Detalles de la habitación</h2>
          <div className="d-flex ">
            <div className="col-lg-6 col-12 flex-wrap me-2"> 
              <img src={habitacionActual.imagen} alt="Imagen de la habitación" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6 col-12 d-flex flex-column gap-3 justify-content-center ms-2 bg-white rounded">
              <div className="d-flex gap-3 justify-content-center ">
              <p className="border-end border-black pe-4"><strong>Número:</strong> {habitacionActual.numero}</p>
              <p className="border-end border-black pe-4"><strong>Tipo:</strong> {habitacionActual.tipo}</p>
              <p className=""><strong>Precio:</strong> {habitacionActual.precio}</p>
              </div>
              <p><strong>Disponibilidad:</strong> {habitacionActual.disponibilidad}</p>
              <div className="bg-white rounded">
              <p><strong>Descripción:</strong> {habitacionActual.descripcion}</p>
              </div>
            </div>
          </div>

          <div className="d-flex gap-4 my-4">
            <button
            className="btn btn-info"
              onClick={handleSiguiente}
              disabled={indiceHabitacion === habitaciones.length - 1}
            >
              Siguiente
            </button>
            <button 
              className="btn btn-info"
              onClick={handleAnterior} 
              disabled={indiceHabitacion === 0}>
              Anterior
            </button>

          </div>

          <button
            className="btn btn-success"
            onClick={handleAlquilar}
            disabled={habitacionActual.disponibilidad !== "disponible"}
          >
            Alquilar
          </button>
        </Container>
      ) : (
        <p>Cargando...</p>
      )}
      <ModalCreateReserva
      open={modalVisible}
      initialValues={reserva}
      onCancel={handleCancel}
      />
    </div>
  );
};

export default Detalle;
