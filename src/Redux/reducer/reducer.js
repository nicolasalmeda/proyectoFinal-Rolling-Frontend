import {
  GET_HABITACIONES
} from '../actions/actions';

const initialState = {
  habitaciones: [],
  allHabitaciones: [],
};



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HABITACIONES:
            return {
                ...state,
                habitaciones: action.payload.habitaciones,
                allHabitaciones: action.payload.habitaciones,
                error: null,
            }

        default:
            return state
    }
}

export default reducer;
