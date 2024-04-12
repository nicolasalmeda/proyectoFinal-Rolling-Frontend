import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import habitacionesReducer from '../reducer/habitacionesReducer';
import usuarioReducer from '../reducer/usuarioReducer'; 
import reservasReducer from '../reducer/reservasReducer';

const rootReducer = combineReducers({
    habitaciones: habitacionesReducer,
    usuario: usuarioReducer ,
    reservas: reservasReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
