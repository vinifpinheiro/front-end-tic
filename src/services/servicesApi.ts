import axios from "axios";

export const apitest = axios.create({
    baseURL: "http://localhost:3000"
})