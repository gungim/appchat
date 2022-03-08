import searchDiscoverServices from "../services/searchDiscover.services";
import { conversationConstants } from "../constants";

export const searchDiscover = (searchKey, page, limit) => async (dispatch) => {
  return searchDiscoverServices.searchDiscover(searchKey, page, limit).then(
    (data) => {
      dispatch({
        type: conversationConstants.SEARCH_CONVERSATION_SUCCESS,
        payload: { discover: data },
      });
      return Promise.resolve();
    },
    (e) => {
      console.log(e);
      dispatch({ type: conversationConstants.SEARCH_CONVERSATION_FAILURE });
      return Promise.reject();
    }
  );
};
