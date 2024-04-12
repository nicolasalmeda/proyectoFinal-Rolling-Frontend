import axios from 'axios';
const URI = import.meta.env.VITE_API_URI;
axios.defaults.baseURL=URI;
export const GET_HABITACIONES = 'GET_HABITACIONES';
export const DELETE_HABITACION = 'DELETE_HABITACION';
export const ADD_HABITACION = 'ADD_HABITACION';
export const UPDATE_HABITACION = 'UPDATE_HABITACION';


//HABITACIONES
export const getHabitaciones = () => {
    return async (dispatch) => {
        try{
            const response = await axios.get('/habitaciones');
            console.log(response.data)
            dispatch({
                type: GET_HABITACIONES,
                payload: {
                    habitaciones: response.data,
                    allHabitaciones: response.data
                }
            });
        } catch (error) {
            dispatch({
                type: 'HABITACIONES_ERROR',
                payload: error.message
            });
        }
    }
}

export const deleteHabitacion = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`/habitaciones/${id}`);
            dispatch({
                type: DELETE_HABITACION,
                payload: id
            });
        } catch (error) {
            dispatch({
                type: 'HABITACIONES_ERROR',
                payload: error.message
            });
        }
    };
};

export const addHabitacion = (habitacion) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/habitaciones', habitacion);
            console.log(response.data)
            dispatch({
                type: ADD_HABITACION,
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: 'HABITACIONES_ERROR',
                payload: error.message
            });
        }
    };
}

export const updateHabitacion = (id, habitacion) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`/habitaciones/${id}`, habitacion);
            dispatch({
                type: UPDATE_HABITACION,
                payload: {
                    id,
                    habitacion
                }
            });
        } catch (error) {
            dispatch({
                type: 'HABITACIONES_ERROR',
                payload: error.message
            });
        }
    };
}

//USUARIOS

export const LOGIN_USUARIO = 'LOGIN_USUARIO';
export const REGISTRO_USUARIO = 'REGISTRO_USUARIO';
export const USUARIO_ERROR = 'USUARIO_ERROR';

export const loginUsuario = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/login', { email, password });
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
            const response = await axios.post('/usuarios', datosUsuario);
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