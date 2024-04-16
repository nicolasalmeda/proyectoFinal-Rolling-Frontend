
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import './App.css'
import Contacto from "./components/Contacto.jsx";

function App() {

  return (
  <Provider store={store}>
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<div className="mainContainer">
          <h1>pagina funcionando</h1> 
          </div>}/>
        <Route exact path="/admin" element={<LayoutAdmin/>}/>
        <Route exact path="/admin/habitaciones" element={<HabitacionesAdmin/>} />
        <Route exact path="/admin/reservas" element={<ReservaAdmin/>} />
        <Route exact path="/admin/usuarios" element={<UsuariosAdmin/>} />
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/registro" element={<Registro/>}/>
        <Route exact path='/habitacion/:id' element={<Detalle/>}/>
        <Route exact path="/contacto" element={<Contacto/>}/>
        <Route exact path="*" element={<Error404/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </Provider>
)

}

export default App;

