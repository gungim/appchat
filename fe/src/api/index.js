import axios from "axios";

const url = "http://localhost:3000/api/v1";

// export const login = () => axios.get(url);
export const loginUrl = (user) => axios.post(`${url}/login`, user);
