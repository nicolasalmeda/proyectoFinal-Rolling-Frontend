import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/img/logo-bell.png';

const Menu = () => {
 const token = sessionStorage.getItem('token');

 const handleLogout = () => {
   sessionStorage.removeItem('token');
 };

 return (
   <Navbar expand="lg" data-bs-theme="dark" className='bg-dark text-light sticky-top'>
     <Container>
       <Navbar.Brand as={Link} to='/' className='text-white'>
         <img
           alt="logo"
           src={logo}
           width="30"
           height="30"
           className="d-inline-block align-top"
         />{' '}Hotelería
       </Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="ms-auto">
           <NavLink to="/" className='nav-link text-white'>Inicio</NavLink>
           <NavLink to="/quienes" className='nav-link text-white'>Quiénes Somos</NavLink>
           <NavLink to="/contacto" className='nav-link text-white'>Contacto</NavLink>
           <NavLink to="/galeria" className='nav-link text-white'>Galería de Imágenes</NavLink>
           <NavLink to="/habitaciones" className='nav-link text-white'>Cátalogo de habitaciones</NavLink>
           <NavDropdown title="Mi Cuenta" id="basic-nav-dropdown" className='text-white'>
              {token ? (
                <NavDropdown.Item as={Link} to="/" onClick={handleLogout} className="text-white">Cerrar sesión</NavDropdown.Item>
              ) : (
                <>
                  <NavDropdown.Item as={Link} to="/login" className="text-white">Iniciar sesión</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/registro" className="text-white">Registro</NavDropdown.Item>
                </>
              )}
            </NavDropdown>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
 );
};

export default Menu;
