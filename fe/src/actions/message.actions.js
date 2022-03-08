import messagesServices from '../services/messages.services';
import { messagesContants } from '../constants';

export const getMessages = (id, page) => async (dispatch) => {
  return messagesServices.getMessages(id, page).then(
    (data) => {
      dispatch({
        type: messagesContants.GET_MESSAGE_SUCCESS,
        payload: { messages: data },
      });
      return Promise.resolve();
    },
    () => {
      dispatch({ type: messagesContants.GET_MESSAGE_FAILURE });
      return Promise.reject();
    }
  );
};

export const sendMessage = (message) => async (dispatch) => {
  return messagesServices.sendMessage(message).then(
    (data) => {
      dispatch({
        type: messagesContants.SEEND_MESSAGE_SUCCESS,
        payload: { messages: data },
      });
      return Promise.resolve();
    },
    () => {
      dispatch({ type: messagesContants.SEEND_MESSAGE_FAILURE });
      return Promise.reject();
    }
  );
};
