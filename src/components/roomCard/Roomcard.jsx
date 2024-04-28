import { Card } from "react-bootstrap";
import "./RoomStyle.css";
import { Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const Roomcard = ({ imagen, tipo, descripcion, precio, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  // Función para truncar la descripción a 80 caracteres
  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-5 mt-5 container-card">
      <div className="d-flex align-items-center justify-content-center">
        <div>
          <Card className=" border-0">
            <div className="card-image-container">
              <Card.Img className="card-image" src={imagen} alt="Card image" />
            </div>
            <Card.Body>
              <Card.Title className="text-uppercase font-weight-bold text-gray-700">
                Habitacion Tipo {tipo}
              </Card.Title>
              <Card.Text className="fs-3 text-gray-900">${precio}</Card.Text>
            </Card.Body>
            <Card.Footer className="border-top border-gray-300 bg-gray-100 py-3">
              <p className="text-gray-900">Características:</p>
              <Card.Text className="text-3xl text-gray-900">
                {truncateDescription(descripcion, 140)} {/* Truncate description */}
              </Card.Text>
              <Link className="nav-link" to={`/habitacion/${id}`}>
                <Button type="primary" shape="round" className="mt-auto">
                  Reservar Ahora
                </Button>
              </Link>
            </Card.Footer>
            <Button
              type="primary"
              danger
              shape="round"
              className="icon-favorit"
              style={{ backgroundColor: isFavorite ? "red" : "grey" }}
              onClick={handleFavoriteClick}
            >
              <i className="bi bi-heart"></i>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Roomcard;
