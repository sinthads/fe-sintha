import axios from 'axios';
import Swal from 'sweetalert2';
import { reqres_api } from '../../helper';

const URL = reqres_api;

// USER LOGIN
export const userLoginAction = (data, navigate) => {
  return async (dispatch) => {
    dispatch({
      type: 'USER_START',
    });
    try {
      const response = await axios.post(`${URL}/login`, data);
      dispatch({
        type: 'USER_LOGIN_SUCCESS',
        payload: response.data,
      });
      navigate('/');
    } catch (err) {
      dispatch({
        type: 'USER_LOGIN_FAILED',
        payload: err.message,
      });
      Swal.fire('User Not Found', '', 'error');
    }
  };
};

// USER REGISTER
export const userRegisterAction = (data, navigate) => {
  return async (dispatch) => {
    dispatch({
      type: 'USER_START',
    });
    try {
      const response = await axios.post(`${URL}/register`, data);
      dispatch({
        type: 'USER_REGISTER_SUCCESS',
        payload: response.data,
      });
      navigate('/');
    } catch (err) {
      dispatch({
        type: 'USER_REGISTER_FAILED',
        payload: err.message,
      });
      Swal.fire('Register Failed', '', 'error');
    }
  };
};

// USER LOGOUT
export const userLogoutAction = () => {
  return {
    type: 'USER_LOGOUT',
  };
};
