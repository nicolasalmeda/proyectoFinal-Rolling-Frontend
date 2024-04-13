import React from "react";
import './StyleDetailsHotel.css';
import { Button } from 'antd';
const DetailsHotel = () => {
  return (
    <div className="container-fluid text-center  bg-details">
      <h2> Acerca del Hotel</h2>
      <div className="detalle-container">
        <div className="descripcion-breve">
          <p className="fw-bold">
            ¡Bienvenido al Hotel Luna Azul! Tu comodidad y satisfacción son nuestra prioridad absoluta
          </p>
          <Button className="btn-details" type="link" value="defaul">Ver más</Button>
        </div>
        <div className="imagen-hotel">
          <img src="https://saltaciudad.travel/wp-content/uploads/hotel-salta.jpg" alt="Frente del hotel" />
        </div>
      </div>
    </div>
  );
};

export default DetailsHotel;