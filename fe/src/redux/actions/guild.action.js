import guildService from '../services/guild.service';
import { guildConstants } from '../constants';

export const getAllGuild = (userId) => async (dispatch) => {
  try {
    const data = await guildService.getAllGuild(userId);
    dispatch({
      type: guildConstants.GET_ROOMS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    console.log(e);
    dispatch({ type: guildConstants.GET_ROOMS_FAILURE });
  }
};

export const getGuild = (id) => async (dispatch) => {
  try {
    const data = await guildService.getGuild(id);
    dispatch({
      type: guildConstants.GET_GUILD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: guildConstants.GET_GUILD_FAILURE });
  }
};

export const createGuild = (guild) => async (dispatch) => {
  return guildService.createGuild(guild).then(
    (data) => {
      dispatch({
        type: guildConstants.CREATE_GUILD_SUCCESS,
        payload: { data },
      });
      return Promise.resolve();
    },
    (e) => {
      console.log(e);
      dispatch({ type: guildConstants.CREATE_GUILD_FAILURE });

      return Promise.reject();
    }
  );
};
