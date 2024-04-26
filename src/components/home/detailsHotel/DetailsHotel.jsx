import React from "react";
import './StyleDetailsHotel.css';
import { Button } from 'antd';
import entradaHotel from '../../../assets/images/banner11.jpg'
const DetailsHotel = () => {
  return (
    <div className="container-fluid text-center bg-details py-4 container__contacto">
      <h2 className=" text-h2"> Acerca del Hotel</h2>
      <div className="detalle-container">
        <div className="descripcion-breve">
          <p className="fw-bold">
          En el corazón de la pintoresca ciudad costera, te damos la más cálida bienvenida al Hotel Serenity, donde cada momento está impregnado de tranquilidad y elegancia. Desde el momento en que cruzas nuestras puertas, te sumergirás en una experiencia de hospitalidad excepcional que redefine el confort y la serenidad.

Nuestro hotel, cuidadosamente diseñado para satisfacer incluso los gustos más exigentes, ofrece una mezcla perfecta de encanto contemporáneo y lujo atemporal. Desde nuestras habitaciones elegantemente decoradas hasta nuestros espacios comunes meticulosamente diseñados, cada detalle ha sido pensado para ofrecerte una estancia inolvidable.
          </p>
          <Button className="btn-details" type="link" value="defaul">Ver más</Button>
        </div>
        <div className="imagen-hotel">
          <img src={entradaHotel} alt="Frente del hotel" className="rounded" />
        </div>
      </div>
    </div>
  );
};

export default DetailsHotel;