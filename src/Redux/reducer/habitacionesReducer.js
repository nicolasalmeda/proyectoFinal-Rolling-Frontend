import {
  GET_HABITACIONES,
  DELETE_HABITACION,
  ADD_HABITACION,
  UPDATE_HABITACION,
  GET_HABITACION,
  HABITACIONES_ERROR,
} from '../actions/actions';

const initialState = {
  habitaciones: [],
  allHabitaciones: [],
  habitacion: [],
  error: null,
};



const habitacionesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HABITACIONES:
            return {
                ...state,
                habitaciones: action.payload.habitaciones,
                allHabitaciones: action.payload.habitaciones,
                error: null,
            }
          
        case GET_HABITACION:
          return {
            ...state,
            habitacion: action.payload,
            error: null,
          }
        
        case DELETE_HABITACION:
          return {
            ...state,
            habitaciones: state.habitaciones.filter(habitacion => habitacion._id !== action.payload),
            allHabitaciones: state.allHabitaciones.filter(habitacion => habitacion._id !== action.payload),
            error: null,
          }

        case ADD_HABITACION:
          return {
            ...state,
            habitaciones: [...state.habitaciones, action.payload],
            allHabitaciones: [...state.allHabitaciones, action.payload],
            error: null,
          }

        case UPDATE_HABITACION:
          return {
            ...state,
            habitaciones: state.habitaciones.map(habitacion => habitacion._id === action.payload._id ? action.payload : habitacion),
            allHabitaciones: state.allHabitaciones.map(habitacion => habitacion._id === action.payload._id ? action.payload : habitacion),
            error: null,
          }

        case HABITACIONES_ERROR:
          return {
            ...state,
            error: action.payload,
          }

        default:
            return state
    }
}

export default habitacionesReducer;