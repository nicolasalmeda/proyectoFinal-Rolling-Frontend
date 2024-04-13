import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/img/logo-bell.png';

const Menu = () => {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="bg-transparent fixed-top">
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
          <NavLink end to="/" className='nav-link text-white'>Inicio</NavLink>
          <NavLink end to="/usuarios" className='nav-link text-white'>Usuarios</NavLink>
          <NavLink end to="/habitaciones" className='nav-link text-white'>Habitaciones</NavLink>
          <NavLink end to="/reservas" className='nav-link text-white'>Reservas</NavLink>
          <NavDropdown title="Mi Cuenta" id="basic-nav-dropdown" className='text-white'>
              <NavDropdown.Item end to="/login">Iniciar sesión</NavDropdown.Item>
              <NavDropdown.Item end to="/registro">Registro</NavDropdown.Item>
            </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Menu;
