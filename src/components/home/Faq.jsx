import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Faq.css';

function HotelFAQ() {
  return (
    <>
    <h2 className=' text-center fw-bold'>Preguntas Frecuentes </h2>
    <Accordion className="container mt-3 " defaultActiveKey="0">
      <Accordion.Item>
        <Accordion.Header className="custom-header">
          ¿Cuál es el horario de check-in y check-out?
        </Accordion.Header>
        <Accordion.Body className='fw-bold'>
          El horario de check-in es a partir de las 15:00 y el horario de check-out es antes de las 12:00.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="custom-header">
          ¿Ofrecen servicio de transporte desde/hacia el aeropuerto?
        </Accordion.Header>
        <Accordion.Body>
          Sí, ofrecemos servicio de transporte desde y hacia el aeropuerto. Por favor, contáctanos con anticipación para organizar el servicio.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className="custom-header">
          ¿Se permiten mascotas en el hotel?
        </Accordion.Header>
        <Accordion.Body>
          Sí, se permiten mascotas en el hotel. Sin embargo, puede haber restricciones y tarifas adicionales. Por favor, contáctanos para obtener más información.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className="custom-header">
          ¿Ofrecen servicio de lavandería?
        </Accordion.Header>
        <Accordion.Body>
          Sí, ofrecemos servicio de lavandería para nuestros huéspedes. Puedes solicitar el servicio en la recepción del hotel.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  );
}

export default HotelFAQ;
