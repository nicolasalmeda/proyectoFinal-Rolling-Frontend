import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/img/logo-bell.png';

const Menu = () => {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className='bg-dark text-light'>
    <Container>
      <Navbar.Brand as={Link} to='/' className='text-white'> <img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}Hotelería</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink  to="/" className='nav-link text-white'>Inicio</NavLink>
          <NavLink  to="/quienes" className='nav-link text-white'>Quiénes Somos</NavLink>
          <NavLink  to="/contacto" className='nav-link text-white'>Contacto</NavLink>
          <NavLink  to="/galeria" className='nav-link text-white'>Galería de Imágenes</NavLink>
          <NavLink  to="/habitaciones" className='nav-link text-white'>Cátalogo de habitaciones</NavLink>
          <NavDropdown title="Mi Cuenta" id="basic-nav-dropdown" className='text-white'>
              <Link to="/login" className="dropdown-item">Iniciar sesión</Link>
              <Link to="/registro" className="dropdown-item">Registro</Link>
            </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Menu;
