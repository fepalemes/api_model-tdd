const { healthCheck } = require("../../src/controllers/healthCheck.controller");

describe('Teste de health-check', function () {

    test('responde por /api/health-check', () => {
        const req = { };
        const res = { text: '', 
            send: function(input) { this.text = input }
        };
        healthCheck(req, res);

        expect(res.text).toMatchObject({ });
    });
});
