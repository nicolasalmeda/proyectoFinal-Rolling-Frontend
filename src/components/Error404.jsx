import React from 'react'
import error from '../assets/img/404.png'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div className='mainContainer d-flex flex-column justify-content-center align-items-center backgound__color--error'>
      <h3 className='display-3 mt-2'>Página NO Encontrada</h3>
      <img src={error} 
      alt="error 404" 
      className='img-fluid mb-4'
      width="600"
      height="600"
      />
      <Link to={'/'}>
      <button className='btn button__color my-4' >Volver al Inicio</button>
      </Link>
    </div>
  )
}

export default Error404