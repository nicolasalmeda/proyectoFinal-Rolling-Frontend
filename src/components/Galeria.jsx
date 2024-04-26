import React from 'react'
import { Carousel } from 'antd';
import { Container } from 'react-bootstrap';
import '../css/galeria.css'

const Galeria = () => {
  const contentStyle = {
    height: '40vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <div className='mainContainer background__color--galeria py-4'>
      <div className='d-flex flex-column px-4 mb-5'>
          <h3 className='display-4 my-3 title__galeria'>Habitaciones Suites</h3>
          <div className='d-flex flex-wrap'>
              <div className='d-flex text-center col-12 col-md-12 col-lg-3'>
                  <p className='parrafo__galeria px-3'>
                  La habitación Suite es el epítome del lujo y la comodidad. Diseñada para ofrecer una experiencia de hospedaje excepcional, esta espaciosa habitación combina elegancia y sofisticación en cada detalle. Con una decoración exquisita y muebles de alta calidad, la Suite cuenta con una amplia zona de estar, un lujoso baño privado y una cama king-size para garantizar un descanso supremo. Disfrute de las vistas panorámicas desde el balcón privado o relájese en la bañera de hidromasaje. La Suite es el refugio perfecto para aquellos que buscan una estancia inolvidable.
                  </p>
              </div> 
              <div className='col-12 col-md-12 col-lg-9 px-lg-5'> 
                <Carousel autoplay className='d-flex justify-content-center' >
                <div className='rounded d-flex justify-content-center'>
                  <img className='img-fluid w-100 rounded' src='https://images.squarespace-cdn.com/content/v1/600b53d0d5ef08628d370b52/1615242947635-MM80JLHCZ9AT7BB9012W/HOTEL+DE+LUJO.jpg' style={contentStyle} alt='suite one'></img>
                </div>
                <div className='rounded d-flex justify-content-center'>
                  <img className='img-fluid w-100 rounded' src='https://www.swissotel.com/assets/0/92/2119/2178/2217/2219/6442451722/abf2eb84-20b1-4f96-a262-bd3e4f26b7e5.jpg' style={contentStyle} alt='suite one'></img>
                </div>
                <div className='rounded d-flex justify-content-center'>
                  <img className='img-fluid w-100 rounded' src='https://www.palladiohotelbuenosaires.com/wp-content/uploads/sites/7/2021/11/palladio_hotel_mgallery_rooms_slide_01-2200x1200.jpg' style={contentStyle} alt='suite one'></img>
                </div>
                <div className='rounded d-flex justify-content-center'>
                  <img className='img-fluid w-100 rounded' src='https://www.broadway-suites.com.ar/assets/cache/uploads/fotos-2023/habitaciones/corner-suites/2000x1080/habitacion-doble-cama-matrimonio-bano-banera-toallas-sillon-television-telefono-ventana-hotel-broadway-buenos-aires-argentina-1687417000.jpg' style={contentStyle} alt='suite one'></img>
                </div>
              </Carousel>
              </div>
          </div>
          
          <h3 className=' display-4 my-3 title__galeria'> Habitaciones Triples</h3>
          <div className='d-flex flex-wrap'>
              <div className='d-flex text-center col-12 col-md-12 col-lg-3'>
                  <p className='parrafo__galeria px-3'>
                  Nuestra habitación Triple es ideal para grupos pequeños o familias que buscan un alojamiento cómodo y espacioso. Con una configuración inteligente que ofrece tres camas individuales o una combinación de camas dobles y sencillas, esta habitación ofrece flexibilidad para adaptarse a las necesidades de nuestros huéspedes. Decorada con un estilo moderno y acogedor, la habitación Triple cuenta con comodidades modernas y un baño privado completo. Ya sea que esté viajando con amigos o con niños, esta habitación ofrece el espacio perfecto para relajarse y descansar después de un día de exploración.
                  </p>
              </div> 
              <div className='col-12 col-md-12 col-lg-9 px-lg-5'> 
              <Carousel autoplay>
            <div className='rounded d-flex justify-content-center'>
              <img className='img-fluid w-100 rounded' src='https://hotelflamingoinn.com.mx/wp-content/uploads/2021/05/habitacion-ejecuiva-triple.jpg' style={contentStyle} alt='suite one'></img>
            </div>
            <div className='rounded d-flex justify-content-center'>
              <img className='img-fluid w-100 rounded' src='https://www.hotelabelux.com/themes/demo/assets/images/triple.jpg' style={contentStyle} alt='suite one'></img>
            </div>
            <div className='rounded d-flex justify-content-center'>
              <img className='img-fluid w-100 rounded' src='https://www.hotelsanbara.com/uploads/imagenes/habitaciones/habitacion_triple_1.jpg' style={contentStyle} alt='suite one'></img>
            </div>
            <div className='rounded d-flex justify-content-center'>
              <img className='img-fluid w-100 rounded' src='https://images.mirai.com/INFOROOMS/80462941/4VrR8TGkbxaR2XOZWYj6/4VrR8TGkbxaR2XOZWYj6_original.jpg' style={contentStyle} alt='suite one'></img>
            </div>
          </Carousel>
              </div>
          </div>
          <h3 className='display-4 my-3 title__galeria'> Habitaciones Dobles</h3>
          <div className='d-flex flex-wrap'>
              <div className='d-flex text-center col-12 col-md-12 col-lg-3'>
                  <p className='parrafo__galeria px-3'>
                  La habitación Doble es un oasis de tranquilidad y confort para parejas y viajeros individuales. Con una elegante decoración y un ambiente acogedor, esta habitación ofrece una cama king-size o dos camas individuales para garantizar un descanso reparador. Disfrute de las comodidades modernas, como TV de pantalla plana, minibar y acceso a Internet de alta velocidad. El baño privado cuenta con todas las comodidades necesarias, incluida una ducha de lluvia rejuvenecedora. Ya sea que esté aquí por negocios o por placer, la habitación Doble ofrece el espacio perfecto para relajarse y recargar energías.
                  </p>
              </div> 
              <div className='col-12 col-md-12 col-lg-9 px-lg-5'> 
              <Carousel autoplay>
              <div className='rounded d-flex justify-content-center'>
                <img className='img-fluid w-100 rounded' src='https://i.pinimg.com/originals/d0/6a/4a/d06a4a531480ba3cf0298b59918ae316.jpg' style={contentStyle} alt='suite one'></img>
              </div>
              <div className='rounded d-flex justify-content-center'>
                <img className='img-fluid w-100 rounded' src='https://www.hotelabelux.com/themes/demo/assets/images/doble.jpg' style={contentStyle} alt='suite one'></img>
              </div>
              <div className='rounded d-flex justify-content-center'>
                <img className='img-fluid w-100 rounded' src='https://www.hotelbristol.com.ar/assets/cache/uploads/0-fotos-web-2023/habitaciones/1920x1036/cama-doble-vistas-obelisco-habitacion-superior-matrimonio-hotel-bristol-buenos-aires-1685543507.jpg' style={contentStyle} alt='suite one'></img>
              </div>
              <div className='rounded d-flex justify-content-center'>
                <img className='img-fluid w-100 rounded' src='https://www.stanzahotel.com/wp-content/uploads/2023/10/habitacion_Doble_8.jpg' style={contentStyle} alt='suite one'></img>
              </div>
          </Carousel>
              </div>
          </div>    
            <h3 className=' display-4 my-3 title__galeria'> Habitaciones Individuales</h3>
            <div className='d-flex flex-wrap'>
              <div className='d-flex text-center col-12 col-md-12 col-lg-3'>
                  <p className='parrafo__galeria px-3'>
                  La habitación Individual es perfecta para aquellos que viajan solos y buscan un espacio cómodo y acogedor para su estancia. Con una cama individual y comodidades modernas, esta habitación ofrece todo lo que necesita para una estancia confortable. La decoración sencilla y elegante crea un ambiente tranquilo y relajante, mientras que el baño privado completo garantiza comodidad y conveniencia. Disfrute de una noche de descanso reparador y despierte renovado y listo para explorar todo lo que nuestro hotel y la ciudad tienen para ofrecer.
                  </p>
              </div> 
              <div className='col-12 col-md-12 col-lg-9 px-lg-5'> 
              <Carousel autoplay>
              <div className='rounded d-flex justify-content-center'>
                <img className='img-fluid w-100 rounded' src='https://i.pinimg.com/originals/d0/6a/4a/d06a4a531480ba3cf0298b59918ae316.jpg' style={contentStyle} alt='suite one'></img>
              </div>
              <div className='rounded d-flex justify-content-center'>
                <img className='img-fluid w-100 rounded' src='https://images.mirai.com/INFOROOMS/10030559/NzLXA8mGnfQhLUeZXSKJ/NzLXA8mGnfQhLUeZXSKJ_large.jpg' style={contentStyle} alt='suite one'></img>
              </div>
              <div className='rounded d-flex justify-content-center'>
                <img className='img-fluid w-100 rounded' src='https://www.hotelabelux.com/themes/demo/assets/images/individual.jpg' style={contentStyle} alt='suite one'></img>
              </div>
              <div className='rounded d-flex justify-content-center'>
                <img className='img-fluid w-100 rounded' src='https://www.hotelavenida.com/wp-content/uploads/sites/328/2022/08/INDIVIDUAL.jpg' style={contentStyle} alt='suite one'></img>
              </div>
          </Carousel>
              </div>
          </div>
    </div>
  </div>
  )
}

export default Galeria