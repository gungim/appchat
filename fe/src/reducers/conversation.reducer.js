import { conversationConstants } from "../constants";

let initialState = {};

const conversation = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case conversationConstants.GET_ROOMS_SUCCESS:
      return {
        ...state,
        conversation: payload.conversation,
      };
    case conversationConstants.GET_ROOMS_FAILURE:
      return {
        ...state,
        conversation: null,
      };

    default:
      return state;
  }
};

export default conversation;
