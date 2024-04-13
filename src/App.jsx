import { useEffect } from 'react';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useDispatch } from "react-redux"
import { getHabitaciones } from "./Redux/actions/actions";
import Home from './components/home/Home';
import NavAdmin from './components/admin/NavAdmin';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getHabitaciones())
  }, [])
  
  return (
    <>
      <h1>Pagina Funcionando</h1>
      <NavAdmin/>
        <Home/>
    </>
  )
}

export default App