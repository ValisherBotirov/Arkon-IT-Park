import axios from "axios";

interface AXIOS {
  baseURL: string;
}

const $axios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

export default $axios;
