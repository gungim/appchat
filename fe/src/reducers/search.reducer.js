import { conversationConstants } from "../constants/conversations.constants";

const initialState = [];

const searchDiscoverReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case conversationConstants.SEARCH_CONVERSATION_SUCCESS:
      return {
        ...state,
        discover: payload.discover,
      };
    case conversationConstants.SEARCH_CONVERSATION_FAILURE:
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
