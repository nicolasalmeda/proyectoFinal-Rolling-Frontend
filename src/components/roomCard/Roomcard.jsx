import { Card } from 'react-bootstrap';
import "./RoomStyle.css"
import { Button } from 'antd';

const Roomcard = ({imagen, tipo, descripcion, precio}) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-5 mt-5">
      <div className="d-flex align-items-center justify-content-center">
        <div>
          <Card className=" border-0">
            <div className="card-image-container"> 
              <Card.Img className="card-image" src={imagen} alt="Card image" />
            </div>
            <Card.Body>
              <Card.Title className="text-uppercase font-weight-bold text-gray-700">HABITACIÓN {tipo}</Card.Title>
              <Card.Text className="fs-3 text-gray-900">${precio}</Card.Text>
            </Card.Body>
            <Card.Footer className="border-top border-gray-300 bg-gray-100 py-3">
              <p className="text-gray-900">Características:</p>
              <Card.Text className="text-3xl text-gray-900">{descripcion}</Card.Text>
              <Button type="primary" shape="round" className=' '>Detalles</Button>
            </Card.Footer>
            <Button type="primary" danger shape="round" className='icon-favorit'> <i class="bi bi-heart"></i></Button>
           
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Roomcard;
