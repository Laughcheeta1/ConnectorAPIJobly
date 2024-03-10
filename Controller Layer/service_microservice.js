const router = require('express').Router();

const {
    getAllServices,
    postulateForService,
    getServiceForProvider,
    createNewService,
    getServicesByEmployer,
    getServiceForEmployers,
    deleteService,
    getPostulations
} = require('../Service Layer/services_microservice.js');


