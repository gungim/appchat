import { channelConstants } from '../constants'

const initialState = {}

const channels = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case channelConstants.GET_ALL_CHANNEL_SUCCESS:
      return {
        ...state,
        channels: payload.channels,
      }
    case channelConstants.GET_ALL_CHANNEL_FAILURE:
      return {
        ...state,
        channels: null,
      }
    case channelConstants.CREATE_CHANNEL_SUCCESS:
      return {
        ...state,
        channels: [...state.channels, payload.channel],
      }
    case channelConstants.CREATE_CHANNEL_FAILURE:
      return {
        ...state,
      }
    case channelConstants.UPDATE_CHANNEL_SUCCESS:
      const updateChannel = state.channels.map((c) =>
        c._id === payload.channel._id ? payload.channel : c
      )
      return {
        ...state,
        channels: updateChannel,
      }
    case channelConstants.DELETE_CHANNEL_SUCCESS:
      const deleteChannel = state.channels.filter((c) => {
        return c._id !== payload.channel._id
      })
      return {
        ...state,
        channels: deleteChannel,
      }
    default:
      return {
        ...state,
      }
  }
}

export default channels
