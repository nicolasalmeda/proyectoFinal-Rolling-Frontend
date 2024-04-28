import React from 'react';
import { Card, Button } from 'antd';
import './AmenitiesCard.css';

const AmenitiesCard = ({ icon, title, description, onClick }) => {
  return (
    <Card
      className="card-container-amenities d-flex align-items-center justify-content-center backgound__color--error fade-in-animation slide-in-animation"
      onClick={onClick}
    >
      <div className="d-flex align-items-center">
        <div className='me-4 icon-amenities'>{icon}</div>
        <div className='flex-grow-1'>
          <h4 className="title-amenities">{title}</h4>
          <p className="description-amenities">{description}</p>
        </div>
      </div>
        <Button shape='round ' className='Buttom-aminities'>Ver Mas....</Button>
    </Card>
  );
};

export default AmenitiesCard;
