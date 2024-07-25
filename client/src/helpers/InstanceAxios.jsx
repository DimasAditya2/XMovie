import axios from "axios";

const InstanceAxios = axios.create({
  baseURL: "http://localhost:3000",
});

export default InstanceAxios