import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/v1';

const getMessages = async (id, page) => {
  return await axios
    .get(`${API_URL}/messages/${id}?page=${page}`, { headers: authHeader() })
    .then((res) => {
      return res.data;
    });
};
const sendMessage = async (message) => {
  console.log(message)
  return await axios
    .post(`${API_URL}/message`, message)
    .then((res) => {
      return res.data;
    });
};

export default { getMessages, sendMessage };
