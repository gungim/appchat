import { conversationConstants } from '../constants'

const initialState = {}

const conversation = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case conversationConstants.GET_CONVERSATION_SUCCESS:
      return {
        ...state,
        conversation: payload.conversation,
      }
    case conversationConstants.GET_CONVERSATION_FAILURE:
      return {
        ...state,
        conversation: null,
      }
    default:
      return state
  }
}

export default conversation
