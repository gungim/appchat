import { guildConstants } from '../constants';

let initialState = [];

const guild = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case guildConstants.GET_GUILD_SUCCESS:
      return {
        ...state,
        guild: payload,
      };
    case guildConstants.GET_GUILD_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default guild
