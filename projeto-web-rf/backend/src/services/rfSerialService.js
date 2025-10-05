const SerialPort = require('serialport');
const { io } = require('../app');

// Configuração da porta serial (ajuste conforme necessário)
const port = new SerialPort('/dev/ttyUSB0', { baudRate: 9600 });

port.on('data', (data) => {
  // Supondo que o dado seja o ID do emissor
  const emitterId = data.toString().trim();
  const event = {
    emitterId,
    timestamp: new Date()
  };
  // Envia evento para o frontend via Socket.io
  io.emit('rf_event', event);
  // TODO: Salvar no banco de dados
});

module.exports = port;
