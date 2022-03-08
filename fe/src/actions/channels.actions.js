import { channelConstants } from "../constants";
import channelServices from "../services/channel.services";

export const getAllChannel = (id) => async (dispatch) => {
  return channelServices.getAllChannel(id).then(
    (data) => {
      dispatch({
        type: channelConstants.GET_ALL_CHANNEL_SUCCESS,
        payload: { channels: data },
      });
      return Promise.resolve();
    },
    (e) => {
      console.log(e);
      dispatch({
        type: channelConstants.GET_ALL_CHANNEL_FAILURE,
      });
      return Promise.reject();
    }
  );
};

export const createChannel = (channel) => async (dispatch) => {
  return channelServices.createChannel(channel).then(
    (data) => {
      dispatch({
        type: channelConstants.CREATE_CHANNEL_SUCCESS,
        payload: { channel: data.results },
      });
      return Promise.resolve();
    },
    (e) => {
      console.log(e);
      dispatch({ type: channelConstants.CREATE_CHANNEL_FAILURE });
      return Promise.reject();
    }
  );
};

export const updateChannel = (channel) => async (dispatch) => {
  return channelServices.updateChannel(channel).then(
    (data) => {
      dispatch({
        type: channelConstants.UPDATE_CHANNEL_SUCCESS,
        payload: { channel: data },
      });
      return Promise.resolve();
    },
    (e) => {
      console.log(e);
      dispatch({ type: channelConstants.UPDATE_CHANNEL_FAILURE });
      return Promise.reject();
    }
  );
};

export const deleteChannel = (id) => async (dispatch) => {
  return channelServices.deleteChannel(id).then(
    (data) => {
      dispatch({
        type: channelConstants.DELETE_CHANNEL_SUCCESS,
        payload: { channel: data },
      });
      return Promise.resolve();
    },
    (e) => {
      console.log(e);
      dispatch({ type: channelConstants.DELETE_CHANNEL_FAILURE });
    }
  );
};
