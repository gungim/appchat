import { combineReducers } from "redux";
import auth from "./auth.reducer";
import conversation from "./conversation.reducer";
import userReducer from "./user.reducer";
import messagesReducer from "./messages.ruducer";

export default combineReducers({
  auth,
  conversation,
  userReducer,
  messagesReducer,
});
