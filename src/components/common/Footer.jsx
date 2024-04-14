import React from 'react'
import logo from '../../assets/img/logo-bell.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-dark p-4 d-flex'>
      <div className='container text-light'>
        <div className='row'>
          <div className='col-md-4 col-lg-3'>
            <h5>Información de contacto</h5>
            <p><i className="bi bi-envelope-at-fill"></i> Correo: rolling@hotel.common</p>
            <p><i className="bi bi-telephone-fill"></i> Telefono: 123456789</p>
            <p><i className="bi bi-geo-alt-fill"></i> Dirección: Calle falsa 123</p>
          </div>
          <div className='col-md-4 col-lg-3'>
            <h5>Redes sociales</h5>
            <Link to={'*'} className='nav-link text-white'>
              <p><i className="bi bi-facebook"></i> Facebook</p>
            </Link>
            <Link to={'*'} className='nav-link text-white'>
              <p><i className="bi bi-twitter-x"></i> Twitter</p>
            </Link>
            <Link to={'*'} className='nav-link text-white'>
              <p><i className="bi bi-instagram"></i> Instagram</p>
            </Link>
          </div>
          <div className='col-md-4 col-lg-3'>
            <h5>Mapa del sitio</h5>
            <p>Inicio</p>
            <p>Usuarios</p>
            <p>Habitaciones</p>
            <p>Reservas</p>
          </div>
          <div className='col-md-12 col-lg-3 text-center'>
            <img src={logo} 
            alt='logo'
            className='logo mb-3'
            width="30"
            height="30"
            />
            <p>© 2024 Rolling Code School</p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer