import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store/store";
import './index.css'
import LayoutAdmin from "./components/admin/LayoutAdmin.jsx";
import HabitacionesAdmin from "./components/admin/HabitacionesAdmin.jsx";
import ReservaAdmin from "./components/admin/ReservaAdmin.jsx";
import UsuariosAdmin from "./components/admin/UsuariosAdmin.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<LayoutAdmin />} />
        <Route path="/admin/habitaciones" element={<HabitacionesAdmin/>} />
        <Route path="/admin/reservas" element={<ReservaAdmin/>} />
        <Route path="/admin/usuarios" element={<UsuariosAdmin/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
