import './HomeStyle.css'
import RoomsSection from './RoomsSection';
import DetailsHotel from './detailsHotel/DetailsHotel';
import Amenities from './animities/Amenities';


const Home = () => {
    
    return (
        <div className="container-home mainContainer backgound__color--nav pb-4">
            <div className="banner-home">
            </div>
            <h1 className='tittle-home'> Bienvenidos al Hotel</h1>
                <h3 className='subtittle-home'>Descubre el confort de nuestras habitaciones.<br/>
                Tu oasis de tranquilidad te espera.</h3>
                <DetailsHotel/>
                <div className='banner-2-home'>
                    <p>Hospitalidad sin igual en un entorno exclusivo</p>
                  </div>
                <div> <h2 className='text-center'>Amenities del hotel</h2></div>
                <Amenities></Amenities>
        </div>
    );
};

export default Home;