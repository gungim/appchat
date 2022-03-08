import friendsServices from "../services/friends.services";
import { friendConstans } from "../constants";

export const getAllFriend = (id) => async (dispatch) => {
  return friendsServices.getAllFriend(id).then(
    (data) => {
      dispatch({
        type: friendConstans.GET_FRIENDS_SUCCESS,
        payload: { friends: data },
      });
      return Promise.resolve();
    },
    (e) => {
      console.log(e);
      dispatch({ type: friendConstans.GET_FRIENDS_FAILURE });
      return Promise.reject();
    }
  );
};
