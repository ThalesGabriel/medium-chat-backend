module.exports = (app, io) => {
  console.log('websocket')
  io.on('connection', socket => {
    socket.on('messageEvent', (info) => {
      io.sockets.emit('messageEvent', info)
    })
  })
};
