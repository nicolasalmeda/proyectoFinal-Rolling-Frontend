
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import React, {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store/store.js";
import './index.css'
import LayoutAdmin from "./components/admin/LayoutAdmin.jsx";
import HabitacionesAdmin from "./components/admin/habitaciones/HabitacionesAdmin.jsx";
import ReservaAdmin from "./components/admin/reservas/ReservaAdmin.jsx";
import UsuariosAdmin from "./components/admin/usuarios/UsuariosAdmin.jsx";
import Menu from "./components/common/Menu.jsx";
import Footer from "./components/common/Footer.jsx";
import Error404 from "./components/Error404.jsx";
import Login from "./components/Login.jsx";
import Registro from "./components/Registro.jsx";
import Detalle from "./components/detalle/Detalle.jsx";
import Galeria from "./components/Galeria.jsx";
import Contacto from "./components/Contacto.jsx";
import QuienesSomos from "./components/QuienesSomos.jsx";
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './components/home/Home.jsx';
import DetallesAminities from './components/aminitiesDetails/DetallesAminities.jsx'
import RoomsSection from "./components/home/RoomsSection.jsx";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem('token'));
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('rol') === 'true');

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const rol = localStorage.getItem('rol');
    setIsLoggedIn(!!token);
    setIsAdmin(rol === 'true');
  }, []);
  
  return (
  <>
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
          {/* {isLoggedIn && isAdmin ? (
            <>
              <Route path="/admin" element={<LayoutAdmin />} />
              <Route path="/admin/habitaciones" element={<HabitacionesAdmin />} />
              <Route path="/admin/reservas" element={<ReservaAdmin />} />
              <Route path="/admin/usuarios" element={<UsuariosAdmin />} />
            </>
          ) : (
            <Route exact path="*"  />
          )} */}
          <Route path="/admin" element={<LayoutAdmin />} />
              <Route path="/admin/habitaciones" element={<HabitacionesAdmin />} />
              <Route path="/admin/reservas" element={<ReservaAdmin />} />
              <Route path="/admin/usuarios" element={<UsuariosAdmin />} />
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/registro" element={<Registro/>}/>
        <Route exact path="/habitacion/:id" element={<Detalle/>}/>
        <Route exact path="/galeria" element={<Galeria/>}/>
        <Route exact path="/contacto" element={<Contacto/>}/>
        <Route exact path="*" element={<Error404/>}/>
        <Route path="/servicio/:amenities" element={<DetallesAminities/>} />
        <Route exact path="/habitaciones" element={<RoomsSection/>}/>
        <Route exact path="/quienes-somos" element={<QuienesSomos/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
)

}

export default App;

