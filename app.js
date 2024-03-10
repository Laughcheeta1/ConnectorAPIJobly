const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { services_microservice } = require('./Service Layer/services_microservice');
const { users_microservice } = require('./Service Layer/users_microservice');

const availableMicroservices = ['', ''];

const app = express();

app.use(cors({
    origin: function (origin, callback) {
      // allow requests with no origin 
      if (!origin || availableMicroservices.indexOf(origin) === -1) {
        var msg = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  }));

app.use(morgan('dev'));
app.use(express.json());
app.use('/API/Jobly/user', users_microservice);
app.use('/API/Jobly/service', services_microservice);

export default {
    app
};