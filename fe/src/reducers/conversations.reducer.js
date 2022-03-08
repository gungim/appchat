import { conversationConstants } from "../constants";

let initialState = {};

const conversations = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case conversationConstants.GET_ROOMS_SUCCESS:
      return {
        ...state,
        conversations: payload.conversations,
      };
    case conversationConstants.GET_ROOMS_FAILURE:
      return {
        ...state,
        conversations: null,
      };
    case conversationConstants.CREATE_CONVERSATION_SUCCESS:
      return {
        ...state,
        conversations: [...state.conversations, payload.conversation],
      };
    case conversationConstants.CREATE_CONVERSATION_FAILURE:
      return state;

    default:
      return state;
  }
};

export default conversations;
