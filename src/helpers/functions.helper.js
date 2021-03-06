let dateTime = require("node-datetime");

// Função de apresentação de data/hora formatada
function dataHora(tipo) {
  try {
    let dt = dateTime.create();
    let dataFormatada = '';

    switch(tipo){
      case 'datahora':
        dataFormatada = dt.format("d/m/20y H:M:S");
        break;
      case 'data':
        dataFormatada = dt.format("d/m/20y");
        break;
      case 'hora':
        dataFormatada = dt.format("H:M:S"); 
        break;
      case 'datainvertida':
        dataFormatada = dt.format("20y-m-d");
        break;  
      case 'datainvertida-1':
        dataFormatada = dt.format("20y-m-d") -1;    
    }
    return dataFormatada; 
  
  } catch (error) {
      consoleLog("DATAHORA", "CATCH", "Falha ao capturar a data/hora atual");
      return false;
  }
}

// Função de log formatado
function consoleLog(funcao, acao, mensagem){
  try {
    console.log(`[${dataHora("datahora")}] [${funcao}] [${acao}] | ${mensagem}`);
  } catch (error) {
    console.log("Falha ao montar log");
  }
}

module.exports = {
  dataHora,
  consoleLog
};