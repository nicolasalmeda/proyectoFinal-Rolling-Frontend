import React from 'react'
import { Carousel } from 'antd';
import { Container } from 'react-bootstrap';

const Galeria = () => {
  const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <div className='mainContainer backgound__color--error py-4'>
      <Container className='d-flex flex-column'>
          <h3 className='mx-3 display-4 border-bottom my-3'>Habitaciones Suites</h3>
          <Carousel autoplay className='d-flex justify-content-center' >
            <div className='rounded d-flex justify-content-center'>
              <img className='img-fluid w-75 rounded' src='https://images.squarespace-cdn.com/content/v1/600b53d0d5ef08628d370b52/1615242947635-MM80JLHCZ9AT7BB9012W/HOTEL+DE+LUJO.jpg' style={contentStyle} alt='suite one'></img>
            </div>
            <div className='rounded d-flex justify-content-center'>
              <img className='img-fluid w-75 rounded' src='https://www.swissotel.com/assets/0/92/2119/2178/2217/2219/6442451722/abf2eb84-20b1-4f96-a262-bd3e4f26b7e5.jpg' style={contentStyle} alt='suite one'></img>
            </div>
            <div className='rounded d-flex justify-content-center'>
              <img className='img-fluid w-75 rounded' src='https://www.palladiohotelbuenosaires.com/wp-content/uploads/sites/7/2021/11/palladio_hotel_mgallery_rooms_slide_01-2200x1200.jpg' style={contentStyle} alt='suite one'></img>
            </div>
            <div className='rounded d-flex justify-content-center'>
              <img className='img-fluid w-75 rounded' src='https://www.broadway-suites.com.ar/assets/cache/uploads/fotos-2023/habitaciones/corner-suites/2000x1080/habitacion-doble-cama-matrimonio-bano-banera-toallas-sillon-television-telefono-ventana-hotel-broadway-buenos-aires-argentina-1687417000.jpg' style={contentStyle} alt='suite one'></img>
            </div>
          </Carousel>
          <h3 className='mx-3 display-4 border-bottom my-3'> Habitaciones Triples</h3>
          <Carousel autoplay>
            <div className='rounded d-flex justify-content-center'>
              <img className='img-fluid w-75 rounded' src='https://hotelflamingoinn.com.mx/wp-content/uploads/2021/05/habitacion-ejecuiva-triple.jpg' style={contentStyle} alt='suite one'></img>
            </div>
            <div className='rounded d-flex justify-content-center'>
              <img className='img-fluid w-75 rounded' src='https://www.hotelabelux.com/themes/demo/assets/images/triple.jpg' style={contentStyle} alt='suite one'></img>
            </div>
            <div className='rounded d-flex justify-content-center'>
              <img className='img-fluid w-75 rounded' src='https://www.hotelsanbara.com/uploads/imagenes/habitaciones/habitacion_triple_1.jpg' style={contentStyle} alt='suite one'></img>
            </div>
            <div className='rounded d-flex justify-content-center'>
              <img className='img-fluid w-75 rounded' src='https://images.mirai.com/INFOROOMS/80462941/4VrR8TGkbxaR2XOZWYj6/4VrR8TGkbxaR2XOZWYj6_original.jpg' style={contentStyle} alt='suite one'></img>
            </div>
          </Carousel>
          <h3 className='mx-3 display-4 border-bottom my-3'> Habitaciones Dobles</h3>
          <Carousel autoplay>
              <div className='rounded d-flex justify-content-center'>
                <img className='img-fluid w-75 rounded' src='https://i.pinimg.com/originals/d0/6a/4a/d06a4a531480ba3cf0298b59918ae316.jpg' style={contentStyle} alt='suite one'></img>
              </div>
              <div className='rounded d-flex justify-content-center'>
                <img className='img-fluid w-75 rounded' src='https://www.hotelabelux.com/themes/demo/assets/images/doble.jpg' style={contentStyle} alt='suite one'></img>
              </div>
              <div className='rounded d-flex justify-content-center'>
                <img className='img-fluid w-75 rounded' src='https://www.hotelbristol.com.ar/assets/cache/uploads/0-fotos-web-2023/habitaciones/1920x1036/cama-doble-vistas-obelisco-habitacion-superior-matrimonio-hotel-bristol-buenos-aires-1685543507.jpg' style={contentStyle} alt='suite one'></img>
              </div>
              <div className='rounded d-flex justify-content-center'>
                <img className='img-fluid w-75 rounded' src='https://www.stanzahotel.com/wp-content/uploads/2023/10/habitacion_Doble_8.jpg' style={contentStyle} alt='suite one'></img>
              </div>
          </Carousel>
            <h3 className='mx-3 display-4 border-bottom my-3'> Habitaciones Individuales</h3>
            <Carousel autoplay>
              <div className='rounded d-flex justify-content-center'>
                <img className='img-fluid w-75 rounded' src='https://i.pinimg.com/originals/d0/6a/4a/d06a4a531480ba3cf0298b59918ae316.jpg' style={contentStyle} alt='suite one'></img>
              </div>
              <div className='rounded d-flex justify-content-center'>
                <img className='img-fluid w-75 rounded' src='https://images.mirai.com/INFOROOMS/10030559/NzLXA8mGnfQhLUeZXSKJ/NzLXA8mGnfQhLUeZXSKJ_large.jpg' style={contentStyle} alt='suite one'></img>
              </div>
              <div className='rounded d-flex justify-content-center'>
                <img className='img-fluid w-75 rounded' src='https://www.hotelabelux.com/themes/demo/assets/images/individual.jpg' style={contentStyle} alt='suite one'></img>
              </div>
              <div className='rounded d-flex justify-content-center'>
                <img className='img-fluid w-75 rounded' src='https://www.hotelavenida.com/wp-content/uploads/sites/328/2022/08/INDIVIDUAL.jpg' style={contentStyle} alt='suite one'></img>
              </div>
          </Carousel>
    </Container>
  </div>
  )
}

export default Galeria