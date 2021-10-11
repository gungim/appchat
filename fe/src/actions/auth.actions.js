import { userConstants } from "../constants/";
import authService from "../services/auth.service";

export const login = (user) => async (dispatch) => {
  return authService.login(user).then(
    (data) => {
      dispatch({
        type: userConstants.LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    () => {
      dispatch({ type: userConstants.LOGIN_FAILURE });
      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  authService.logout();
  dispatch({
    type: userConstants.LOGOUT,
  });
};

export const updateUser = (user) => async (dispatch) => {
  return authService.updateUser(user).then(
    (data) => {
      dispatch({
        type: userConstants.UPDATE_USER_SUCCESS,
        payload: { user: data },
      });
      return Promise.resolve();
    },
    (e) => {
      console.log(e);
      dispatch({ type: userConstants.UPDATE_USER_FAILURE });
      return Promise.reject();
    }
  );
};
