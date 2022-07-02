import { channelConstants } from '../constants';
import channelServices from '../services/channel.services';

export const getAllChannel = (id) => async (dispatch) => {
  try {
    dispatch({ type: channelConstants.GET_ALL_CHANNEL_REQUEST });
    const data = await channelServices.getAllChannel(id);
    dispatch({
      type: channelConstants.GET_ALL_CHANNEL_SUCCESS,
      payload: { channels: data },
    });
  } catch (error) {
    dispatch({
      type: channelConstants.GET_ALL_CHANNEL_FAILURE,
    });
  }
};

export const createChannel = (channel) => async (dispatch) => {
  try {
    dispatch({ type: channelConstants.CREATE_CHANNEL_REQUEST });
    const data = await channelServices.createChannel(channel);
    dispatch({
      type: channelConstants.CREATE_CHANNEL_SUCCESS,
      payload: { channel: data.results },
    });
  } catch (error) {
    dispatch({ type: channelConstants.CREATE_CHANNEL_FAILURE });
  }
};

export const updateChannel = (channel) => async (dispatch) => {
  try {
    dispatch({ type: channelConstants.UPDATE_CHANNEL_REQUEST });
    const data = await channelServices.updateChannel(channel);
    dispatch({
      type: channelConstants.UPDATE_CHANNEL_SUCCESS,
      payload: { channel: data },
    });
  } catch (error) {
    dispatch({ type: channelConstants.UPDATE_CHANNEL_FAILURE });
  }
};

export const deleteChannel = (id) => async (dispatch) => {
  try {
    dispatch({ type: channelConstants.DELETE_CHANNEL_REQUEST });
    const data = await channelServices.deleteChannel(id);
    dispatch({
      type: channelConstants.DELETE_CHANNEL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: channelConstants.DELETE_CHANNEL_FAILURE });
  }
};
