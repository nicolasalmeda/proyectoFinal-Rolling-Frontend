import { LOGIN_USUARIO, REGISTRO_USUARIO, USUARIO_ERROR } from '../actions/actions';

const initialState = {
    token: null,
    error: null
};

const usuarioReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USUARIO:
            return {
                ...state,
                token: action.payload,
                error: null
            };
        case REGISTRO_USUARIO:
            return {
                ...state,
                token: action.payload.token,
                error: null
            };
        case USUARIO_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default usuarioReducer;