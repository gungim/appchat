import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1/messages";

const getMessages = async (id, page) => {
  return await axios
    .get(`${API_URL}/${id}?page=${page}`, { headers: authHeader() })
    .then((res) => {
      return res.data;
    });
};
const sendMessage = async (message) => {
  return await axios.post(`${API_URL}`, message).then((res) => {
    return res.data;
  });
};

export default { getMessages, sendMessage };
