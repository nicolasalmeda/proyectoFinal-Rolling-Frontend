import axios from 'axios';
const URI = import.meta.env.VITE_API_URI;
axios.defaults.baseURL=URI;
export const GET_HABITACIONES = 'GET_HABITACIONES';
export const DELETE_HABITACION = 'DELETE_HABITACION';
export const ADD_HABITACION = 'ADD_HABITACION';
export const UPDATE_HABITACION = 'UPDATE_HABITACION';
export const GET_HABITACION= 'GET_HABITACION';
export const HABITACIONES_ERROR = 'HABITACIONES_ERROR';


//HABITACIONES
export const getHabitaciones = () => {
    return async (dispatch) => {
        try{
            const response = await axios.get('/habitaciones');
            dispatch({
                type: GET_HABITACIONES,
                payload: {
                    habitaciones: response.data,
                    allHabitaciones: response.data
                }
            });
        } catch (error) {
            dispatch({
                type: HABITACIONES_ERROR,
                payload: error.message
            });
        }
    }
}

export const getHabitacion = (id) => {
    return async (dispatch) => {
        try{
            const response = await axios.get(`/habitaciones/${id}`);
            dispatch({
                type: GET_HABITACION,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: HABITACIONES_ERROR,
                payload: error.message
            });
        }
    }
}

export const deleteHabitacion = (id,token) => {
    return async (dispatch) => {
        try {
            await axios.delete(`/habitaciones/${id}`,{
                headers: {
                'x-token': token
                },
            });
            dispatch({
                type: DELETE_HABITACION,
                payload: id
            });
        } catch (error) {
            dispatch({
                type: HABITACIONES_ERROR,
                payload: error.message
            });
        }
    };
};

export const addHabitacion = (habitacion, token) => {
    return async (dispatch) => {
        try {
                const response = await axios.post('/habitaciones', habitacion,{
                    headers: {
                    'x-token': token
                    },
                });
                dispatch({
                    type: ADD_HABITACION,
                    payload: response.data,
                });
                return response.data;
            }catch (error) {
                dispatch({
                    type: HABITACIONES_ERROR,
                    payload: error.message
            });
        }
    };
}

export const updateHabitacion = (id, habitacion, token) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`/habitaciones/${id}`, habitacion ,{
                headers: {
                'x-token': token
                },
            });
            dispatch({
                type: UPDATE_HABITACION,
                payload: {
                    id,
                    habitacion
                }
            });
            return response.data;
        } catch (error) {
            dispatch({
                type: HABITACIONES_ERROR,
                payload: error.message
            });
        }
    };
}

//USUARIOS

export const LOGIN_USUARIO = 'LOGIN_USUARIO';
export const GET_USUARIOS = 'GET_USUARIOS';
export const DELETE_USUARIO = 'DELETE_USUARIO';
export const ADD_USUARIO = 'ADD_USUARIO';
export const UPDATE_USUARIO = 'UPDATE_USUARIO';
export const USUARIOS_ERROR = 'USUARIOS_ERROR';

export const loginUsuario = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/login', { email, password });
            dispatch({
                type: LOGIN_USUARIO,
                payload: response.data.token
            });
            return response.data;
        } catch (error) {
            dispatch({
                type: USUARIOS_ERROR,
                payload: error.message
            });
        }
    };
};

export const getUsuarios = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('/usuarios');
        dispatch({
          type: GET_USUARIOS,
          payload: {
            usuarios: response.data,
            allUsuarios: response.data
          }
        });
      } catch (error) {
        dispatch({
          type: USUARIOS_ERROR,
          payload: error.message
        });
      }
    };
  };
  
  export const deleteUsuario = (id, token) => {
    return async (dispatch) => {
      try {
        await axios.delete(`/usuarios/${id}`,{
            headers: {
            'x-token': token
            },
        });
        dispatch({
          type: DELETE_USUARIO,
          payload: id
        });
      } catch (error) {
        dispatch({
          type: USUARIOS_ERROR,
          payload: error.message
        });
      }
    };
  };
  
  export const createUsuario = (usuario, token) => {
    return async (dispatch) => {
      try {
        const response = await axios.post('/usuarios', usuario,{
            headers: {
            'x-token': token
            },
        });
        dispatch({
          type: ADD_USUARIO,
          payload: response.data,
        });
        return response.data;
      } catch (error) {
        dispatch({
          type: USUARIOS_ERROR,
          payload: error.message
        });
      }
    };
  };
  
  export const updateUsuario = (id, usuario, token) => {
    return async (dispatch) => {
      try {
        const response = await axios.put(`/usuarios/${id}`, usuario,{
            headers: {
            'x-token': token
            },
        });
        dispatch({
          type: UPDATE_USUARIO,
          payload: {
            id,
            usuario: response.data
          }
        });
        return response.data;
      } catch (error) {
        dispatch({
          type: USUARIOS_ERROR,
          payload: error.message
        });
      }
    };
};


//RESERVAS

export const GET_RESERVAS = 'GET_RESERVAS';
export const DELETE_RESERVA = 'DELETE_RESERVA';
export const ADD_RESERVA = 'ADD_RESERVA';
export const UPDATE_RESERVA = 'UPDATE_RESERVA';
export const GET_RESERVAS_BY_HABITACION = 'GET_RESERVAS_BY_HABITACION';
export const CLEAN_STATE_FECHAS_RESERVAS = 'CLEAN_STATE_FECHAS_RESERVAS';

export const getReservas = () => {
    return async (dispatch) => {
        try{
            const response = await axios.get('/reservas');
            dispatch({
                type: GET_RESERVAS,
                payload: {
                    reservas: response.data,
                    allReservas: response.data
                }
            });
        } catch (error) {
            dispatch({
                type: 'RESERVAS_ERROR',
                payload: error.message
            });
        }
    }
}

export const deleteReserva = (id,token) => {
    return async (dispatch) => {
        try {
            await axios.delete(`/reservas/${id}`,{
                headers: {
                'x-token': token
                },
            });
            dispatch({
                type: DELETE_RESERVA,
                payload: id
            });
        } catch (error) {
            dispatch({
                type: 'RESERVAS_ERROR',
                payload: error.message
            });
        }
    };
};

export const addReserva = (reserva,token) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/reservas', reserva,{
                headers: {
                'x-token': token
                },
            });
            dispatch({
                type: ADD_RESERVA,
                payload: response.data,
            });

            return response.data;
        } catch (error) {
            dispatch({
                type: 'RESERVAS_ERROR',
                payload: error.message
            });
        }
    };
}

export const updateReserva = (id, reserva, token) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`/reservas/${id}`, reserva,{
                headers: {
                'x-token': token
                },
            });
            dispatch({
                type: UPDATE_RESERVA,
                payload: {
                    id,
                    reserva
                }
            });
            return response.data;
        } catch (error) {
            dispatch({
                type: 'RESERVAS_ERROR',
                payload: error.message
            });
        }
    };
}

export const getReservasByIdHabitacion = (id) => { 
    return async (dispatch) => {
        try{
            const response = await axios.get(`/reservas/habitacion/${id}`);            
            dispatch({
                type: GET_RESERVAS_BY_HABITACION,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: 'RESERVAS_ERROR',
                payload: error.message
            });
        }
    }
}

export const cleanStateFechaReservas = () => {
    return async (dispatch) => {
        dispatch({
            type: 'CLEAN_STATE_FECHAS_RESERVAS',
            payload: []
        });
    }
}

  
