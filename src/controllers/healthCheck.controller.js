const { dataHora, consoleLog } = require("../helpers/functions.helper");

exports.healthCheck = function(req, res){
    consoleLog("CHAMADA-ENDPOINT", "HEALTH-CHECK", "/api/health-check");
        res.send({ 
            status: true, 
            dataHora : dataHora("datahora"),
            message: 'Servico rodando normalmente'});
}