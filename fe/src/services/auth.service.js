import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1/auth";

const login = async (user) => {
  return await axios.post(`${API_URL}/login`, user).then((res) => {
    if (res.data.token) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }

    return res.data;
  });
};

const register = (username, password) => {
  return axios.post(`${API_URL}/signup`, {
    username,
    password,
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const updateUser = async (user) => {
  return await axios
    .patch(`${API_URL}/`, user, {
      headers: authHeader(),
    })
    .then((res) => {
      if (res.data.token)
        localStorage.setItem("user", JSON.stringify(res.data));
      return res.data;
    });
};

export default {
  register,
  login,
  logout,
  updateUser,
};
