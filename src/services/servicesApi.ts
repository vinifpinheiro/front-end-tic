import axios from "axios";

export const apitest = axios.create({
    baseURL: "http://localhost:3004"
})

export const api = axios.create({
    baseURL: "https://testecors.herokuapp.com"
})