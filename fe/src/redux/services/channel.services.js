import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1/channels";

const createChannel = async (channel) => {
  return await axios.post(`${API_URL}/`, channel).then((res) => {
    console.log(res);
    return res.data;
  });
};

const getAllChannel = async (guildId) => {
  return await axios
    .get(`${API_URL}`, {
      params: { guildId },
    })
    .then((res) => {
      return res.data;
    });
};
const updateChannel = async (channel) => {
  return await axios.patch(`${API_URL}`, channel).then((res) => {
    return res.data;
  });
};

const deleteChannel = async (id) => {
  return await axios.delete(`${API_URL}/${id}`).then((res) => {
    return res.data;
  });
};

export default {
  createChannel,
  getAllChannel,
  updateChannel,
  deleteChannel,
};
