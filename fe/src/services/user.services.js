import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1";

const getFriend = async (id) => {
  return await axios
    .get(`${API_URL}/user?userId=${id}`, {
      headers: authHeader(),
    })
    .then((res) => {
      return res.data;
    });
};

export default {
  getFriend,
};
