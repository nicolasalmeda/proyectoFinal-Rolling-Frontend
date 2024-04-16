import { LOGIN_USUARIO, GET_USUARIOS, DELETE_USUARIO, ADD_USUARIO, UPDATE_USUARIO, USUARIOS_ERROR } from '../actions/actions';

const initialState = {
    token: null,
    error: null,
    usuarios: [],
};

const usuarioReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USUARIO:
            return {
                ...state,
                token: action.payload,
                error: null
            };
            case GET_USUARIOS:
                return {
                    ...state,
                    usuarios: action.payload.usuarios,
                    loading: false,
                    error: null
                };
            case DELETE_USUARIO:
                return {
                    ...state,
                    usuarios: state.usuarios.filter(usuario => usuario._id !== action.payload),
                    loading: false,
                    error: null
                };
            case ADD_USUARIO:
                return {
                    ...state,
                    usuarios: [...state.usuarios, action.payload],
                    loading: false,
                    error: null
                };
            case UPDATE_USUARIO:
                return {
                    ...state,
                    usuarios: state.usuarios.map(usuario =>
                        usuario._id === action.payload._id ? action.payload.usuario : usuario
                    ),
                    loading: false,
                    error: null
                };
            case USUARIOS_ERROR:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                };
            default:
                return state;
        }
    };

export default usuarioReducer;