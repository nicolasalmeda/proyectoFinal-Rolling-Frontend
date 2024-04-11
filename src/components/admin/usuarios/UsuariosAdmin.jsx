import React from 'react'
import NavAdmin from '../NavAdmin'
import '../admin.css'

const UsuariosAdmin = () => {
  return (
    <div className='d-flex mainContainer bg-secondary flex-column'>
    <NavAdmin />
    <div className='bg-white d-flex flex-grow-1 mb-2 m-4 rounded p-4'>
      <h1>Usuarios</h1>
    </div>
  </div>
  )
}

export default UsuariosAdmin