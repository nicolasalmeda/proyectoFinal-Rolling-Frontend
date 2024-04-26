import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const Presentacion1 = () => {
  return (
    <Collapse accordion className='container '>
      <Panel header="¿Cómo puedo hacer una reserva en el hotel?" key="1">
        <p>Puedes hacer una reserva en nuestro hotel a través de nuestra página web, por teléfono o por correo electrónico. También puedes visitarnos en persona.</p>
      </Panel>
      <Panel header="¿Cuál es el horario de check-in y check-out?" key="2">
        <p>El check-in está disponible a partir de las 15:00 y el check-out debe realizarse antes de las 12:00.</p>
      </Panel>
      {/* Agrega más preguntas y respuestas según sea necesario */}
    </Collapse>
  );
};

export default Presentacion1;
