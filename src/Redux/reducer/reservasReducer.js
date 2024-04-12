import { GET_RESERVAS, DELETE_RESERVA, ADD_RESERVA, UPDATE_RESERVA, GET_RESERVAS_BY_HABITACION } from '../actions/actions';


const initialState = {
  reservas: [],
  allReservas: [],
  fechaReervas: [],
};

const reservasReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESERVAS:
      return {
        ...state,
        reservas: action.payload.reservas,
        allReservas: action.payload.reservas,
        error: null,
      };

    case DELETE_RESERVA:
      return {
        ...state,
        reservas: state.reservas.filter(reserva => reserva._id !== action.payload),
        allReservas: state.allReservas.filter(reserva => reserva._id !== action.payload),
        error: null,
      };

    case ADD_RESERVA:
      return {
        ...state,
        reservas: [...state.reservas, action.payload],
        allReservas: [...state.allReservas, action.payload],
        error: null,
      };

    case UPDATE_RESERVA:
      return {
        ...state,
        reservas: state.reservas.map(reserva => reserva._id === action.payload.id ? action.payload : reserva),
        allReservas: state.allReservas.map(reserva => reserva._id === action.payload.id ? action.payload : reserva),
        error: null,
      };

    case GET_RESERVAS_BY_HABITACION:
      return {
        ...state,
        fechasReservas: action.payload.fechasReservas,
        error: null,
      };

    default:
      return state;
  }
};

export default reservasReducer;