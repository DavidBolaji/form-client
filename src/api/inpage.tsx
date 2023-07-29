import axios from "axios";

const Fetch = axios.create({
  baseURL: "/",
});

export default Fetch;
