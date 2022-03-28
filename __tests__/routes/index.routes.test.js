const request = require("supertest");
const express = require("express");
const { route } = require("../../src/routes/index.routes");

const app = new express();
app.use('/', route);

describe('Testes das rotas', function (){

    test('responder por /api/health-check', async () => {
        const res = await request(app).get('/api/health-check');
        expect(res.statusCode).toBe(500);
    });
});
