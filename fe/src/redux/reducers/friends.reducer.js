import { friendConstans } from '../constants';
const initialState = {
  loading: true,
};

const friends = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case friendConstans.GET_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: payload,
        loading: false,
      };
    case friendConstans.GET_FRIENDS_FAILURE:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default friends;
