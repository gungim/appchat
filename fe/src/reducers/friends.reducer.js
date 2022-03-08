import { friendConstans } from "../constants";
const initialState = [];

const friends = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case friendConstans.GET_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: payload.friends,
      };
    case friendConstans.GET_FRIENDS_FAILURE:
      return {
        ...state,
        friends: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default friends;
