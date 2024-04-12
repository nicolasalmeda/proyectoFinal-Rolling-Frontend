import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import habitacionesReducer from '../reducer/habitacionesReducer';
import usuarioReducer from '../reducer/usuarioReducer'; 

const rootReducer = combineReducers({
    habitaciones: habitacionesReducer,
    usuarios: usuarioReducer 
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
