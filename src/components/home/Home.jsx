import './HomeStyle.css'
import { Button } from 'antd';
import RoomsSection from './RoomsSection';
import DetailsHotel from './detailsHotel/DetailsHotel';
import Amenities from './animities/Amenities';

const Home = () => {
    
    return (
        <div className="container-home">
            <div className="banner-home imagen-transparente-baner">
            </div>
            <h1 className='tittle-home'>Descubre el confort de nuestras habitaciones.<br/>
                Tu oasis de tranquilidad te espera.</h1>
                <h3 className='subtittle-home'></h3>
                <Button type="primary" shape="round" className='button-home '>Reservar ahora</Button>
                <RoomsSection/>
                <DetailsHotel/>
                <div className='banner-2-home mt-4 mb-4'>
                  </div>
                <div> <h2 className='text-center'>Amenities del hotel</h2></div>
                <Amenities></Amenities>
        </div>
    );
};

export default Home;