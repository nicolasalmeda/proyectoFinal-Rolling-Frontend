import React from 'react'
import error from '../assets/img/404.png'
import { Button } from 'antd'

function Error404() {
  return (
    <div className='mainContainer d-flex flex-column justify-content-center align-items-center'>
      <h3 className='display-3 mt-2'>Página NO Encontrada</h3>
      <img src={error} 
      alt="error 404" 
      className='img-fluid mb-4'
      width="600"
      height="600"
       />
      <Button href='/' className='col-md-4 mt-3 mb-4' danger ghost>Volver al Inicio</Button>
    </div>
  )
}

export default Error404