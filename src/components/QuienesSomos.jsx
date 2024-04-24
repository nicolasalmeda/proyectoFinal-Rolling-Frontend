import React from 'react'
import '../css/quienesSomos.css'
import { Container } from 'react-bootstrap'
import user from '../assets/img/user.png'
import user1 from '../assets/users/user1.jpg'
import user4 from '../assets/users/user4.jpeg'

const QuienesSomos = () => {
  return (
    <div className='mainContainer backgorund__color--quienes py-4'>
      <h3 className='title__contacto--quienes p-2 mx-3'>Quienes Somos</h3>
      <Container className='d-flex  justify-content-center align-items-center flex-wrap'>
      <div className='d-flex flex-column justify-content-center align-items-center mx-4 my-4 gap-3 card__quienes'>
            <h2 className='title__card--quienes'>Enzo Javier Gonzales</h2>
            <img src={user1} alt='imagen del usuario de la pagina quienes somos' className='img-fluid img__quines'/>
            <div className='d-flex button__container--card'>
              <a className="nav-link" href={'*'}>
              <button className="button__card--quienes"><i className="bi bi-linkedin"></i></button>
              </a>
              <a className="nav-link" href='https://github.com/Enzogz98'>
              <button className="button__card--quienes"><i className="bi bi-github"></i></button>
              </a>
            </div>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center mx-4 my-4  gap-3 card__quienes'>
            <h2 className='title__card--quienes'>Maximiliano Gómez</h2>
             <img src={user} alt='imagen del usuario de la pagina quienes somos' className='img-fluid img__quines'/>
            <div className='d-flex button__container--card'>
              <a className='nav-link' href='*'>
              <button className="button__card--quienes"><i className="bi bi-linkedin"></i></button>
              </a>
              <a className="nav-link" href='https://github.com/MaxiGomez94'>
              <button className="button__card--quienes"><i className="bi bi-github"></i></button>
              </a>
            </div>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center mx-4 my-4  gap-3 card__quienes'>
            <h2 className='title__card--quienes'>Lucía Barraza</h2>
            <img src={user} alt='imagen del usuario de la pagina quienes somos' className='img-fluid img__quines'/>
            <div className='d-flex button__container--card'>
              <a className='nav-link' href={'*'}>
              <button className="button__card--quienes"><i className="bi bi-linkedin"></i></button>
              </a>
              <a className="nav-link" href='https://github.com/mluchyb'>
              <button className="button__card--quienes"><i className="bi bi-github"></i></button>
              </a>
            </div>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center mx-4 my-4  gap-3 card__quienes'>
            <h2 className='title__card--quienes'>Lagoria Almeda Nicolás</h2>
            <img src={user4} alt='imagen del usuario de la pagina quienes somos' className='img-fluid img__quines'/>
            <div className='d-flex button__container--card'>
              <a className="nav-link" href='https://linkedin.com/in/nicolas-almeda'>
              <button className="button__card--quienes"><i className="bi bi-linkedin"></i></button>
              </a>
              <a className="nav-link" href='https://github.com/nicolasalmeda'>
              <button className="button__card--quienes"><i className="bi bi-github"></i></button>
              </a >
            </div>
          </div>
      </Container>
      </div>
  )
}

export default QuienesSomos