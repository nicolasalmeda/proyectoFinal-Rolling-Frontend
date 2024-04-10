import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import habitacionesReducer from '../reducer/reducer';
import usuarioReducer from '../reducer/usuarioReducer'; 

const rootReducer = combineReducers({
    habitaciones: habitacionesReducer,
    usuario: usuarioReducer 
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
