import { guildConstants } from "../constants/guild.constants";

const initialState = [];

const searchDiscoverReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case guildConstants.SEARCH_GUILD_SUCCESS:
      return {
        ...state,
        discover: payload.discover,
      };
    case guildConstants.SEARCH_GUILD_FAILURE:
      return {
        ...state,
        discover: null,
      };
    default:
      return {
        ...state,
        discover: null,
      };
  }
};

export default searchDiscoverReducer;
