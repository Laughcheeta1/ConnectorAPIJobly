import { user_microservices as route } from "./microservices_routes.js";
const axios = require('axios');

const validateUser = (loginform) => {
    return axios.post(`${route}/validate_login`, loginform);
}

const registerUser = (user) => {
    return axios.post(`${route}/register`, user);
}


export default {
    validateUser,
    registerUser
};