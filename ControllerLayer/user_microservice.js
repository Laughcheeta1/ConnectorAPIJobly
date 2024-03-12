const router = require('express').Router();

const {
    validateUser,
    registerUser
} = require('../ServiceLayer/user_microservice.js');

router.post('/validate_login', async (req, res) => {
    try 
    {
        const response = await validateUser(req.body);
        res.status(200).send(response.data);
    } 
    catch (error) 
    {
        res.status(409).send({error : error.message});
    }

    res = response;
});

router.post('/register', async (req, res) => {
    try 
    {
        const response = await registerUser(req.body);
        res.status(201).send(response.data);
    } 
    catch (error) 
    {
        res.status(409).send({error : error.message});
    }
});