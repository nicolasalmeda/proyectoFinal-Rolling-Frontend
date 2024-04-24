import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getHabitaciones} from "../../Redux/actions/actions";
import { Container } from "react-bootstrap";
import ModalCreateReserva from "./ModalCreateReserva";
import { set } from "react-hook-form";
import "./detalle.css"


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

  const handleAlquilar = async () => {
      const token = sessionStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
          }
        
    const user = localStorage.getItem("userId");


    setReserva({
      habitacion: habitacionActual._id,
      habitacion_numero: habitacionActual.numero,
      usuario: user,
    });
      showModal();
  };
  return (
    <div className="mainContainer backgound__color--detalle py-4">
      <h2 className="title__detalle mx-3 ">Detalles de la habitación</h2>
      {habitacionActual ? (
        <div className="d-flex flex-column justify-content-center align-items-center text-center background__color--detail m-4 rounded shadow">
          
          <div className="d-flex flex-wrap ">
            <div className="col-lg-8 col-12"> 
              <img src={habitacionActual.imagen} alt="Imagen de la habitación" className="img-fluid rounded" />
            </div>
            <div className="col-lg-4 col-12 d-flex flex-column justify-content-center align-items-center">
              <div className="container__detail text-center rounded">
                <p className="text-center w-100"><strong>Habitación Número:</strong> {habitacionActual.numero}</p>
              </div>
              <div className="container__detail text-center rounded flex-column justify-content-center">
              <p className=""><strong>Tipo:</strong> {habitacionActual.tipo}</p>
              </div>
              <div className="container__detail--descripcion flex-column text-center rounded">
                <p className="text-center w-100 p-1"><strong>Actualmente la habitación se encuentra:</strong></p>
                <p className={habitacionActual.disponibilidad === 'disponible' ? 'text-center w-50 disponible p-1 rounded' : 'text-center p-1 w-50 no__disponible rounded'}>{habitacionActual.disponibilidad}</p>
              </div>
              <div className="container__detail text-center rounded flex-column justify-content-center">
              <p className="text-center w-100"><strong>Precio:</strong></p>
              <p className="text-center w-100 fw-bolder fs-4">$ {habitacionActual.precio}</p>
              </div>
              <div className="container__detail--descripcion text-center rounded">
                <p className="text-center w-100"><strong>Descripción:</strong> {habitacionActual.descripcion}</p>
              </div>
            </div>
          </div>

          <div className="d-flex gap-4 my-4">
            <button 
              className="btn__detalle"
              onClick={handleAnterior} 
              disabled={indiceHabitacion === 0}>
              Anterior
            </button>
            <button
            className="btn__detalle"
              onClick={handleSiguiente}
              disabled={indiceHabitacion === habitaciones.length - 1}
            >
              Siguiente
            </button>

          </div>

          <button
            className="btn__detalle--reservar"
            onClick={handleAlquilar}
            disabled={habitacionActual.disponibilidad !== "disponible"}
          >
            Reservar
          </button>
        </div>
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
