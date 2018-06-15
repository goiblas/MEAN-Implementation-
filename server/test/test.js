const config = require('../config.json');
const request = require('supertest')(config.apiUrl);

require('./apitask.test').test(request);
