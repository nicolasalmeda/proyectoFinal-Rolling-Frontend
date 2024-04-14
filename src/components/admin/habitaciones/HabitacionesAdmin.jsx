import React, {useEffect, useState} from 'react'
import {Button,Space, Table, Tag, Modal, notification} from 'antd'
import { getHabitaciones,deleteHabitacion } from '../../../Redux/actions/actions';
import NavAdmin from '../NavAdmin'
import ModalHabitaciones from './ModalHabitaciones'
import { useDispatch,useSelector } from 'react-redux';
import { SmileOutlined } from '@ant-design/icons';
import '../admin.css'
import './habitaciones.css'

const HabitacionesAdmin = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const dispatch = useDispatch()
  const [roomData, setRoomData] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const rooms = useSelector((state) => state.habitaciones.habitaciones)

  const mappedRooms = rooms && Array.isArray(rooms) ? rooms.map(room => ({
    ...room,
    key: room._id
  })) : [];

  useEffect(() => {
    dispatch(getHabitaciones())
  }, [dispatch])

  const handleAddRoomClick = () => {
    setModalVisible(true)
    setIsEdit(false)
    setRoomData({})
  }

  const handleModalCancel = () => {
    setModalVisible(false)
  };

  const Columns = [
    { 
      title: 'Número de Habitacion',
      dataIndex: 'numero',
    },
    {
      title: 'Descripción',
      dataIndex: 'descripcion',
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
    },
    {
      title: 'Precio',
      dataIndex: 'precio',
    },
    {
      title: 'Estado',
      dataIndex: 'disponibilidad',
      render: (disponiblidad) => (
        <Tag color={disponiblidad === 'disponible' ? 'green' : 'red'}>{disponiblidad}</Tag>
      ),
      width: 150,
      align: 'center',
      },
    {
      title: 'Acciones',
      dataIndex: 'Acciones',
      render: (text, record) => (
        <Space size="small">
          <Button type='primary' 
          ghost
          onClick={() =>showModal(record)}
          >
            Editar
          </Button>
          <Button
            danger
            onClick={() => {
              Modal.confirm({
                title: 'Eliminar habitación',
                content: `¿Está seguro que quiere eliminar la habitación ${record.numero}?`,
                okText: 'Eliminar',
                okType: 'danger',
                onOk() {
                  dispatch(deleteHabitacion(record._id))
                  openNotification(record.numero)
                  dispatch(getHabitaciones())
                },
                footer: (_, { OkBtn, CancelBtn }) => (
                  <>
                    <CancelBtn />
                    <OkBtn type="primary" danger >Eliminar</OkBtn>
                  </>
                ),
              });
            }}
          >
            Eliminar
          </Button>
        </Space>
      ),
      width: 150,
    }
  ]

  const showModal = (record) => {
    setRoomData(record)
    setModalVisible(true)
    setIsEdit(true)
  }

  const handleCancel = () =>{
    setModalVisible(false)
  }

  const openNotification = (numero) => {
    notification.success({
      message: 'Habitación eliminada',
      description:
      `La habitacion ${numero} ha sido eliminada correctamente`,
      icon: (
        <SmileOutlined
          style={{
            color: '#00dc00',
          }}
        />
      ),
    });
  };

  return (
    <div className=' mainContainer background__color--header room__container w-100'>
      <NavAdmin />
      <div className='background__color d-flex flex-grow-1 mb-2 m-4 rounded p-4'>
        <div className='d-flex flex-column w-100'>
          <h3 className='w-100 text-center'>Panel de Habitaciones</h3>
          <div className='d-flex justify-content-end w-100'>
            <Button className='my-4' type='primary' onClick={handleAddRoomClick}>Agregar Habitacion</Button>
          </div>
            <Table
              className='table__container'
              columns={Columns}
              dataSource={mappedRooms}
              responsive
              bordered
              size='middle'
              scroll={{
                x: 1000,
              }}
            />
            <ModalHabitaciones
            open={modalVisible}
            initialValues={roomData}
            onCancel={handleCancel}
            isEdit={isEdit} />
            </div>
        </div> 
      </div>
  )
}

export default HabitacionesAdmin