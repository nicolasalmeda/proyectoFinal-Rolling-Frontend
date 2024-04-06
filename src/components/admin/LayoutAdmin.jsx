import React from 'react'
import NavAdmin from './NavAdmin'
import './admin.css'


const LayoutAdmin = () => {
  return (
    <div className='d-flex mainContainer bg-secondary'> 
      <NavAdmin />
      <div className='bg-white d-flex flex-grow-1 mb-2 mt-2 rounded p-4'>
        <h1>Bienvenido a la pagina administrador</h1>
      </div>

    </div>
  )
}

export default LayoutAdmin