import React from 'react';
import { infoAminities } from '../../helpers/aminities';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import './AmenitiesDetails.css';

const DetallesAminities = () => {
  const { amenities } = useParams();
  const detalles = infoAminities[amenities];
  
  return (
    <div className='text-center container-detailsAmenities'>
      <h2>{detalles.titulo}</h2>
      <p className='amenitiesDetails-p container'>{detalles.descripcion}</p>
      <Carousel className='carousel-amenities'>
        <Carousel.Item>
          <img className='img-amenities-1' src={detalles.img1} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className='img-amenities-1' src={detalles.img2} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className='img-amenities-1' src={detalles.img3} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default DetallesAminities;
