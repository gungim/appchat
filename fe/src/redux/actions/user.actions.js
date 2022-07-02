import { userConstants } from "../constants";
import userServices from "../services/user.services";

export const getFriend = (id) => async (dispatch) => {
  return userServices.getFriend(id).then(
    (data) => {
      dispatch({
        type: userConstants.GET_USER_SUCCESS,
        payload: { friend: data },
      });
      return Promise.resolve();
    },
    () => {
      dispatch({ type: userConstants.GET_USER_FAILURE });
      return Promise.reject();
    }
  );
};
