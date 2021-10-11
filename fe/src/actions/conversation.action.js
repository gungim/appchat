import conversationService from "../services/conversation.service";
import { conversationConstants } from "../constants";

export const getConversations = (id) => async (dispatch) => {
  return conversationService.getConversations(id).then(
    (data) => {
      dispatch({
        type: conversationConstants.GET_ROOMS_SUCCESS,
        payload: { conversation: data },
      });
      return Promise.resolve();
    },
    () => {
      dispatch({ type: conversationConstants.GET_ROOMS_FAILURE });
      return Promise.reject();
    }
  );
};
