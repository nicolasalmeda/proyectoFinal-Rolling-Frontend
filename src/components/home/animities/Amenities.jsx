import React from 'react';
import AmenitiesCard from './AmenitiesCard';
import servicio from '../../../assets/svg/svg-catering.png';
import gimnasio from '../../../assets/svg/svg-gimnasio.png';
import './AmenitiesCard.css';
import { useNavigate } from 'react-router-dom';

const Amenities = () => {
  const navigate = useNavigate();

  const handleClick = (servicio) => {
    navigate(`servicio/${servicio}`);
  };

  return (
    <div className='amenities-container'>
      <AmenitiesCard onClick={() => handleClick('catering')} icon={<img className='img-amenities' src={servicio} alt="" />} title="Catering" description="Orgullosos de brindar un catering excepcional que realza la experiencia de huéspedes y eventos. Dedicación a calidad, creatividad y servicio personalizado." />
      <AmenitiesCard onClick={() => handleClick('gimnasio')} icon={<img className='img-amenities' src={gimnasio} alt="" />} title="Gimnasio" description="Descubra nuestro gimnasio de última generación: energía y vitalidad fusionadas para una experiencia excepcional. Equipado con lo último y rodeado de inspiración." />
      <AmenitiesCard onClick={() => handleClick('piscina')} icon={<img className='img-amenities' src={servicio} alt="" />} title="Piscina" description="Nuestra piscina es un santuario de tranquilidad: agua cristalina y entorno exuberante para escapar del bullicio y disfrutar del sol en serenidad absoluta." />
      <AmenitiesCard onClick={() => handleClick('estacionamiento')} icon={<img className='img-amenities' src={servicio} alt="" />} title="Estacionamiento" description="Refugie su vehículo con seguridad y tranquilidad durante su estancia en nuestro hotel, garantizando comodidad absoluta." />
      <AmenitiesCard onClick={() => handleClick('recepcion')} icon={<img className='img-amenities' src={servicio} alt="" />} title="Servicio de Recepción" description="En nuestra recepción, le damos la bienvenida con una sonrisa y un servicio atento. Registro rápido y asistencia para hacer su estadía cómoda y sin complicaciones." />
    </div>
  );
};

export default Amenities;
