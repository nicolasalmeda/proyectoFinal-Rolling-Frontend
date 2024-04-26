import './HomeStyle.css'
import DetailsHotel from './detailsHotel/DetailsHotel';
import Amenities from './animities/Amenities';
import Presentacion1 from './Presentacion1';
import Ofertas from './Ofertas';

const Home = () => {
    
    return (
        <div className="container-home">
            <div className="banner-home">
            </div>
            <h1 className='tittle-home'> Bienvenidos al Hotel</h1>
                <h3 className='subtittle-home'>Descubre el confort de nuestras habitaciones.<br/>
                Tu oasis de tranquilidad te espera.</h3>  
                {/* <Ofertas/> */}
                <DetailsHotel/>
                <div className='banner-2-home'>
                    <p>Hospitalidad sin igual en un entorno exclusivo</p>
                  </div>
                <div> <h2 className='text-center'>Amenities del hotel</h2></div>
                <Amenities></Amenities>
                <Presentacion1/>            
        </div>
    );
};

export default Home;