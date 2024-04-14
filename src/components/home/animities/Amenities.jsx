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
      <AmenitiesCard onClick={() => handleClick('catering')} icon={<img className='img-amenities' src={servicio} alt="" />} title="Catering" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia placeat quis nulla amet architecto eaque odio necessitatibus aut similique accusamus? " />
      <AmenitiesCard onClick={() => handleClick('gimnasio')} icon={<img className='img-amenities' src={gimnasio} alt="" />} title="Gimnasio" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia placeat quis nulla amet architecto eaque odio necessitatibus aut similique accusamus? " />
      <AmenitiesCard onClick={() => handleClick('piscina')} icon={<img className='img-amenities' src={servicio} alt="" />} title="Piscina" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia placeat quis nulla amet architecto eaque odio necessitatibus aut similique accusamus? " />
      <AmenitiesCard onClick={() => handleClick('estacionamiento')} icon={<img className='img-amenities' src={servicio} alt="" />} title="Estacionamiento" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia placeat quis nulla amet architecto eaque odio necessitatibus aut similique accusamus?  " />
      <AmenitiesCard onClick={() => handleClick('recepcion')} icon={<img className='img-amenities' src={servicio} alt="" />} title="Servicio de Recepción" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia placeat quis nulla amet architecto eaque odio necessitatibus aut similique accusamus? " />
    </div>
  );
};

export default Amenities;
