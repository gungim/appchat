import axios from "axios";
const API_URL = "http://localhost:8080/api/v1";

export const selectedChannelId = (guildId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_URL}/default-channel/${guildId}`);
    dispatch({ type: "FETCH_DEFAULT_CHANNELID", payload: data });
  } catch (e) {
    console.log(e);
  }
};
