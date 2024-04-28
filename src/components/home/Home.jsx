import './HomeStyle.css'
import DetailsHotel from './detailsHotel/DetailsHotel';
import Amenities from './animities/Amenities';
import Presentacion1 from './Presentacion1';

const Home = () => {
    
    return (
        <div className="container-home mainContainer backgound__color--nav pb-4">
            <div className="banner-home">
            </div>
            <h1 className='tittle-home'> Bienvenidos  </h1>
                <h3 className='subtittle-home'><i>"Descubre el confort de nuestras habitaciones,<br/>
                tu oasis de tranquilidad te espera."</i></h3>
                <DetailsHotel/>
                <div className='banner-2-home'>
                    <p>Hospitalidad sin igual en un entorno exclusivo</p>
                  </div>
                <Amenities></Amenities>
                <Presentacion1/>            
        </div>
    );
};

export default Home;