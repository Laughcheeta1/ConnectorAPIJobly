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

router.get('/', async (req, res) => {
    try 
    {
        const response = await getAllServices();
        res.status(200).send(response.data);
    } 
    catch (error) 
    {
        res.status(400).send({error : error.message});
    }
});