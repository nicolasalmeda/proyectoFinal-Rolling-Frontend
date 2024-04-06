import React from 'react'
import NavAdmin from './NavAdmin'
import './admin.css'

const HabitacionesAdmin = () => {
  return (
    <div className='d-flex mainContainer bg-secondary'>
      <NavAdmin />
      <div className='bg-white d-flex flex-grow-1 mb-2 mt-2 rounded p-4'>
        <h1>Habitaciones</h1>
      </div>
    </div>
  )
}

export default HabitacionesAdmin