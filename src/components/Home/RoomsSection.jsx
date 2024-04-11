import Roomcard from "../RoomCard/Roomcard";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'


const RoomsSection = () => {
    return (
        <section className="container">
            <h2 className="text-center">alojamiento vip </h2>
            <Roomcard/>
            <Roomcard/>
            <div></div>
            
        </section>
    );
};

export default RoomsSection;