import conversationService from '../services/conversations.service';
import { conversationConstants } from '../constants';

export const getAllGuild = (userId) => async (dispatch) => {
  return conversationService.getAllGuild(userId).then(
    (data) => {
      dispatch({
        type: conversationConstants.GET_ROOMS_SUCCESS,
        payload: { conversations: data },
      });
      return Promise.resolve();
    },
    (e) => {
      console.log(e);
      dispatch({ type: conversationConstants.GET_ROOMS_FAILURE });
      return Promise.reject();
    }
  );
};

export const getGuild = (id) => async (dispatch) => {
  return conversationService.getGuild(id).then(
    (data) => {
      dispatch({
        type: conversationConstants.GET_CONVERSATION_SUCCESS,
        payload: { conversation: data },
      });

      return Promise.resolve();
    },
    (e) => {
      console.log(e);
      dispatch({ type: conversationConstants.GET_ROOMS_FAILURE });
      return Promise.reject();
    }
  );
};

export const createGuild = (conversation) => async (dispatch) => {
  return conversationService.createGuild(conversation).then(
    (data) => {
      dispatch({
        type: conversationConstants.CREATE_CONVERSATION_SUCCESS,
        payload: { conversation: data },
      });
      return Promise.resolve();
    },
    (e) => {
      console.log(e);
      dispatch({ type: conversationConstants.CREATE_CONVERSATION_FAILURE });

      return Promise.reject();
    }
  );
};
