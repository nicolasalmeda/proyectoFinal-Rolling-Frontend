import React from 'react'
import '../css/contacto.css'
import logo from '../assets/img/contacto.png'
import { Container } from 'react-bootstrap'

const Contacto = () => {
  return (
    <div className='mainContainer background__color--contacto'>
      <div className="container__contacto px-5 ">
      <h2 className='title__contacto'>Contacto</h2>
      <div className='d-flex my-4 flex-wrap'>
        <div className='col-12 col-md-8 col-lg-9 d-flex justify-content-center'>
          <img src={logo} className='img-fluid' alt='imagen de pagina contacto'/>
        </div>
        <div className=' d-flex flex-column col-lg-3 col-md-4 col-12 justify-content-start py-5'>
          <h3 className='title__contacto--subtitle p-3'>Preguntas Frecuentes</h3>
          <ul className='px-3'>
            <li className='my-3 list__item'>¿Cómo puedo hacer una reserva?</li>
            <li className='my-3 list__item'>¿Cuál es el horario de atención?</li>
            <li className='my-3 list__item'>¿Cuál es el precio de las habitaciones?</li>
            <li className='my-3 list__item'>¿Se admiten mascotas?</li>
            <li className='my-3 list__item'>¿Cuál es la política de cancelación?</li>
            <li className='my-3 list__item'>¿Se puede fumar en las habitaciones?</li>
            <li className='my-3 list__item'>¿Cuál es la política de privacidad?</li>
          </ul>
        </div>
      </div>
      <Container className='container__contacto my-5 rounded'>
      <h3 className='title__contacto--subtitle p-3'>Formulario Contacto</h3>
      <form className='p-lg-5 p-md-5'>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Teléfono</label>
          <input type="tel" className="form-control" id="phone" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea className="form-control" id="message" rows="3" required></textarea>
        </div>
        <button type="submit" className="text-light btn__contacto">Enviar</button>
      </form>
      </Container>
    </div>
    </div>
  )
}

export default Contacto
