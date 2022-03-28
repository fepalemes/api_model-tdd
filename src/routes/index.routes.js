const express = require('express');
const routes = express.Router()
const { healthCheck } = require('../controllers/healthCheck.controller');

//Rota de HealthCheck (monitaração)
routes.get('/api/health-check', healthCheck);

module.exports = routes