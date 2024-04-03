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