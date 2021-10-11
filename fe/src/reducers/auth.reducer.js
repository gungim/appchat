import { userConstants } from "../constants";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: payload.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        user: null,
      };
    case userConstants.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: null,
      };
    case userConstants.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: payload.user,
      };
    case userConstants.UPDATE_USER_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default auth;
