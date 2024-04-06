export const GET_HABITACIONES = 'GET_HABITACIONES';
export const DELETE_HABITACION = 'DELETE_HABITACION';
export const ADD_HABITACION = 'ADD_HABITACION';
export const UPDATE_HABITACION = 'UPDATE_HABITACION';

const URI = import.meta.env.VITE_API_URI;

export const getHabitaciones = () => {
    return async (dispatch) => {
      try {
        const response = await fetch(`${URI}/habitaciones`);
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

  export const deleteHabitacion = (id) => {
    return async (dispatch) => {
      try {
        await fetch(`${URI}/habitaciones/${id}`, {
          method: 'DELETE',
        });
        dispatch({
          type: DELETE_HABITACION,
          payload: id,
        });
      } catch (error) {
          dispatch({
          type: DELETE_HABITACION,
          payload: error.message
        });
      }
    };
  }

  export const addHabitacion = (habitacion) => {
    return async (dispatch) => {
      try {
        await fetch(`${URI}/habitaciones`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(habitacion),
        });
        dispatch({
          type: ADD_HABITACION,
          payload: habitacion,
        });
      } catch (error) {
        dispatch({
          type: ADD_HABITACION,
          payload: error.message
        });
      }
    };
  }

  export const updateHabitacion = (id, habitacion) => {
    return async (dispatch) => {
      try {
        await fetch(`${URI}/habitaciones/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(habitacion),
        });
        dispatch({
          type: UPDATE_HABITACION,
          payload: {
            id,
            habitacion,
          },
        });
      } catch (error) {
        dispatch({
          type: UPDATE_HABITACION,
          payload: error.message
        });
      }
    };
  }