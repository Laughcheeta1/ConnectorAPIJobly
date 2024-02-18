import { user_microservices as route } from "./microservices_routes.js";
const axios = require('axios');

const validateUser = (username, password) => {
    return axios.get(`${route}/validate/${username}/${password}`);
}

const getProvider = (id) => {
    return axios.get(`${route}/provider/${id}`);
}

const getEmployer = (id) => {
    return axios.get(`${route}/employer/${id}`);
}

const getCompany = (id) => {
    return axios.get(`${route}/company/${id}`);
}

export default {
    validateUser,
    getProvider,
    getEmployer,
    getCompany
};