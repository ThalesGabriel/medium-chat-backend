const express = require('express');
const consign = require('consign');
const mongoose = require('mongoose');
const http = require('http');
const socketio = require('socket.io')

const db = require('./config/db');
require('./config/mongodb')

app = express()
const server = http.Server(app)
const io = socketio(server)

app.db = db
app.mongoose = mongoose

consign()
  .then('./config/websocket.js')
  .then('./config/middleware.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app, io)    

server.listen(3001, () => {
  console.log('server is running on port', server.address().port);
 });