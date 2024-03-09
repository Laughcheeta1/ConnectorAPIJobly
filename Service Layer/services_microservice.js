import {contract_microservices as route} from './microservices_routes.js';
const axios = require('axios');


// Provider point of view
const getAllServices = () => {
    return axios.get(`${route}`);

}

const postulateForService = (service_id, postulation) => {
    return axios.patch(`${route}/${service_id}/postulate`, postulation);
}

const getServiceForProvider = (service_id) => {
    return axios.get(`${route}/for_provider/${service_id}`);
}




// Employer point of view
const makeNewOffer = (offer) => {
    return axios.post(`${route}/new_offer`, offer);
}


const getServicesByEmployer = (employer_id) => {
    return axios.get(`${route}/services/employer/${employer_id}`);

}

const getSpecificService = (service_id) => {
    return axios.get(`${route}/services/${id}`);
}

const getServicesOfferingsByEmployer = (id) => {
    return axios.get(`${route}/services_provider/${id}`);
}