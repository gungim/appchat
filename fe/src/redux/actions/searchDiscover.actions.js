import searchDiscoverServices from "../services/searchDiscover.services";
import { guildConstants } from "../constants";

export const searchDiscover = (searchKey, page, limit) => async (dispatch) => {
  return searchDiscoverServices.searchDiscover(searchKey, page, limit).then(
    (data) => {
      dispatch({
        type: guildConstants.SEARCH_GUILD_SUCCESS,
        payload: { discover: data },
      });
      return Promise.resolve();
    },
    (e) => {
      console.log(e);
      dispatch({ type: guildConstants.SEARCH_GUILD_FAILURE });
      return Promise.reject();
    }
  );
};
