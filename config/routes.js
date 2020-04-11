module.exports = app => {
  app.get('/messages', app.api.message.get)
  app.post('/messages', app.api.message.create)
}
  