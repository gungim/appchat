import { messagesContants } from '../constants/messages.contants';

const initialState = [];

const messagesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case messagesContants.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: payload.messages,
      };
    case messagesContants.GET_MESSAGES_FAILURE:
      return {
        ...state,
      };
    case messagesContants.SEEND_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: [payload.messages, ...state.messages],
      };
    case messagesContants.SEEND_MESSAGE_FAILURE:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default messagesReducer;
