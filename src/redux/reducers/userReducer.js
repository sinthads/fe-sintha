const INITIAL_STATE = {
  isLogin: false,
  loading: false,
  error: '',
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_START':
      return {
        ...state,
        loading: true,
      };
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isLogin: true,
        loading: false,
      };
    case 'USER_LOGIN_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'USER_REGISTER_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isLogin: true,
        loading: false,
      };
    case 'USER_REGISTER_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'USER_LOGOUT':
      return INITIAL_STATE;

    default:
      return state;
  }
};
