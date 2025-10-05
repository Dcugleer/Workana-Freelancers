const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const routes = require('./routes');
const emitterRoutes = require('./routes/emitterRoutes');
const eventRoutes = require('./routes/eventRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use('/api/emitters', emitterRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/reports', reportRoutes);

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  }
});

// Exporta io para uso nos serviços
module.exports = { app, server, io };
