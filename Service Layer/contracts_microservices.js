import {contract_microservices as route} from './microservices_routes.js';
const axios = require('axios');

// Services offerings
const getServicesOfferings = () => {
    return axios.get(`${route}/services`);

}

const getServicesOffering = (id) => {
    return axios.get(`${route}/services/${id}`);
}

const getServicesOfferingsByEmployer = (id) => {
    return axios.get(`${route}/services_provider/${id}`);
}




// Contracts
const getContract = (id) => {
    return axios.get(`${route}/contract/${id}`);
}

const getContractsByProvider = (id) => {
    return axios.get(`${route}/contracts_provider/${id}`);
}