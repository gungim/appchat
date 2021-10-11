import { userConstants } from "../constants";

const initialState = [];

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userConstants.GET_USER_SUCCESS:
      return {
        ...state,
        friend: payload.friend,
      };
    case userConstants.GET_USER_FAILURE:
      return {
        ...state,
        friend: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
