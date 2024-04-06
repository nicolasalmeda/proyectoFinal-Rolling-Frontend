import React from 'react'
import NavAdmin from './NavAdmin'
import './admin.css'


const LayoutAdmin = () => {
  return (
    <div className='d-flex flex-column mainContainer bg-secondary'> 
      <NavAdmin />
      <div className='bg-white d-flex flex-grow-1 mb-2 m-4 rounded p-4'>
        <h1>Bienvenido a la pagina administrador</h1>
      </div>

    </div>
  )
}

export default LayoutAdmin