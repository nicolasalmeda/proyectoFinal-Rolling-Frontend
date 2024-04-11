import './HomeStyle.css'
import { Button } from 'antd';
import RoomsSection from './RoomsSection';

const Home = () => {
    return (
        <div className="container-home">
            <div className="banner-home">
            </div>
            <h1 className='tittle-home'>Descubre el confort de nuestras habitaciones.<br/>
                Tu oasis de tranquilidad te espera.</h1>
                <h3 className='subtittle-home'></h3>
                <Button type="primary" shape="round" className='button-home '>Reservar ahora</Button>
                <RoomsSection/>
        </div>
    );
};

export default Home;