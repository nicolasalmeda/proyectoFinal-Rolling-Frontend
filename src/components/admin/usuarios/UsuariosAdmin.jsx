import React, {useEffect, useState} from 'react'
import {Button,Space, Table, Tag, Modal, notification} from 'antd'
import { getUsuarios, deleteUsuario, createUsuario, updateUsuario } from '../../../Redux/actions/actions';
import NavAdmin from '../NavAdmin'
import { useDispatch,useSelector } from 'react-redux';
import { SmileOutlined } from '@ant-design/icons';
import '../admin.css'
import '../habitaciones/habitaciones.css'
import ModalUsuarios from './ModalUsuarios';

const HabitacionesAdmin = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const dispatch = useDispatch()
  const [usuarioData, setUsuarioData] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const usuarios = useSelector((state) => state.usuarios.usuarios)

  const mappedUsuarios = usuarios && Array.isArray(usuarios) ? usuarios.map(usuario => ({
    ...usuario,
    key: usuario._id
  })) : [];

  useEffect(() => {
    dispatch(getUsuarios())
  }, [dispatch])

  const handleAddUsuarioClick = () => {
    setModalVisible(true)
    setIsEdit(false)
    setUsuarioData({})
  }

  const handleModalCancel = () => {
    setModalVisible(false)
  };

  const Columns = [
    { 
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Nombre',
      dataIndex: 'nombre',
    },
    {
      title: 'apellido',
      dataIndex: 'apellido',
    },
    {
      title: 'Admin',
      dataIndex: 'rol',
      render: (rol) => (
        <Tag color={rol === true ? 'green' : 'red'}>{rol === true ? 'Es admin' : 'No es admin'}</Tag>
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
                title: 'Eliminar Usuario',
                content: `¿Está seguro que quiere eliminar el usuario ${record.nombre}?`,
                okText: 'Eliminar',
                okType: 'danger',
                onOk() {
                  dispatch(deleteUsuario(record._id))
                  openNotification(record.nombre)
                  dispatch(getUsuarios())
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
    setUsuarioData(record)
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
          <h3 className='w-100 text-center'>Panel de Usuarios</h3>
          <div className='d-flex justify-content-end w-100'>
            <Button className='my-4' type='primary' onClick={handleAddUsuarioClick}>Agregar Usuario</Button>
          </div>
            <Table
              className='table__container'
              columns={Columns}
              dataSource={mappedUsuarios}
              responsive
              bordered
              size='middle'
              scroll={{
                x: 1000,
              }}
            />
            <ModalUsuarios
            open={modalVisible}
            initialValues={usuarioData}
            onCancel={handleCancel}
            isEdit={isEdit} />
            </div>
        </div> 
      </div>
  )
}

export default HabitacionesAdmin