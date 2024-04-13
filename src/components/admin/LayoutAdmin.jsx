import React from 'react'
import NavAdmin from './NavAdmin'
import './admin.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const LayoutAdmin = () => {
  return (
    <div className='d-flex flex-column mainContainer background__color--header w-100 '> 
      <NavAdmin />
      <div className='d-flex flex-grow-1 flex-column mb-2 m-4 rounded p-4 text-center background__color'>
        <h1 className='text-center w-100'>Bienvenido a la pagina administrador</h1>
        <Container className='d-flex justify-content-center align-items-center mt-5 flex-wrap '>
          <Link to={'/admin/usuarios'} className='text-decoration-none text-black'>
          <div className='d-flex flex-column justify-content-center align-items-center mx-4 my-4 p-4 gap-3 card__admin'>
            <h3>Usuarios</h3>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='icon__admin'>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
            <p>Panel de Usuarios</p>
          </div>
          </Link>
          <Link to={'/admin/habitaciones'} className='text-decoration-none text-black'>
          <div className='d-flex flex-column justify-content-center align-items-center mx-4 my-4 p-4 gap-3 card__admin'>
            <h3>Habitaciones</h3>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='icon__admin'>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
              </svg>
            <p>Panel de Habitaciones</p>
          </div>
          </Link>
          <Link to={'/admin/reservas'} className='text-decoration-none text-black'>
          <div className='d-flex flex-column justify-content-center align-items-center mx-4 my-4 p-4 gap-3 card__admin'>
            <h3>Reservas</h3>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='icon__admin'>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
            <p>Panel de Reservas</p>
          </div>
          </Link>
        </Container>
      </div>

    </div>
  )
}

export default LayoutAdmin