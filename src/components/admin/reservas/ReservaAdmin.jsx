import React, {useEffect, useState} from 'react'
import {Button,Space, Table, Tag, Modal, notification} from 'antd'
import { getReservas,deleteReserva } from '../../../Redux/actions/actions';
import NavAdmin from '../NavAdmin'
 import ModalReservas from './ModalReservas'
import { useDispatch,useSelector } from 'react-redux';
import { SmileOutlined } from '@ant-design/icons';
import '../admin.css'
import '../habitaciones/habitaciones.css'
import { set } from 'react-hook-form';

const HabitacionesAdmin = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const dispatch = useDispatch()
  const [reservaData, setReservaData] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [token, setToken] = useState('')
  const reservas = useSelector((state) => state.reservas.reservas)

  const mappedReservas = reservas && Array.isArray(reservas) ? reservas.map(reserva => ({
    ...reserva,
    key: reserva._id
  })) : [];

  useEffect(() => {
    setToken(sessionStorage.getItem('token'))
  }, [token])

  useEffect(() => {
    dispatch(getReservas())
  }, [dispatch])

  const handleAddRoomClick = () => {
    setModalVisible(true)
    setIsEdit(false)
    setReservaData({})
  }

  const handleModalCancel = () => {
    setModalVisible(false)
  };

  const Columns = [
    {
      title: 'Numero de Reserva',
      dataIndex: 'numero_reserva',
    },
    { 
      title: 'Fecha de Entrada',
      dataIndex: 'fecha_entrada',
    },
    {
      title: 'Fecha de Salida',
      dataIndex: 'fecha_salida',
    },
    {
      title: 'Usuario',
      dataIndex: 'usuario',
    },
    {
      title: 'Habitacion',
      dataIndex: 'habitacion',
    },
    {
      title: 'Estado',
      dataIndex: 'fecha_salida',
      render: (fechaSalida) => {
        const currentDate = new Date();
        const [diaSalida, mesSalida, añoSalida] = fechaSalida.split('/');
        const salidaDate = new Date(`${mesSalida}/${diaSalida}/${añoSalida}`);
        const isExpired = salidaDate < currentDate;

        return (
          <Tag color={isExpired ? 'gray' : salidaDate === currentDate ? 'blue' : 'green'}>
            {isExpired ? 'Expirado' : 'Activo'}
          </Tag>
        );
      },
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
                title: 'Eliminar Reserva',
                content: `¿Está seguro que quiere eliminar la reserva ${record.numero_reserva}?`,
                okText: 'Eliminar',
                okType: 'danger',
                onOk() {
                  try{
                    dispatch(deleteReserva(record._id, token))
                    openNotification(record.numero_reserva)
                    dispatch(getReservas())
                  }catch(error){
                    alert('Error al eliminar la reserva')
                  }
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
    setReservaData(record)
    setModalVisible(true)
    setIsEdit(true)
  }

  const handleCancel = () =>{
    setModalVisible(false)
  }

  const openNotification = (numero) => {
    notification.success({
      message: 'Reserva eliminada',
      description:
      `La reserva ${numero} ha sido eliminada correctamente`,
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
    <div className=' mainContainer background__color--header room__container'>
      <NavAdmin />
      <div className='background__color d-flex flex-grow-1 mb-2 m-4 rounded p-4'>
        <div className='d-flex flex-column w-100'>
          <h2 className='w-100 text-center'>Panel de Reservas</h2>
          <div className='d-flex justify-content-end w-100'>
            <Button className='my-4' type='primary' onClick={handleAddRoomClick}>Agregar Reserva</Button>
          </div>
            <Table
              className='table__container'
              columns={Columns}
              dataSource={mappedReservas}
              responsive
              bordered
              size='middle'
              scroll={{
                x: 1000,
              }}
            />
            <ModalReservas
            open={modalVisible}
            initialValues={reservaData}
            onCancel={handleCancel}
            isEdit={isEdit} />
            </div>
        </div> 
      </div>
  )
}

export default HabitacionesAdmin