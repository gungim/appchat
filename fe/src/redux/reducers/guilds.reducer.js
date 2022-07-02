import { guildConstants } from "../constants";

let initialState = [];

const guilds = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case guildConstants.GET_ROOMS_SUCCESS:
      return {
        ...state,
        guilds: payload,
      };
    case guildConstants.GET_ROOMS_FAILURE:
      return {
        ...state,
        guilds: [],
      };
    case guildConstants.CREATE_GUILD_SUCCESS:
      return {
        ...state,
        guilds: [...state.guilds, payload.guild],
      };
    case guildConstants.CREATE_GUILD_FAILURE:
      return state;

    default:
      return state;
  }
};



export default guilds;
