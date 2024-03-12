import { user_microservices as route } from "./microservices_routes.js";

const axios = require('axios').create({
    baseURL: route
});

/*
    Version 1.0
*/

const validateUser = (loginform) => {
    return axios.post(`/validate_login`, loginform);
}

const registerUser = (user) => {
    return axios.post(`/register`, user);
}


export default {
    validateUser,
    registerUser
};