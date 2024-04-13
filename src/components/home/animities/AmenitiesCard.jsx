/// AmenitiesCard.js
import React from 'react';
import { Card, Button } from 'antd';
import './AmenitiesCard.css'; // Importar el archivo CSS con los estilos

const AmenitiesCard = ({ icon, title, description }) => {
  return (
    <Card className="card-container-amenities">
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
        <div className=' me-4'>{icon}</div>
        <h4 className="title-amenities">{title}</h4>
      </div>
      <p className="description-amenities">{description}</p>
      <Button type="primary" className="button-amenities">Ver más</Button>
    </Card>
  );
};

export default AmenitiesCard;