import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;
console.log("Environment Variable API Key:", API_KEY);

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getCategory = () => axiosClient.get("/slider?populate=*");

export default {
  getCategory,
};
