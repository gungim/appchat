import axios from "axios";

import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/v1/members";

const getAllMember = async (conversationId) => {
  return await axios.get(`${API_URL}/${conversationId}`).then((res) => {
    return res.data;
  });
};

export default {
  getAllMember,
};
