import { messagesContants } from '../constants/messages.contants';

const initialState = [];

const messagesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case messagesContants.GET_MESSAGE_SUCCESS:
      // if (state.messages) {
      // const list = state.messages;
      // const fetchMessageData = payload.messages;
      // const messages = list.concat(fetchMessageData);
      // return {
      // ...state,
      // messages: list,
      // };
      // } else
      // return {
      // ...state,
      // messages: payload.messages,
      // };
      return {
        ...state,
        messages: payload.messages,
      };
    case messagesContants.GET_MESSAGE_FAILURE:
      return {
        ...state,
        messages: null,
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
        messages: null,
      };
  }
};

export default messagesReducer;
