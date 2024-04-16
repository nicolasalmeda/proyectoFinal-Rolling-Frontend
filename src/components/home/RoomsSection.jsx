import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Menu, Dropdown } from "antd";
import { DownOutlined } from '@ant-design/icons';
import Roomcard from "../roomCard/Roomcard";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { getHabitaciones } from "../../Redux/actions/actions";

const RoomsSection = () => {
    const { allHabitaciones } = useSelector((state) => state.habitaciones);
    const [filteredHabitaciones, setFilteredHabitaciones] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHabitaciones());
    }, [dispatch]);

    useEffect(() => {
        setFilteredHabitaciones(allHabitaciones);
    }, [allHabitaciones]);

    const filterByType = (type) => {
        const filtered = allHabitaciones.filter((habitacion) => habitacion.tipo === type);
        setFilteredHabitaciones(filtered);
    };

    const handleResetFilter = () => {
        setFilteredHabitaciones(allHabitaciones);
    };

    const menu = (
        <Menu>
            <Menu.Item key="all" onClick={handleResetFilter}>Todos</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="individual" onClick={() => filterByType('individual')}>Individual</Menu.Item>
            <Menu.Item key="doble" onClick={() => filterByType('doble')}>Doble</Menu.Item>
            <Menu.Item key="triple" onClick={() => filterByType('triple')}>Triple</Menu.Item>
            <Menu.Item key="suite" onClick={() => filterByType('suite')}>Suite</Menu.Item>
        </Menu>
    );

    return (
        <section className="container-fluid bg-card">
            <h2 className="text-center py-3 fw-bold">Habitaciones para Todos los Gustos<br></br> Explora Nuestro Catálogo</h2>
            <div className="row">
                <div className="col-12">
                    <div className="filter-section">
                        <h4>Filtro</h4>
                        <Dropdown overlay={menu} placement="bottomLeft">
                            <Button className="filter-button" type="primary">
                            Catálogo de Habitaciones <DownOutlined />
                            </Button>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <div className="row">
                {filteredHabitaciones.map((habitacion) => (
                    <Roomcard
                        key={habitacion._id}
                        imagen={habitacion.imagen}
                        tipo={habitacion.tipo}
                        descripcion={habitacion.descripcion}
                        precio={habitacion.precio}
                    />
                ))}
            </div>
        </section>
    );
};

export default RoomsSection;
 