import Roomcard from "../roomCard/Roomcard";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { useSelector } from "react-redux";


const RoomsSection = () => {
    const { allHabitaciones } = useSelector((state) => state.habitaciones)

    return (
        <section className="container">
            <h2 className="text-center">alojamiento vip </h2>
            <div className="d-flex row">
                {allHabitaciones.map((habitacion) => 
                    <Roomcard key={habitacion._id} precio={habitacion.precio} imagen={habitacion.imagen} tipo={habitacion.tipo} descripcion={habitacion.descripcion}/>
                )}
            </div>
            
        </section>
    );
};

export default RoomsSection;