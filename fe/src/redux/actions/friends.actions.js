import friendsServices from "../services/friends.services";
import { friendConstans } from "../constants";

export const getAllFriend = () => async (dispatch) => {
  try {
    const data = await friendsServices.getAllFriend();
    dispatch({
      type: friendConstans.GET_FRIENDS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: friendConstans.GET_FRIENDS_FAILURE });
  }
};

// export const addFiend = ()=>
