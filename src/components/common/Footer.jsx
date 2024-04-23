import React from 'react'
import logo from '../../assets/img/logo-bell.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-dark p-4 d-flex'>
      <div className='container text-light'>
        <div className='row'>
          <div className='col-md-4 col-lg-3'>
            <h5><strong>Información de contacto</strong></h5>
            <p><i className="bi bi-envelope-at-fill"></i> Correo: hi@rollingcode.co</p>
            <p><i className="bi bi-telephone-fill"></i> Telefono: 0381 578-3030</p>
            <p><i className="bi bi-geo-alt-fill"></i> Dirección: Gral. Paz 576, T4000 San Miguel de Tucumán, Tucumán</p>
          </div>
          <div className='col-md-4 col-lg-3'>
            <h5><strong>Redes sociales</strong></h5>
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
            <h5><strong>Mapa del sitio</strong></h5>
            <Link to='/' className='nav-link text-white'>
              <p>Inicio</p>
            </Link>
            <Link to='/contacto' className='nav-link text-white'>
              <p>Contacto</p>
            </Link>
            <Link to='/galeria' className='nav-link text-white'>
              <p>Galería</p>
              </Link>
            <Link to='/quienes' className='nav-link text-white'>
              <p>Quiénes Somos</p>
              </Link>
          </div>
          <div className='col-md-12 col-lg-3 text-center d-flex flex-column justify-content-center'>
            <img src={logo} 
            alt='logo'
            className='logo mb-3'
            width="25"
            height="25"
            />
            <p>© 2024 Rolling Code School</p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer