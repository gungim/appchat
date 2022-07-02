import axios from "axios";
const API_URL = "http://localhost:8080/api/v1/discover-guild";

const searchDiscover = async (searchKey, page, limit) => {
  return await axios
    .get(`${API_URL}?query=${searchKey}&offset=${page}&limit=${limit}`)
    .then((res) => {
      return res.data;
    });
};

export default {
  searchDiscover,
};
