import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/api/v1/conversations';

const getAllGuild = async (userId) => {
  return await axios
    .get(`${API_URL}`, {
      params: { userId },
    })
    .then((res) => {
      return res.data;
    });
};

const getGuild = async (id) => {
  return await axios.get(`${API_URL}/${id}`).then((res) => {
    return res.data;
  });
};

const createGuild = async (conversation) => {
  return await axios.post(`${API_URL}`, conversation).then((res) => {
    return res.data;
  });
};

export default {
  getAllGuild,
  getGuild,
  createGuild,
};
