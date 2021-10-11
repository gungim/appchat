import axios from "axios";
import authHeader from "../services/auth-header";
const API_URL = "http://localhost:8080/api/v1/conversation";

const getConversations = async (id) => {
  return await axios
    .get(`${API_URL}/${id}`, { headers: authHeader() })
    .then((res) => {
      return res.data;
    });
};

export default {
  getConversations,
};
