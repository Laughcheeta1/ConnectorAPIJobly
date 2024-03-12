import {contract_microservices as route} from './microservices_routes.js';

const axios = require('axios').create({
    baseURL: route
});
/*
    Version 1.0
*/


// Provider point of view
const getAllServices = () => {
    return axios.get();

}

const postulateForService = (service_id, postulation) => {
    return axios.patch(`/${service_id}/postulate`, postulation);
}

const getServiceForProvider = (service_id) => {
    return axios.get(`/for_provider/${service_id}`);
}


// Employer point of view
const createNewService = (service) => {
    return axios.post(`/create_service`, service);
}

const getServicesByEmployer = (employer_id) => {
    return axios.get(`/get_all_employer/${employer_id}`);

}

const getServiceForEmployers = (service_id) => {
    return axios.get(`/get_one_employer/${id}`);
}

const deleteService = (service_id) => {
    return axios.delete(`/${id}`);
}

const getPostulations = (service_id) => {
    return axios.get(`/${service_id}/postulations`);
}

export default {
    getAllServices,
    postulateForService,
    getServiceForProvider,
    createNewService,
    getServicesByEmployer,
    getServiceForEmployers,
    deleteService,
    getPostulations
};