export const GET_HABITACIONES = 'GET_HABITACIONES';

export const getHabitaciones = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('http://localhost:3001/habitaciones');
        const data = await response.json();
        dispatch({
          type: GET_HABITACIONES,
          payload: {
            habitaciones: data,
          },
        })
      } catch (error) {
        dispatch({
          type: GET_HABITACIONES,
          payload: error.message
        })
      }
    }

}

//USUARIOS
import axios from 'axios';

export const LOGIN_USUARIO = 'LOGIN_USUARIO';
export const REGISTRO_USUARIO = 'REGISTRO_USUARIO';
export const USUARIO_ERROR = 'USUARIO_ERROR';

export const loginUsuario = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/login', { email, password });
            dispatch({
                type: LOGIN_USUARIO,
                payload: response.data.token
            });
        } catch (error) {
            dispatch({
                type: USUARIO_ERROR,
                payload: error.message
            });
        }
    };
};

export const registroUsuario = (datosUsuario) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/usuarios', datosUsuario);
            dispatch({
                type: REGISTRO_USUARIO,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: USUARIO_ERROR,
                payload: error.message
            });
        }
    };
};