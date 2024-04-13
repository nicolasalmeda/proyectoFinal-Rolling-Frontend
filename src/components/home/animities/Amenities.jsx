import React from 'react';
import { SmileOutlined, HeartOutlined, TrophyOutlined, CarOutlined, TeamOutlined } from '@ant-design/icons'; // Importa los iconos de Ant Design
import AmenitiesCard from './AmenitiesCard';

const Amenities = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <AmenitiesCard icon={<SmileOutlined />} title="Servicio de Catering" description="Descripción del servicio de catering." />
      <AmenitiesCard icon={<HeartOutlined />} title="Gimnasio" description="Descripción del gimnasio." />
      <AmenitiesCard icon={<TrophyOutlined />} title="Piscina" description="Descripción de la piscina." />
      <AmenitiesCard icon={<CarOutlined />} title="Estacionamiento" description="Descripción del estacionamiento." />
      <AmenitiesCard icon={<TeamOutlined />} title="Servicio de Recepción" description="Descripción del servicio de recepción." />
    </div>
  );
};

export default Amenities;
