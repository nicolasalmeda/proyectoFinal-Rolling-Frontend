import React from 'react';
import { infoAminities } from '../../helpers/aminities';
import {useParams} from 'react-router-dom'
import './AmenitiesDetails.css'


const DetallesAminities = () => {
  const {amenities}= useParams()

    const detalles = infoAminities[amenities];
  
    return (
      <div className=' container text-center'>
        <h2>{detalles.titulo}</h2>
        <p>{detalles.descripcion}</p>
        <div>
          <img className='img-amenities-1' src={detalles.img1} alt="" />
          <img className='img-amenities-1' src={detalles.img2} alt="" />
        </div>
      </div>
    );
  };

export default DetallesAminities;
