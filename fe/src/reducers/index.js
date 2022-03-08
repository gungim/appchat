import { combineReducers } from "redux";
import auth from "./auth.reducer";
import conversations from "./conversations.reducer";
import user from "./user.reducer";
import messages from "./messages.ruducer";
import channels from "./channel.reducer";
import conversation from "./conversation.reducer";
import friends from "./friends.reducer";
import discover from "./search.reducer";
import members from "./members.reducer";

export default combineReducers({
  auth,
  conversations,
  channels,
  conversation,
  friends,
  discover,
  members,
  user,
  messages,
});
