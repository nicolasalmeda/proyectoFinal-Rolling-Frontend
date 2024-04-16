
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { BrowserRouter, Routes, Route,   } from "react-router-dom";
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
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './components/home/Home';
import DetallesAminities from './components/aminitiesDetails/DetallesAminities.jsx'
import RoomsSection from "./components/home/RoomsSection.jsx";


function App() {
  
  return (
  <>
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home className="mainContainer">

          </Home>}/>
        <Route exact path="/admin" element={<LayoutAdmin/>}/>
        <Route exact path="/admin/habitaciones" element={<HabitacionesAdmin/>} />
        <Route exact path="/admin/reservas" element={<ReservaAdmin/>} />
        <Route exact path="/admin/usuarios" element={<UsuariosAdmin/>} />
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/registro" element={<Registro/>}/>
        <Route exact path='/habitacion/:id' element={<Detalle/>}/>
        <Route exact path="*" element={<Error404/>}/>
        <Route path="/servicio/:amenities" element={<DetallesAminities/>} />
        <Route exact path="/habitaciones" element={<RoomsSection/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
)

}

export default App;

