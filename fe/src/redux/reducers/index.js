import { combineReducers } from "redux";
import auth from "./auth.reducer";
import guilds from "./guilds.reducer";
import user from "./user.reducer";
import messages from "./messages.ruducer";
import channels from "./channel.reducer";
import friends from "./friends.reducer";
import discover from "./search.reducer";
import members from "./members.reducer";
import guild from "./guild.reducer"

export default combineReducers({
  auth,
  channels,
  guilds,
  guild,
  friends,
  discover,
  members,
  user,
  messages,
});
